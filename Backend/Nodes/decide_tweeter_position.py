from langchain_core.messages import AIMessage,SystemMessage,HumanMessage
from classes.state import TweetState



def decide_tweeter_position(state: TweetState):
    topic = state['topic'][-1]
    prompt = f"""
      You are an expert social media AI assistant.
      Your task is to decide which node should be called based on the user's query or topic.
      The available nodes are:
      - post_node
      - delete_node
      - update_node

      User query/topic: `{topic}`

      Instructions:
      - Analyze the query carefully.
      - Choose only one node that is most appropriate for the action the user wants to perform.
      - Return the node name only, nothing else.
"""
    system_msg = "You are a helpful assistant."
    msg = [
        SystemMessage(content=system_msg),
        HumanMessage(content=prompt)]
    result = TweetDeciderModel.invoke(msg).node
    if result:
      state['node_call'] = result
      return state
    else:
      state['messages'].append(AIMessage(content="Failed to decide the next step."))
      return state
