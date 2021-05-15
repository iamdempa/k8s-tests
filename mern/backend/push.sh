docker kill $(docker ps -q) || true && docker rm $(docker ps -a -q) || true && docker rmi -f $(docker images -q) || true

docker rmi -f backend:latest || true && docker rmi -f 19950818/k8s:backend || true

docker build -t backend:latest .
docker tag backend:latest 19950818/k8s:backend 
docker push 19950818/k8s:backend