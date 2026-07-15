from pydantic import BaseModel
from datetime import datetime
from typing import Optional



# Data coming from React Create Ticket Form

class TicketCreate(BaseModel):

    customer_name: str

    email: str

    source: str

    category: str

    priority: str

    description: str




# Complete Ticket Object

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