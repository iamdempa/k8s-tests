FROM python:3.7.7

WORKDIR /usr/src/app

RUN pip3 install flask flask_cors

COPY . /usr/src/app

EXPOSE 8083

CMD ["python3", "./server.py"]
