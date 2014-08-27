/*
 * fis
 * http://fis.baidu.com/
 * 2014/8/19
 */

'use strict';

var util = require('util');
var RalModule = require('../ralmodule.js');

function ConfigNormalizer(){
    RalModule.call(this);
}

util.inherits(ConfigNormalizer, RalModule);

ConfigNormalizer.prototype.normalizeConfig = function (config){
    throw new Error('Not Implemented');
};

ConfigNormalizer.prototype.getCategory = function (){
    return 'normalizer';
};

ConfigNormalizer.prototype.needUpdate = function (config){
    return false;
};

module.exports = ConfigNormalizer;