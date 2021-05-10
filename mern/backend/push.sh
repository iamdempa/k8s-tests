docker kill $(docker ps -q) || true && docker rm $(docker ps -a -q) || true && docker rmi -f $(docker images -q) || true

docker build -t backend .
docker tag backend 19950818/k8s:backend 
docker push 19950818/k8s:backend