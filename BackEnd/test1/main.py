import uvicorn

from server.config import settings

if __name__ == "__main__":
    uvicorn.run(
        "server:app",
        host=settings.host,
        reload=settings.debug_mode,
        port=settings.port,
    )
