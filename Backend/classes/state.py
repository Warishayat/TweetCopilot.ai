from typing_extensions import TypedDict
from langgraph.graph.message import add_messages
from langchain_core.messages import BaseMessage
from typing import Annotated,Literal,Dict,List

class TweetState(TypedDict):
    messages: Annotated[List[BaseMessage], add_messages]  
    topic: str 
    call: Literal['chat_side', 'twitter_side']  
    genrated_tweet: str  
    posted_tweet: Dict[str, str]  
    deleted_tweet: List[str]  
    updated_tweet: Dict[str, str]  
    node_call: Literal['posted_tweet', 'deleted_tweet', 'updated_tweet']  
    tweet_id: str 