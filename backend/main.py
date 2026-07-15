from fastapi.middleware.cors import CORSMiddleware
from fastapi import FastAPI, HTTPException
from typing import List
from datetime import datetime
from models import Ticket, TicketCreate

app = FastAPI(
    title="ServiceIQ Ticketing API",
    description="Customer Service Ticket Management API",
    version="1.0"
)

app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:3000"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# Temporary in-memory storage
tickets = []

ticket_counter = 1


@app.get("/")
def home():
    return {
        "message": "Welcome to ServiceIQ Ticketing API"
    }


@app.post("/tickets")
def create_ticket(ticket: TicketCreate):

    global ticket_counter


    new_ticket = Ticket(

        ticket_id=ticket_counter,

        customer_name=ticket.customer_name,

        email=ticket.email,

        source=ticket.source,

        category=ticket.category,

        priority=ticket.priority,

        description=ticket.description,

        status="Open",

        created_date=datetime.now()

    )


    tickets.append(new_ticket)


    ticket_counter += 1


    return {

        "message":"Ticket created successfully",

        "ticket":new_ticket

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