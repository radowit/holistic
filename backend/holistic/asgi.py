from starlette.applications import Starlette
from starlette.middleware import Middleware
from starlette.middleware.cors import CORSMiddleware
from starlette.requests import Request
from starlette.responses import JSONResponse
from starlette.routing import Route
from uvicorn import run


async def homepage(request: Request) -> JSONResponse:
    response: dict[str, str] = {"message": "hello world"}
    return JSONResponse(response)


origins: list[str] = ["http://localhost:3000"]
app = Starlette(
    debug=True,
    routes=[Route("/", homepage)],
    middleware=[Middleware(CORSMiddleware, allow_origins=origins)],
)


def start() -> None:
    run(app="holistic.asgi:app", host="0.0.0.0", port=8000, reload=True)
