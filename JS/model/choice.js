function Choice(topicName, standardAnswer, score) {
  Question.call(this, topicName, standardAnswer, score);
}
Choice.prototype = Object.create(Question.prototype);
Choice.prototype.constructor = Choice;


Choice.prototype.countScore = function (answer) {
  var score = 0;
  var radio = _.find(answer, { checked: true });
  var radioValue = radio ? radio.value : '';

  if (this.standardAnswer === radioValue) {
     score += this.score;
  }

  return score;
};
