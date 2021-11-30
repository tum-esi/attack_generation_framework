FROM docker

RUN apk add --no-cache \
	python3 \
	py3-pip \
	curl

ADD ./repositories /repositories
ADD ./controller /controller
ADD ./tars /tars
RUN pip install --upgrade pip
RUN pip install --no-cache-dir -r /controller/requirements.txt
CMD ["python3","/controller/main.py"]
