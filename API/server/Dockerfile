FROM python:3.10

RUN pip install Flask gunicorn firebase

COPY . .

ENV PORT 5000

CMD exec gunicorn --bind :$PORT --workers 1 --threads 8 app:app