HMR w/ webpack-dev-server CLI
---
This project shows the simplest way to use Webpack HMR, which is with webpack-dev-server CLI




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

Open [http://localhost:8080](http://localhost:8080).



Discussion
---
The `npm start` command runs: `webpack-dev-server --content-base=www --inline --watch --hot`.

Let's discuss each argument:

`--content-base`: Serve whatever content is in the `www/` directory. This is in addition to `webpack-dev-server`'s primary task, which is to server your javascript output bundle.

`--inline`: This adds the 'webpack-dev-server client entry point' to your application. This means `webpack-dev-server` will serve HMR updates. The bottom line is that you need it in order to use HMR.

`--watch`: Watch for changes to your javascript input files and automatically rebuild.

`--hot`: The reason we are here! Enables **hot module replacement**.
