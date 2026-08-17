from fastmcp import FastMCP

# Create a FastMCP instance with a name for your app
mcp = FastMCP("Demo FastMCP App")


# Example tool: add two integers
@mcp.tool
def add(a: int, b: int) -> int:
    """Return the sum of *a* and *b*.
    FastMCP will automatically generate the schema, validate the inputs,
    and expose this function through the MCP protocol.
    """
    return a + b


# Example tool: greet a user
@mcp.tool
def greet(name: str) -> str:
    """Return a friendly greeting for *name*."""
    return f"Hello, {name}!"


if __name__ == "__main__":
    # Run the FastMCP server. By default it starts on localhost:8000.
    # You can change the host/port with the `host` and `port` arguments.
    mcp.run(host="0.0.0.0", port=8000)
