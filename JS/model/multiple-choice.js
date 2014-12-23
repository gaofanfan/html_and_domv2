function  MultipleChoice(topicName, standardAnswer, score) {
  Question.call(this, topicName, standardAnswer, score);
}

MultipleChoice.prototype = Object.create(Question.prototype);
MultipleChoice.prototype.constructor = MultipleChoice;


MultipleChoice.prototype.countScore = function(answer) {
  var score = 0;
  var answers = [];
  for (var i = 0; i < answer.length; i++) {
    if (answer[i].checked === true) {
      answers.push(answer[i].value);
   }
  }

  if (answers.toString() === this.standardAnswer.toString() ) {
    score = this.score;
  }
  return score;
};
