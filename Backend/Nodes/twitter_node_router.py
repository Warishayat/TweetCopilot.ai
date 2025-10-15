from classes.state import TweetState

def twitter_node_router(state: TweetState):
    node = state['node_call']
    if node == 'posted_tweet':
        return 'posted_tweet'
    elif node == 'deleted_tweet':
        return 'deleted_tweet'
    elif node == 'updated_tweet':
        return 'updated_tweet'
    else:
        return "failed to decide node"