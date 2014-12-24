var _ = require('lodash');
var Question = require('./question');
function Judge(topicName, standardAnswer, score) {
  Question.call(this, topicName, standardAnswer, score);
}

Judge.prototype = Object.create(Question.prototype);
Judge.prototype.constructor = Judge;

Judge.prototype.countScore = function (answer) {
  var score = 0;
  var judge = _.find(answer, { checked: true });
  var judgeValue = judge ? judge.value : '';

  if (this.standardAnswer === judgeValue) {
    score += this.score;
  }
  return score;
};

module.exports = Judge;
