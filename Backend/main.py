from fastapi import FastAPI, HTTPException
from classes.user_input import prompt
from Agent.agent import workflow

app = FastAPI()

@app.get("/")
def welcome():
    return {
        'message': "welcome from the home page"
    }

@app.post("/chat")
async def messages(user_input: prompt):
    if not user_input:
        raise HTTPException(status_code=400, detail="Enter prompt to get the answer")
    
    config = {
        'configurable': {'thread_id': "2"}
    }
    initial_state = {
        "topic": [user_input.prompt],
        "genrated_tweet": [],
        "posted_tweet": {},
        "deleted_tweet": [],
        "updated_tweet": {},
        "tweet_id": [],
        "node_call": None,
        "messages": []
    }

    try:
        response = await workflow.ainvoke(initial_state, config=config)
        message = response['messages'][-1].content
        return {
            "status": 200,
            'message': message
        }
    except Exception as e:
        raise HTTPException(status_code=500, detail=f"Some error found: {e}")