from Graph.graph import workflow
from IPython.display import Image,display

try:
  display(Image(workflow.get_graph().draw_mermaid_png()))
except Exception as e:
  print(e)