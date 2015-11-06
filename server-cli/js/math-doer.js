/**
 * A module that exports a single function that does math.
 * This is an example of a module with no side effects.
 *
 * Since the parent uses `module.hot.accept()`, this file does not need any
 * special HMR code.
 */
function doSomeMaths(x, y) {
  return x * y + 2;
}
module.exports = doSomeMaths;
