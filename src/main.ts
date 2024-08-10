import Bree from 'bree';
import { join } from 'node:path';
const bree = new Bree({
  /**
   * Always set the root option when doing any type of
   * compiling with bree. This just makes it clearer where
   * bree should resolve the jobs folder from. By default it
   * resolves to the jobs folder relative to where the program
   * is executed.
   */
  root: join(__dirname, 'jobs'),
  /**
   * We only need the default extension to be "ts"
   * when we are running the app with ts-node - otherwise
   * the compiled-to-js code still needs to use JS
   */
  defaultExtension: process.env.TS_NODE ? 'ts' : 'js',
  acceptedExtensions: ['.ts', '.js'],
  jobs: [
    { cron: '* * * * *', name: 'job' },
    { cron: '* * * * *', name: 'defaults' },
  ],
});

(async () => {
  await bree.start();
})();
