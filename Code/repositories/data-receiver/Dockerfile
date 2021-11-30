FROM ubuntu

ARG DEBIAN_FRONTEND=noninteractive

ADD . /tornado
WORKDIR /tornado

RUN apt-get update
RUN echo "y" | apt-get install iptables-persistent
RUN echo "y" | apt-get install python3-pip
RUN echo "y" | apt-get install wireshark
RUN apt-get install -y tigervnc-viewer
RUN apt-get install -y tshark
RUN pip3 install --no-cache-dir -r requirements.txt
RUN echo "y" | dpkg-reconfigure wireshark-common
RUN apt install -y curl
RUN apt-get update

## Installing scapy
RUN pip3 install scapy

CMD ["python3","main.py"]
