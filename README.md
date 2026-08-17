# Welcome to your organization's demo repository

## FastMCP Demo Application

This repository now includes a **FastMCP** example app. It demonstrates how to create a FastMCP instance with a few simple tools (add, greet, multiply) and run it as a standalone server.

### Running the FastMCP app

1. **Install dependencies** (if not already installed):
   ```bash
   pip install -r requirements.txt
   ```
2. **Start the server**:
   ```bash
   python fastmcp_app.py
   ```
   The server will listen on `http://0.0.0.0:8000`.

3. **Explore the API**:
   - Health check: `GET /ping` (returns `"pong"`).
   - FastMCP tools are available under `/tools/<tool_name>` and the OpenAPI docs at `/docs`.
   - Example tool calls:
     - `POST /tools/add` with JSON `{ "a": 2, "b": 3 }` returns `5`.
     - `POST /tools/greet` with JSON `{ "name": "Alice" }` returns `"Hello, Alice!"`.
     - `POST /tools/multiply` with JSON `{ "a": 4, "b": 5 }` returns `20`.

---

The original repository content follows.

# Welcome to your organization's demo repository
This code repository (or "repo") is designed to demonstrate the best GitHub has to offer with the least amount of noise.

The repo includes an `index.html` file (so it can render a web page), two GitHub Actions workflows, and a CSS stylesheet dependency.
This code repository (or "repo") is designed to demonstrate the best GitHub has to offer with the least amount of noise.

The repo includes an `index.html` file (so it can render a web page), two GitHub Actions workflows, and a CSS stylesheet dependency.
