from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware

from app.database import Base, engine
from app.models import Interaction

# Import Routers
from app.routers import interaction
from app.routers import ai

# Create all database tables
Base.metadata.create_all(bind=engine)

# Create FastAPI app
app = FastAPI(
    title="AI First CRM",
    version="1.0.0"
)

# Enable CORS
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# Include Routers
app.include_router(interaction.router)
app.include_router(ai.router)

# Home Route
@app.get("/")
def home():
    return {
        "status": "success",
        "message": "AI First CRM Backend Running Successfully"
    }