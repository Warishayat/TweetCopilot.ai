from langchain_core.messages import AIMessage,SystemMessage,HumanMessage
from classes.state import TweetState
from langchain_google_genai import ChatGoogleGenerativeAI


Model = ChatGoogleGenerativeAI(model='gemin-2.5-flash')

def genral_chat(state: TweetState) -> TweetState:
    question = state['topic']
    history = state['messages']
    history.append(HumanMessage(content=question))
    system_msg = "You are a helpful assistant."
    user_prompt = f"You are helpful assistant based on user query: '{history}'. Provide a simple, unique, and to-the-point answer.\n\n and this is message history - {state['messages']}"

    msg = [
        SystemMessage(content=system_msg),
        HumanMessage(content=user_prompt)
    ]

    try:
        answer = Model.invoke(msg).content
        if answer:
            state['messages'].append(AIMessage(content=answer))
        else:
            state['messages'].append(AIMessage(content="Failed to generate answer."))
    except Exception as e:
        state['messages'].append(AIMessage(content=f"Error generating answer: {str(e)}"))

    return state
