from fastapi import FastAPI

app = FastAPI(
    title="ServiceIQ API",
    description="Integrated Customer Service Platform with AI Routing",
    version="1.0"
)

@app.get("/")
def home():
    return {
        "message": "Welcome to ServiceIQ API",
        "status": "Running"
    }

@app.get("/health")
def health():
    return {
        "application": "ServiceIQ",
        "status": "Healthy"
    }