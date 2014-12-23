function Question(topicName, standardAnswer, score) {
  this.topicName = topicName;
  this.standardAnswer = standardAnswer;
  this.score = score;
}
Question.all = function() {
  return Answer.getstandardAnswer();
};

Question.prototype.countScore = function () {

};
