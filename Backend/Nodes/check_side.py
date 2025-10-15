from classes.state import TweetState

def check_side(state:TweetState):
  if state['call'] == 'chat_side':
    return 'genral_chat'
  elif state['call'] == 'twitter_side':
    return 'twitter_side'