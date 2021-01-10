VERSION=$(shell git describe --tags `git rev-list --tags --max-count=1`)
IMAGE_NAME=frontend
REGISTRY=114.67.82.34:8081/fangchan

release:
	docker build . --build-arg version=${VERSION} -t ${IMAGE_NAME}:${VERSION}
	docker tag ${IMAGE_NAME}:${VERSION}  ${REGISTRY}/${IMAGE_NAME}:${VERSION}
	docker push ${REGISTRY}/${IMAGE_NAME}:${VERSION}
