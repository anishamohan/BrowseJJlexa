'use strict';
const Alexa = require('alexa-sdk');


//Replace with your app ID (OPTIONAL).  You can find this value at the top of your skill's page on http://developer.amazon.com.
//Make sure to enclose your value in quotes, like this: const APP_ID = 'amzn1.ask.skill.bb4045e6-b3e8-4133-b650-72923c5980f1';
const APP_ID = undefined;

const SKILL_NAME = 'BrowseJJlexa';


const HELP_MESSAGE = 'This is an Alexa app to connect with people.';
const HELP_REPROMPT = 'You can try asking about who most recently worked on a specific project.';
const STOP_MESSAGE = 'Goodbye!';

const handlers = {
  'LaunchRequest': function () {
    const speechOutput = HELP_MESSAGE;
    const repromptSpeech = this.t('HELP_REPROMPT');
    this.emit(':askWithCard', speechOutput, repromptSpeech, SKILL_NAME, speechOutput);
  },
  'AMAZON.HelpIntent': function () {
    const speechOutput = HELP_MESSAGE;
    const reprompt = HELP_REPROMPT;

    this.response.speak(speechOutput).listen(reprompt);
    this.emit(':responseReady');
  },
  'AMAZON.CancelIntent': function () {
    this.response.speak(STOP_MESSAGE);
    this.emit(':responseReady');
  },
  'AMAZON.StopIntent': function () {
    this.response.speak(STOP_MESSAGE);
    this.emit(':responseReady');
  },
  'Unhandled': function() {  // if we get any intents other than the above
    this.response.speak('Sorry, I didn\'t get that.').listen('Try again');
    this.emit(':responseReady');
  },
};

exports.handler = function (event, context, callback) {
  const alexa = Alexa.handler(event, context, callback);
  alexa.APP_ID = APP_ID;
  alexa.registerHandlers(handlers);
  alexa.execute();
};
