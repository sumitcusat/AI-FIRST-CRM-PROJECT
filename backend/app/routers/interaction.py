from fastapi import APIRouter, Depends
from sqlalchemy.orm import Session

from app.database import get_db
from app.models import Interaction

router = APIRouter(prefix="/interactions", tags=["Interactions"])


@router.get("/")
def get_interactions(db: Session = Depends(get_db)):
    return db.query(Interaction).all()


@router.post("/")
def create_interaction(
    doctor_name: str,
    hospital: str,
    interaction_type: str,
    notes: str,
    db: Session = Depends(get_db)
):
    interaction = Interaction(
        doctor_name=doctor_name,
        hospital=hospital,
        interaction_type=interaction_type,
        notes=notes
    )

    db.add(interaction)
    db.commit()
    db.refresh(interaction)

    return interaction