/**
 *  Module of 分享会
 */
var mongoose = require('mongoose');
var Schema   = mongoose.Schema;
var helper = require('./helper')


var Rate = new Schema({
    ts : {
        'type':Date
       ,'default':Date.now
    }
   ,score : {
        'type' : Number
    }
});

var ShareSetSchema = new Schema({
  // 分享主题
  subject : {
      'type'    : String
  }
  // 创建时间
 ,ts : {
    'type' : Date
   ,'default' : Date.now
 }
 ,startTime : {
    'type' : Date
 }
 ,endTime : {
   'type' : Date
 }
 ,position : {
   'type' : String
  ,'default' : ''
 }
  //  简介
 ,desc : {
   'type' : String
  ,'default' : ''
  }
  // 创建者
 ,owner : {
   'type' : Schema.Types.ObjectId
 }
 ,deleted : {
    'type' : Boolean,
    'default' : false
 }
 ,rates : [helper.Rate]
});


mongoose.model('shareset', ShareSetSchema);
// 必须指定主题
ShareSetSchema.path('subject').validate(helper.noempty, 'SUBJECT_MISSING');
// 结束时间必须在开始时间之后
ShareSetSchema.path('endTime').validate(function(endTime, b, c){
    return endTime > this.startTime;
}, 'TIME_ERROR_ENDTIME');
// 必须先登录
ShareSetSchema.path('owner').validate(helper.noempty, '请先登录');
