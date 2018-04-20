let fs = require("fs");
let systemAnswer=require('../src/answer.js');
let getScore=require('../src/getScore.js');

describe('main()', () => {

    it('should pass', () => {
      expect(fs.statSync("public/index.html").isFile()).toBe(true);
    });
    let system_answer=systemAnswer();
    it('all right',()=>{
      let user_answer={
        blanks:['统一建模语言','封装性','继承性','多态性'],
        select:['B','A'],
        multiselect:[['A','B','D'],['A','B','C']],
        judge:['error','correct'],
        shortanswer:'模型是对现实世界的简化和抽象，模型是对所研究的系统、过程、事物或概念的一种表达形式。可以是物理实体；可以是某种图形；或者是一种数学表达式。'
    };
    let score=getScore(system_answer,user_answer);
    expect(score).toEqual(100);
    });

    it('all error',()=>{
      let user_answer={
        blanks:['建模语言','','',''],
        select:['C','D'],
        multiselect:[['A','B'],['C','D']],
        judge:['correct','error'],
        shortanswer:'模型是对现实世界的简化和抽象'
      };
      let score=getScore(system_answer,user_answer);
      expect(score).toEqual(0);
    });

    it('sum right',()=>{
      let user_answer={
        blanks:['统一建模语言','封装性','继承性','多态性'],
        select:['C','A'],
        multiselect:[['A','B','D'],['A','C','D']],
        judge:['error','correct'],
        shortanswer:'模型是对现实世界的简化和抽象，模型是对所研究的系统、过程、事物或概念的一种表达形式。可以是物理实体；可以是某种图形；或者是一种数学表达式。'
      }
      let score=getScore(system_answer,user_answer);
      expect(score).toEqual(80);
    });
});
