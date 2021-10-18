const generateEventNames = require('./generate-event-names');
const generateAssets = require('./generate-assets');
const generateAtlases = require('./generate-atlases');

module.exports = async () => {
  console.log('Starting atlases generation...');
  await generateAtlases();
  console.log('Atlases generation is done!');

  console.log('Starting assets generation...');
  generateAssets();
  console.log('Assets generation is done!');

  console.log('Starting events names generation...');
  generateEventNames();
  console.log('Events names generation is done!');
};
