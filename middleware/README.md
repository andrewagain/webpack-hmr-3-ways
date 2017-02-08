HMR w/ webpack-hot-middleware and express
---
This project is a simple example of how to use [webpack-hot-middleware](https://github.com/glenjamin/webpack-hot-middleware) to enable HMR on your express server.



Setup
---

```
npm install
```



Running
---

```
npm start
```

Open [http://localhost:3000](http://localhost:3000).



Discussion
---
The `npm start` command runs: `node server.js`. This starts the express server which is configured to use `webpack-hot-middleware`.

This is ideal when you are already using or planning to use express.
