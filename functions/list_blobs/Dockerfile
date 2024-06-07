FROM python:3.10-slim

WORKDIR /app

COPY requirements.txt .
RUN pip install --no-cache-dir -r requirements.txt
ENV GOOGLE_APPLICATION_CREDENTIALS=/app/api-key.json

COPY . .

CMD ["functions-framework", "--target=list_blobs", "--port=8080"]