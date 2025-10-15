from classes.state import TweetState
from langchain_core.messages import AIMessage,SystemMessage,HumanMessage



def delete_tweet_node(state: TweetState) -> TweetState:
    """
    Deletes the last posted tweet from Twitter.
    Updates the state with the deleted tweet info and appends messages.
    """

    client = Client(
        bearer_token=twitter_bearer_token,
        consumer_key=twitter_api_key,
        consumer_secret=twitter_secret_key,
        access_token=twitter_acess_token,
        access_token_secret=twitter_acess_token_secret,
    )

    if not state['posted_tweet']:
        state['messages'].append(AIMessage(content="No posted tweet to delete."))
        return state

    tweet_id = list(state['posted_tweet'].keys())[-1]

    try:
        response = client.delete_tweet(id=tweet_id)
        if response.data.get("deleted", False):
            del state['posted_tweet'][tweet_id]
            state['deleted_tweet'].append(tweet_id)
            state['messages'].append(
                AIMessage(content=f"Tweet deleted successfully! URL: https://twitter.com/user/status/{tweet_id}")
            )
        else:
            state['messages'].append(AIMessage(content=f"Failed to delete tweet {tweet_id}"))
    except Exception as e:
        state['messages'].append(AIMessage(content=f"Error deleting tweet: {str(e)}"))
    return state
