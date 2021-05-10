docker kill $(docker ps -q) || true && docker rm $(docker ps -a -q) || true && docker rmi -f $(docker images -q)  || true

docker build -t frontend .
docker tag frontend 19950818/k8s:frontend 
docker push 19950818/k8s:frontend