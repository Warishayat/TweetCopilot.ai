// src/TweetCopilot.jsx
import React, { useState, useRef, useEffect } from 'react';
import { Send, Twitter, Loader2, Bot, User } from 'lucide-react';
import Navbar from './Navbar';
const CHAT_ENDPOINT = 'https://tweetcopilot-ai-backend.onrender.com/chat';

const initialMessages = [
  {
    id: 1,
    sender: 'Bot',
    text: "Hello! I'm TweetCopilot. I can help you draft engaging, professional, or viral tweets. What tone or topic are you aiming for?",
  },
];

const TweetCopilot = () => {
  const [messages, setMessages] = useState(initialMessages);
  const [input, setInput] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef(null);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  const MessageBubble = ({ sender, text }) => {
    const isBot = sender === 'Bot';
    const bubbleClass = isBot
      ? 'bg-x-dark self-start rounded-tr-xl rounded-bl-xl rounded-br-xl'
      : 'bg-primary-blue self-end text-x-dark rounded-tl-xl rounded-bl-xl rounded-br-xl';
    
    const icon = isBot 
      ? <Bot className="w-5 h-5 text-primary-blue flex-shrink-0" />
      : <User className="w-5 h-5 text-x-dark flex-shrink-0" />;

    return (
      <div className={`flex ${isBot ? 'justify-start' : 'justify-end'} mb-4`}>
        <div className={`flex items-start max-w-lg ${isBot ? 'space-x-3' : 'space-x-3 flex-row-reverse'}`}>
          <div className="p-2 rounded-full bg-x-medium shadow-md">
            {icon}
          </div>
          <div className={`p-4 shadow-md ${bubbleClass}`}>
            <p className="text-sm" dangerouslySetInnerHTML={{ __html: text }} />
          </div>
        </div>
      </div>
    );
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const userPrompt = input.trim();
    if (!userPrompt) return;

    const newUserMessage = {
      id: messages.length + 1,
      sender: 'User',
      text: userPrompt,
    };
    setMessages((prev) => [...prev, newUserMessage]);
    setInput('');
    setIsTyping(true);

    try {
      const response = await fetch(CHAT_ENDPOINT, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ prompt: userPrompt }), 
      });

      let responseData;
      try {
          responseData = await response.json();
      } catch (jsonError) {
          throw new Error('Received non-JSON response from server.');
      }


      if (!response.ok) {
        const errorMessage = responseData.detail || `Server error: ${response.status}`;
        throw new Error(errorMessage);
      }
    
      const botResponseText = responseData.message; 

      if (!botResponseText) {
         throw new Error("Received success status but no 'message' content in response.");
      }
      const botMessage = {
        id: messages.length + 2,
        sender: 'Bot',
        text: botResponseText,
      };
      setMessages((prev) => [...prev, botMessage]);

    } catch (error) {
      console.error('Error fetching chat response:', error);
      const errorMessage = {
        id: messages.length + 2,
        sender: 'Bot',
        text: `Error: Could not process request. Detail: ${error.message}`,
      };
      setMessages((prev) => [...prev, errorMessage]);
    } finally {
      // 5. Stop typing indicator
      setIsTyping(false);
    }
  };

  return (
    <div className="min-h-screen bg-x-medium text-x-text pt-2 pb-8">
      <div>
        <Navbar/>
      </div>
      <div className="max-w-3xl mx-auto h-[80vh] flex flex-col bg-x-dark rounded-2xl shadow-2xl border border-x-medium overflow-hidden mt-20">
        <div className="p-4 bg-x-medium border-b border-x-subtext/30 flex items-center justify-between">
          <div className="flex items-center">
            <Twitter className="w-6 h-6 text-primary-blue mr-2" />
            <h2 className="text-xl font-bold text-x-text">TweetCopilot Chat</h2>
          </div>
          <p className="text-xs text-x-subtext">AI-Powered Tweet Generation</p>
        </div>

        <div className="flex-grow p-6 overflow-y-auto">
          {messages.map((msg) => (
            <MessageBubble key={msg.id} sender={msg.sender} text={msg.text} />
          ))}
          {isTyping && (
            <div className="flex justify-start mb-4">
              <div className="flex items-center space-x-3">
                <div className="p-2 rounded-full bg-x-medium shadow-md">
                  <Bot className="w-5 h-5 text-primary-blue flex-shrink-0" />
                </div>
                <div className="p-4 bg-x-dark self-start rounded-tr-xl rounded-bl-xl rounded-br-xl">
                  <Loader2 className="w-5 h-5 text-x-subtext animate-spin" />
                </div>
              </div>
            </div>
          )}
          <div ref={messagesEndRef} />
        </div>
        <form onSubmit={handleSubmit} className="p-4 border-t border-x-subtext/30 bg-x-medium flex items-center">
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Ask TweetCopilot to draft a tweet..."
            className="flex-grow p-3 mr-3 bg-x-dark border border-x-subtext/30 rounded-full text-x-text placeholder-x-subtext focus:border-primary-blue focus:ring-primary-blue transition-colors duration-200"
          />
          <button
            type="submit"
            className="p-3 bg-primary-blue text-x-dark rounded-full transition-colors duration-200 hover:bg-primary-blue/80 disabled:opacity-50"
            disabled={!input.trim() || isTyping}
          >
            <Send className="w-5 h-5" />
          </button>
        </form>
      </div>
    </div>
  );
};

export default TweetCopilot;