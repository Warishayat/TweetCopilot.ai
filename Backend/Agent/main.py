from agent import workflow
from langchain_core.messages import BaseMessage, SystemMessage, AIMessage, HumanMessage

config = {
    'configurable': {"thread_id": "1"}
}

initial_state = {
    "topic": [],
    "genrated_tweet": [],
    "posted_tweet": {},
    "deleted_tweet": [],
    "updated_tweet": {},
    "tweet_id": [],
    "node_call": None,
    "messages": []
}

while True:
    question = input("Ask me anything: ")
    if question.lower() == "exit":
        break
    initial_state["topic"].append(question)
    
    # last_ai_message = None
    # for msg_chunk, meta_data in workflow.stream(initial_state, config=config, stream_mode='messages'):
    #     if isinstance(msg_chunk, AIMessage):
    #         last_ai_message = msg_chunk
    
    # if last_ai_message:
    #     print(last_ai_message.content)
    res=workflow.invoke(initial_state,config=config)
    print(res['messages'][-1].content)