const koopProviderGeonode = require('koop-provider-geonode');
const outputs = [];
const auths = [];
const caches = [];
const plugins = [{
  instance: koopProviderGeonode
}];
module.exports = [...outputs, ...auths, ...caches, ...plugins];