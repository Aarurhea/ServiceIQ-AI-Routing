from fastapi import FastAPI, HTTPException
from typing import List
from models import Ticket

app = FastAPI(
    title="ServiceIQ Ticketing API",
    description="Customer Service Ticket Management API",
    version="1.0"
)

# Temporary in-memory storage
tickets = []


@app.get("/")
def home():
    return {
        "message": "Welcome to ServiceIQ Ticketing API"
    }


@app.post("/tickets")
def create_ticket(ticket: Ticket):
    tickets.append(ticket)
    return {
        "message": "Ticket created successfully",
        "ticket": ticket
    }


@app.get("/tickets", response_model=List[Ticket])
def get_all_tickets():
    return tickets


@app.get("/tickets/{ticket_id}")
def get_ticket(ticket_id: int):

    for ticket in tickets:
        if ticket.ticket_id == ticket_id:
            return ticket

    raise HTTPException(
        status_code=404,
        detail="Ticket not found"
    )