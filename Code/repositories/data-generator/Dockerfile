FROM python:3.7-alpine

ADD . /tornado
WORKDIR /tornado
RUN pip install --upgrade pip
RUN pip install --no-cache-dir -r requirements.txt

RUN apk update
RUN apk add curl

CMD ["python3","main.py"]
