(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
var Question = require('./model/question');

var Answer = require('./model/answer');

$(document).ready(function() {
  $('#submit').on('click', function() {
    return printScore();
  });
});
function printScore() {
    var score = 0;
    var questions = Answer.getstandardAnswer();

    _.forEach(questions, function(question) {
      var anwser = document.getElementsByName(question.topicName);
      score += question.countScore(anwser);
    });

    var requiredInputs = [
    {
      id: 'class',
      text: '班级'
    },
    {
      id: 'id',
      text: '学号'
    },
    {
      id: 'name',
      text: '姓名'
    }
    ];

    if (requiredInput(requiredInputs)) {
      return false;
    }

    document.getElementById('count').innerText = score;
      return false;
  }

function requiredInput(inputs) {

  for (var i = 0; i < inputs.length; i++) {
    var input = inputs[i];
    var element = document.getElementById(input.id);
    //var element = $('#' + input.id);
    if (element && _.isEmpty(element.value)) {
      alert('请输入您的：' + input.text + '！');
      return true;
    }
  }

  return false;
}

},{"./model/answer":2,"./model/question":7}],2:[function(require,module,exports){
var Fill = require('./fill');
var Choice = require('./choice');
var MultipleChoice = require('./multiple-choice');
var Judge = require('./judge');
var ShortAnswer = require('./short-answer');

function Answer(){

}
Answer.getstandardAnswer = function () {
  return [
    new Fill('1_1', ['统一建模语言'], 10),
    new Fill('1_2', ['封装性', '继承性', '多态性'], 5),
    new Choice('2_1_1', 'B', 10),
    new Choice('2_2_1', 'A', 10),
    new MultipleChoice('3_1', ['A','B','D'], 10),
    new MultipleChoice('3_2', ['A','B','C'], 10),
    new Judge('4_1', 'N', 10),
    new Judge('4_2', 'Y', 10),
    new ShortAnswer('5_1', '模型是对现实世界的简化和抽象，模型是对所研究的系统过程、事物或概念的一种表达形式。可以是物理实体；可以是某种图形或者是一种数学表达式。', 15)];
};

module.exports = Answer;

},{"./choice":3,"./fill":4,"./judge":5,"./multiple-choice":6,"./short-answer":8}],3:[function(require,module,exports){
var Question = require('./question');
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
module.exports = Choice;

},{"./question":7}],4:[function(require,module,exports){
var Question = require('./question');
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
module.exports = Fill;

},{"./question":7}],5:[function(require,module,exports){
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

},{"./question":7}],6:[function(require,module,exports){
var Question = require('./question');
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
module.exports = MultipleChoice;

},{"./question":7}],7:[function(require,module,exports){
function Question(topicName, standardAnswer, score) {
  this.topicName = topicName;
  this.standardAnswer = standardAnswer;
  this.score = score;
}

Question.prototype.countScore = function () {

};
module.exports = Question;

},{}],8:[function(require,module,exports){
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

},{"./question":7}]},{},[1]);
