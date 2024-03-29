# microservice-a
nodejs mock microservice for demos on containers

[20240203]
- Updated code to use **port 8080** by default instead of 3000
  so that it is in the same as microservice-b

- Initial scaffolding via express generator:
```
$ sudo npm install -g express-generator
$ express microservice-a --view=pug
```

- To start app locally :
```
$ cd src/
$ npm install
$ npm start
$ curl http://localhost:3000
$ curl http://localhost:3000/servicea
```

- To containerize and run image locally
```
$ docker build -t quay.io/bkthong/servicea:latest .
$ docker run -d --name test -p 3000:3000 quay.io/bkthong/servicea:latest
$ curl localhost:3000/servicea
$ docker stop test
$ docker rm test
```

# Notes
- If using M1 ARM processor machine to build the image, it cannot run on fargate by default:
   "exec format error" will appear in the logs of the task on ecs that tries to run the image
- Easiest way is to build on amd64 and push to quay.io
- Dockerfile updated to include amd64 arch via --platform. So no more problems building on M1 chip on Macbook
