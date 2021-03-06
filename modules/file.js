/**
 *  Module of 分享
 */
var mongoose = require('mongoose');
var Schema   = mongoose.Schema;
var _ = require('underscore');
var helper = require('./helper')

var FileSchema = new Schema({
  name : {
      'type' : String
     ,'set' : helper.trim
  }

 ,path : {
    'type' : String
 }

 ,uploader : {
    'type' : Schema.ObjectId,
    'ref' : 'user'
 }
 , type : {
    'typ' : String
 }
 ,ts : {
    'type' : Date
   ,'default' : Date.now
 }

});

mongoose.model('file', FileSchema);
