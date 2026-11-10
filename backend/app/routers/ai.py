from fastapi import APIRouter
from app.ai.langgraph_agent import summarize_notes

router = APIRouter(
    prefix="/ai",
    tags=["AI"]
)

@router.post("/summary")
def generate_summary(notes: str):
    summary = summarize_notes(notes)

    return {
        "summary": summary
    }