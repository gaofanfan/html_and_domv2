function printScore() {
    var score = 0;
    var questions = Question.all();

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
