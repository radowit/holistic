FROM python:3.10.2-bullseye

WORKDIR /usr/src

RUN pip install --upgrade pip
RUN pip install poetry
COPY pyproject.toml /usr/src/pyproject.toml
RUN poetry install

CMD ["poetry", "run", "deploy-dev"]