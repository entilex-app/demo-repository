"""FastAPI wrapper for the FastMCP demo.

This file creates a regular FastAPI application and mounts the FastMCP
server as a sub‑application under the ``/mcp`` prefix.  You can then add
additional FastAPI routes alongside the automatically generated MCP tools.
"""

from fastapi import FastAPI
from fastmcp import FastMCP

# ----------------------------------------------------------------------
# FastMCP instance – same as in ``server.py``
# ----------------------------------------------------------------------

mcp = FastMCP("Demo FastMCP App")


@mcp.tool
def add(a: int, b: int) -> int:
    """Return the sum of *a* and *b*."""
    return a + b


@mcp.tool
def greet(name: str) -> str:
    """Return a friendly greeting for *name*."""
    return f"Hello, {name}!"


# ----------------------------------------------------------------------
# FastAPI application – you can define your own routes here
# ----------------------------------------------------------------------

app = FastAPI(title="Demo FastAPI + FastMCP", version="0.1.0")


@app.get("/ping")
def ping() -> str:
    """Simple health‑check endpoint."""
    return "pong"


# Mount the FastMCP server under ``/mcp``.  All MCP tool endpoints will be
# available at ``/mcp/tools/<tool_name>`` and the OpenAPI docs at ``/mcp/docs``.
app.mount("/mcp", mcp.app)

# ----------------------------------------------------------------------
# Run the combined server
# ----------------------------------------------------------------------
if __name__ == "__main__":
    # ``uvicorn`` is already a dependency of FastMCP.
    import uvicorn

    uvicorn.run(app, host="0.0.0.0", port=8000)
