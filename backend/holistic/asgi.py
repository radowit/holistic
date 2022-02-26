import uvicorn
from starlette.applications import Starlette
from starlette.middleware import Middleware
from starlette.middleware.cors import CORSMiddleware
from starlette.responses import JSONResponse
from starlette.routing import Route


async def homepage(request):
    return JSONResponse({"message": "hello world"})


app = Starlette(
    debug=True,
    routes=[
        Route("/", homepage),
    ],
    middleware=[Middleware(CORSMiddleware, allow_origins=["http://localhost:3000"])],
)


def start():
    uvicorn.run("holistic.asgi:app", host="0.0.0.0", port=8000, reload=True)
