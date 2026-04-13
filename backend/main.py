from fastapi import FastAPI

app = FastAPI()

@app.get("/api")
def get_data():
    return {"message": "Hello from FastAPI backend 🚀"}
