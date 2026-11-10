from sqlalchemy import Column, Integer, String, Text
from app.database import Base


class Interaction(Base):
    __tablename__ = "interactions"

    id = Column(Integer, primary_key=True, index=True)
    doctor_name = Column(String(100))
    hospital = Column(String(100))
    interaction_type = Column(String(50))
    notes = Column(Text)