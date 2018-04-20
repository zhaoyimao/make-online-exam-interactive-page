document.write("<script type='text/javascript' src='../src/answer.js'></script>");
document.write("<script type='text/javascript' src='../src/getScore.js'></script>");
document.write("<script type='text/javascript' src='getUserAnswer.js'></script>");
function getScoreForHtml(){
    let system_answer=systemAnswer();
    let user_answer=getUserAnswer();
    let score=getScore(system_answer,user_answer);
    let score_text=document.getElementById("score");
    score_text.value=score+"分";

    let id_arr=document.getElementsByTagName("input");//用户不能继续填写
    for(let i in id_arr){
        id_arr[i].disabled=true;
    }
    document.getElementById("short_answer_text").disabled=true;
}

  