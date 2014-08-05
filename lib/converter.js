/*
 * fis
 * http://fis.baidu.com/
 * 2014/8/4
 */

'use strict';

var logger = require('./logger.js')('Converter');
var iconv = require('iconv-lite');
var RalModule = require('./ralmodule.js');

function Converter(){}

Converter.prototype = new RalModule();

Converter.prototype.constructor = Converter;
/**
 * pack data to buffer
 * @param data
 * @param convertContext
 */
Converter.prototype.pack = function(convertContext, data){
    throw new Error('Not Implemented');
};

/**
 * unpack buffer to data
 * @param buffer
 * @param convertContext
 */
Converter.prototype.unpack = function(convertContext, buffer){
    throw new Error('Not Implemented');
};

Converter.prototype.getContext = function(){
    return ConverterContext;
};

Converter.prototype.decode = iconv.decode;

Converter.prototype.encode = iconv.encode;

function ConverterContext(serviceID, service){
    var me = this;
    me.encoding = service.encoding;
    me.serviceID = serviceID;
    logger.trace('ConverterContext for ' + serviceID + ' created succ');
}

module.exports.Converter = Converter;
module.exports.ConverterContext = ConverterContext;