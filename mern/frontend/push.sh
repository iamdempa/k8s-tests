docker kill $(docker ps -q) || true && docker rm $(docker ps -a -q) || true && docker rmi -f $(docker images -q)  || true

docker rmi -f frontend:latest || true && docker rmi -f 19950818/k8s:frontend || true
docker build -t frontend:latest .
docker tag frontend:latest 19950818/k8s:frontend 
docker push 19950818/k8s:frontend