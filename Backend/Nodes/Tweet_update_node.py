from langchain_core.messages import AIMessage,SystemMessage,HumanMessage
from classes.state import TweetState

def Tweet_update_node(state: TweetState) -> TweetState:
    """
    Revise and improve the generated tweet to make it more engaging.
    Updates the state with the revised tweet.
    """
    # Check if we have generated tweets
    if not state.get('generated_tweet') or not state['generated_tweet']:
        state['messages'].append(AIMessage(content="No generated tweet available to update."))
        return state
    
    # Check if we have topic
    if not state.get('topic') or not state['topic']:
        state['messages'].append(AIMessage(content="No topic available for context."))
        return state
    
    latest_tweet = state['generated_tweet'][-1]
    topic = state['topic'][-1]
    
    prompt = f"""
    You are an expert social media AI assistant.
    Your task is to revise and improve the following tweet based on the original topic.

    Topic: `{topic}`
    Original Tweet: `{latest_tweet}`

    Requirements:
    - Keep it under 280 characters.
    - Make the revision more engaging and conversational.
    - Improve clarity and impact.
    - Maintain the original meaning.

    Provide the revised tweet text only.
    """
    sys_msg = "You are a helpful assistant."
    msg = [
        SystemMessage(content=sys_msg),
        HumanMessage(content=prompt)
    ]
    try:
        update_tweet = Model.invoke(msg).content
        
        if update_tweet:
            state['generated_tweet'].append(update_tweet)
            state['messages'].append(AIMessage(content=f"Tweet updated successfully! New version: {update_tweet}"))
        else:
            state['messages'].append(AIMessage(content="Failed to generate updated tweet."))
            
    except Exception as e:
        state['messages'].append(AIMessage(content=f"Error updating tweet: {str(e)}"))
    
    return state