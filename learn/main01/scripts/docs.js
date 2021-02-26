const { createServer, build } = require('vitepress');
const { resolve } = require('path');
const shell = require('shelljs');
const isProduction = process.env.NODE_ENV === 'production';
const root = resolve(__dirname, '../docs');
(async function () {
  if (!isProduction) {
    try {
      const port = 3000;
      const server = await createServer(root, {
        port,
      });
      server.listen(port);
    } catch (err) {
      console.error(err);
    }
  } else {
    try {
      console.log('... start building docs ...');
      await build(root);
      shell.mv(resolve(root, './.vitepress/dist'), resolve(root, './dist'));
      shell.cp(resolve(root, './.nojekyll'), resolve(root, './dist'));
      console.log('... end ...');
    } catch (err) {
      console.error(err);
    } finally {
      process.exit(0);
    }
  }
})();
