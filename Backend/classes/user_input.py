from pydantic import BaseModel,Field

class prompt(BaseModel):
    prompt:str=Field(description="this will be prompt will take form frontend and based on it i will provide the response")