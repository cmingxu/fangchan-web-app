VERSION=$(shell git describe --tags `git rev-list --tags --max-count=1`)
IMAGE_NAME=frontend
REGISTRY=johnsnow-cn-north-1.jcr.service.jdcloud.com/frontend

release:
	docker build . --build-arg version=${VERSION} -t ${IMAGE_NAME}:${VERSION}
	docker tag ${IMAGE_NAME}:${VERSION}  ${REGISTRY}:${VERSION}
	docker push ${REGISTRY}:${VERSION}