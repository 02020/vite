const rollup = require('rollup');
const shell = require('shelljs');
const { resolve } = require('path');
const { readdirSync, existsSync } = require('fs');
const { FORMATS, genRollupObj } = require('../rollup.config');
const { Extractor, ExtractorConfig } = require('@microsoft/api-extractor');
const pkgFolder = resolve(__dirname, '../');

async function build(global = false) {
  for (let f of FORMATS) {
    console.log(`... Building${global ? ' Browser' : ''} ${f} ...`);
    const { input, output } = genRollupObj(f, global);
    const bundle = await rollup.rollup(input);
    await bundle.write(output);
  }
}

(async function () {
  try {
    console.log('... 🚀Start Building🚀 ...');
    await build();
    // packages' api-extractor.json
    const apiExtractorFile = resolve(pkgFolder, 'api-extractor.json');
    if (existsSync(apiExtractorFile)) {
      // Load and parse the api-extractor.json file
      const extractorConfig = ExtractorConfig.loadFileAndPrepare(
        apiExtractorFile
      );

      // Invoke API Extractor
      const extractorResult = Extractor.invoke(extractorConfig, {
        // Equivalent to the "--local" command-line parameter
        localBuild: true,

        // Equivalent to the "--verbose" command-line parameter
        // showVerboseMessages: true,
      });

      if (extractorResult.succeeded) {
        console.log(`API Extractor completed successfully`);
        process.exitCode = 0;
      } else {
        console.error(
          `API Extractor completed with ${extractorResult.errorCount} errors` +
            ` and ${extractorResult.warningCount} warnings`
        );
        process.exitCode = 1;
      }
    }
    // rm temp folder
    console.log('... Removing temp folder');
    shell.rm('-rf', resolve(pkgFolder, 'dist/temp'));
    console.log('... 🌟Complete🌟 ...');
  } catch (err) {
    console.error(err);
  }
})();
