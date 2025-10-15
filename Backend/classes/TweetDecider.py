from pydantic import BaseModel,Field
from typing_extensions import Literal

class TweetDecider(BaseModel):
  node : Literal['posted_tweet','deleted_tweet','updated_tweet'] = Field(description="based on the node you will answer from one of these 'posted_tweet','deleted_tweet','updated_tweet'")
