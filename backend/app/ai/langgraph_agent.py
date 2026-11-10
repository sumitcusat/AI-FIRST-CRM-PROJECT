from dotenv import load_dotenv
import os

from typing import TypedDict
from langgraph.graph import StateGraph, END
from langchain_google_genai import ChatGoogleGenerativeAI

# Load .env file
load_dotenv()

# Gemini LLM
llm = ChatGoogleGenerativeAI(
    model="gemini-2.0-flash",
    google_api_key=os.getenv("GOOGLE_API_KEY"),
    temperature=0
)

# State
class GraphState(TypedDict):
    notes: str
    summary: str

# Node
def summarize(state: GraphState):
    prompt = f"""
Summarize the following doctor's interaction in 2-3 sentences.

Notes:
{state['notes']}
"""

    response = llm.invoke(prompt)

    return {
        "summary": response.content
    }

# Build Graph
builder = StateGraph(GraphState)

builder.add_node("summarize", summarize)
builder.set_entry_point("summarize")
builder.add_edge("summarize", END)

graph = builder.compile()

# Function called by ai.py
def summarize_notes(notes: str):
    result = graph.invoke({
        "notes": notes,
        "summary": ""
    })

    return result["summary"]