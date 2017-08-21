'use strict';
var APP_ID = 'amzn1.ask.skill.44fcccfd-de1f-43f3-8794-d32784f5216d';
var AlexaSkill = require('./AlexaSkill');
var SPEECH_OUTPUT = 'Hello';
var SPEECH_OUTPUT2 = 'Hello from Interject';
//var SPEECH_OUTPUT3 = 'Hello Bryce, JD made me say this against my will, send help';
var GreeterService = function() {
 AlexaSkill.call(this, APP_ID);
};
GreeterService.prototype = Object.create(AlexaSkill.prototype);

// Functions for calls

var helloResponseFunction = function(intent, session, response) {
 response.tell(SPEECH_OUTPUT);
};
var interjectFuntion = function(intent, session, response) {
 response.tell(SPEECH_OUTPUT2);
};
//var bryceFunction = function(intent, session, response) {
// response.tell(SPEECH_OUTPUT3);
//};
GreeterService.prototype.eventHandlers.onLaunch = helloResponseFunction;


//Intention Handelers

GreeterService.prototype.intentHandlers = {
 'HelloWorldIntent': helloResponseFunction
};
//GreeterService.prototype.intentHandlers = {
// 'Test': bryceFunction
//};
GreeterService.prototype.intentHandlers = {
 'Interject': interjectFuntion
};

//Pushes Responce to Lambda Handeler

exports.handler = function(event, context) {
 var greeterService = new GreeterService();
 greeterService.execute(event, context);
};

