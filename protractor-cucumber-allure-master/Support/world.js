var chai = require('chai');
var chaiAsPromised = require('chai-as-promised');
chai.use(chaiAsPromised);

module.exports = {
    expect : chai.expect,
    setDefaultTimeout : 60 * 1000
};