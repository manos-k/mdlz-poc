docker build -t manosk/multi-ui-k8s:latest -f ./test-api-calls/Dockerfile ./test-api-calls
docker build -t manosk/multi-api-k8s:latest -f ./fast-api/Dockerfile ./fast-api

docker push manosk/multi-api-k8s:latest
docker push manosk/multi-ui-k8s:latest

kubectl apply -f k8s

kubectl set image deployments/api api=manosk/multi-api-k8s:latest
kubectl set image deployments/ui ui=manosk/multi-ui-k8s:latest

