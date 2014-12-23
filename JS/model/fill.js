function Fill(topicName, standardAnswer, score) {
  Question.call(this, topicName, standardAnswer, score);
}

Fill.prototype = Object.create(Question.prototype);
Fill.prototype.constructor = Fill;

Fill.prototype.countScore = function (answer) {
  var score = 0;
  var answers = [];
  for (var i = 0; i < answer.length; i++) {
    answers.push(answer[i].value);
  }
  _this = this;
  _.forEach(this.standardAnswer, function(array) {
    if(_.contains(answers, array)) {
      score += _this.score;
    }
  });
  return score;
};
