from langchain_core.messages import AIMessage,SystemMessage,HumanMessage
from classes.state import TweetState


def Tweet_genration_node(state: TweetState) -> TweetState:
    topic = state['topic'][-1]

    system_msg = "You are an expert social media AI assistant."
    prompt = f"""
    Generate a creative, engaging, and short tweet about the following topic:

    Topic: '{topic}'

    Requirements:
    - Maximum 280 characters.
    - Avoid hashtags unless very relevant.
    - Keep it informative, friendly, and concise.
    - Output only the tweet text. No extra commentary.
    """

    msg = [
        SystemMessage(content=system_msg),
        HumanMessage(content=prompt)
    ]

    try:
        tweet = Model.invoke(msg).content
        if tweet:
            state['genrated_tweet'].append(tweet)
        else:
            state['messages'].append(AIMessage(content="Failed to generate tweet."))
    except Exception as e:
        state['messages'].append(AIMessage(content=f"Error generating tweet: {str(e)}"))

    return state
