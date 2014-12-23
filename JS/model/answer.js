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
