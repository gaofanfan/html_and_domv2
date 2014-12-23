function Question(topicName, standardAnswer, score) {
  this.topicName = topicName;
  this.standardAnswer = standardAnswer;
  this.score = score;
}

Question.prototype.countScore = function () {

};
module.exports = Question;
