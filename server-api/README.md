HMR w/ webpack-dev-server API
---
This project shows an example of how to use Webpack HMR with the webpack-dev-server API.


Setup
---

    npm install


Running
---

    npm start

Open [http://localhost:8080](http://localhost:8080).

Discussion
---
The `npm start` command runs: `node server.js`. This starts the `webpack-dev-server` with it's API. This is a very flexible way to use the dev server because you can run it from within your **gulp** or **grunt** tasks, or from within your own custom scripts.

If you compare the [API webpack.config.js](webpack.config.js) located here and the [CLI webpack.config.js](../server-cli/webpack.config.js), you'll notice that the API version has a few additions:

* `HotModuleReplacementPlugin` in the `plugins:` section.
* `webpack/hot/dev-server` entry point.
* `webpack-dev-server/client...` entry point.

When you run the webpack dev server with the CLI you don't need these, because the `webpack-dev-server` CLI adds them for you. So running the `webpack-dev-server` via it's API is slightly more complicated - but worth it if it fits your workflow.
