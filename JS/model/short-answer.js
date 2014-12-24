var _ = require('lodash');
var Question = require('./question');
function ShortAnswer(topicName, standardAnswer, score) {
  Question.call(this, topicName, standardAnswer, score);
}

ShortAnswer.prototype = Object.create(Question.prototype);
ShortAnswer.prototype.constructor = ShortAnswer;

ShortAnswer.prototype.countScore = function (answer) {
  var score = 0;
  var answers = '';
  for (var i = 0; i < answer.length; i++) {
    answers = answer[i].value;
  }
  var _this = this;
  if (answers === this.standardAnswer ) {
      score = _this.score;
    }
  return score;
};
module.exports = ShortAnswer;
