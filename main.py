from fastapi import FastAPI

app = FastAPI(title="Demo FastAPI App", version="0.1.0")

@app.get("/ping")
async def ping() -> str:
    """Health‑check endpoint returning a simple string."""
    return "pong"

@app.get("/hello/{name}")
async def hello(name: str) -> str:
    """Return a friendly greeting for the supplied *name*.

    Example: ``GET /hello/John`` → ``"Hello, John!"``
    """
    return f"Hello, {name}!"

if __name__ == "__main__":
    import uvicorn
    uvicorn.run(app, host="0.0.0.0", port=8000)
