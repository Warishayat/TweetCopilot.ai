
from langgraph.checkpoint.memory import MemorySaver
checkpointer = MemorySaver()


graph.add_node("Tweet_genration_node",Tweet_genration_node)
graph.add_node("decide_tweeter_position",decide_tweeter_position)
graph.add_node("genral_chat",genral_chat)
graph.add_node("post_tweet_node",post_tweet_node)
graph.add_node("delete_tweet_node",delete_tweet_node)
graph.add_node("update_tweet_node",update_tweet_node)
graph.add_node("decide_chat_router",decide_chat_router)

#lets make edges
graph.add_edge(START, "decide_chat_router")
graph.add_conditional_edges('decide_chat_router',check_side,
                            {
                                'genral_chat':'genral_chat',
                                'twitter_side':'decide_tweeter_position'
                            })
graph.add_edge('genral_chat',END)
graph.add_conditional_edges('decide_tweeter_position',twitter_node_router,
                            {
                                'posted_tweet':'Tweet_genration_node',
                                'deleted_tweet':'delete_tweet_node',
                                'updated_tweet':'update_tweet_node'
                            })
graph.add_edge('Tweet_genration_node','post_tweet_node')
graph.add_edge('post_tweet_node',END)
graph.add_edge('post_tweet_node',END)
graph.add_edge('delete_tweet_node',END)
graph.add_edge('update_tweet_node',END)

workflow = graph.compile(checkpointer=checkpointer)


configurable = {
    'configurable' : {'thread_id':"1011111"}
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
    result = workflow.invoke(initial_state, config=configurable)
    last_msg = result["messages"][-1]
    if isinstance(last_msg, AIMessage):
        print(last_msg.content)