# microservice-a
nodejs mock microservice for demos on containers


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