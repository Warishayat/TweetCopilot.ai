from pydantic import BaseModel,Field
from typing_extensions import Literal

class chat_decider(BaseModel):
  call : Literal['chat_side','twitter_side'] = Field(description="based on user input you will decide this is genral chat or this is twitter_side related chat")


