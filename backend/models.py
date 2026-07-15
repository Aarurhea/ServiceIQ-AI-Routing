from pydantic import BaseModel
from datetime import datetime

class Ticket(BaseModel):
    ticket_id: int
    customer_name: str
    email: str
    source: str
    category: str
    priority: str
    description: str
    status: str
    created_date: datetime