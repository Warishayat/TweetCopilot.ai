from langchain_core.messages import AIMessage,SystemMessage,HumanMessage
from classes.state import TweetState

def decide_chat_router(state: TweetState):
    topic = state['topic'][-1]
    prompt = f"""
    You are an expert AI assistant.
    Decide whether this input relates to Twitter actions (post/update/delete) or is general chat.

    Output only:
    - "twitter_side"
    - "chat_side"

    User input: "{topic}"
    """
    msg = [
        SystemMessage(content="You are a helpful assistant."),
        HumanMessage(content=prompt)
    ]

    try:
        response = ChatDeciderModel.invoke(msg)
        decider = getattr(response, "call", None)
        if not decider and isinstance(response, dict):
            decider = response.get("call")

        if decider in ["chat_side", "twitter_side"]:
            state["call"] = decider
        else:
            state["messages"].append(AIMessage(content=f"Unexpected decider output: {response}"))
            state["call"] = "chat_side"
    except Exception as e:
        state["messages"].append(AIMessage(content=f"Error in decide_chat_router: {str(e)}"))
        state["call"] = "chat_side"

    return state
