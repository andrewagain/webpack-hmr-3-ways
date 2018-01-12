HMR 3 Ways
---
There are 3 ways to use Webpack HMR. This repository contains a minimal example of each way. In order from simplest to most complex:

* Using the [webpack-dev-server CLI](server-cli)
* Using the [webpack-dev-server API](server-api)
* Using [express and webpack-hot-middleware](middleware)


Here is a short discussion on how to pick the method you want to use.

* **If you want the simplest possible setup** then use the [webpack-dev-server CLI](server-cli).

* **If you are using a task runner like grunt or gulp** you'll want to use the [webpack-dev-server API](server-api).

* Or similarly, if you **have your own node scripts to run webpack**, you'll want to use the [webpack-dev-server API](server-api).

* **If you are already using express** for your website, or you need to run other services in development, you'll want to use [webpack-hot-middleware](middleware).


About the Code
---
The browser javascript code within each directory is the same. There are 3 files:

`js/index.js`: Entry point. `require()`s the other 2 files, `box-creator.js` and `math-doer.js`.

`js/math-doer.js`: An extremely simple file to illustrate that dependencies are automatically updated by HMR.

`js/box-creator.js`: An example of a dependency that has side effects, with an example of how to use `module.hot.dispose` to handle such side effects.
