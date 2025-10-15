from classes.state import TweetState
from langchain_core.messages import AIMessage,SystemMessage,HumanMessage


def update_tweet_node(state: TweetState):
    """
    Simulates updating a tweet: shows old tweet, deletes it, posts new text.
    """
    client = Client(
        bearer_token=twitter_bearer_token,
        consumer_key=twitter_api_key,
        consumer_secret=twitter_secret_key,
        access_token=twitter_acess_token,
        access_token_secret=twitter_acess_token_secret,
    )

    if not state['posted_tweet']:
        state['messages'].append(AIMessage(content="No posted tweet to update."))
        return state

    tweet_id = list(state['posted_tweet'].keys())[-1]
    new_text = state['genrated_tweet'][-1]

    try:
        old_tweet = client.get_tweet(id=tweet_id)
        old_text = old_tweet.data.get("text")

        delete_resp = client.delete_tweet(id=tweet_id)
        if not delete_resp.data or not delete_resp.data.get("deleted", False):
            state['messages'].append(AIMessage(content=f"Failed to delete old tweet {tweet_id}"))
            return state
        state['messages'].append(AIMessage(content=f"Old tweet: {old_text}"))
        state['posted_tweet'].pop(tweet_id)
        new_resp = client.create_tweet(text=new_text)
        new_id = new_resp.data["id"]
        state['posted_tweet'][new_id] = new_text
        state['messages'].append(AIMessage(content=f"Tweet updated successfully! New tweet ID: {new_id}"))
    except Exception as e:
        state['messages'].append(AIMessage(content=f"Error updating tweet: {str(e)}"))
    return state