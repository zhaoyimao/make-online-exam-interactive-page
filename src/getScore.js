function getScore(system_answer,user_answer){
    let fill_in_the_blanks_score=getFillInTheBlanksScore(system_answer.blanks,user_answer.blanks);
    let select_score=getSelectScore(system_answer.select,user_answer.select);
    let multiselect_score=getMultiselectScore(system_answer.multiselect,user_answer.multiselect);
    let judge_score=getJudgeScore(system_answer.judge,user_answer.judge);
    let shortanswer_score=getShortanswer(system_answer.shortanswer,user_answer.shortanswer);
    let score=fill_in_the_blanks_score+select_score+multiselect_score+judge_score+shortanswer_score;
    return score;
}

function getFillInTheBlanksScore(system_answer,user_answer){//获取填空题分数
    let fill_in_the_blanks_score=0;
    for(let i in system_answer){
        for(let j in user_answer){
           if(j==i && user_answer[j]==system_answer[i]){
             fill_in_the_blanks_score=fill_in_the_blanks_score+5;
           }
        }
    }
    console.log("\n填空"+fill_in_the_blanks_score);
    return fill_in_the_blanks_score;
}

function getSelectScore(system_answer,user_answer){//获取选择题分数
    let select_score=0;
    for(let i in system_answer){
        for(let j in user_answer){
            if(j==i && user_answer[j]==system_answer[i]){
                select_score=select_score+10;
            }
        }
    }
    console.log("选择"+select_score);
    return select_score;
}
function getMultiselectScore(system_answer,user_answer){//获取多选题分数
    let multiselect_score=0;
    for(let i in system_answer){
        for(let j in user_answer){
            if(j==i && user_answer[j].toString()==system_answer[i].toString()){
                 multiselect_score=multiselect_score+10;
            }
        }
    }
    console.log("多选"+multiselect_score);
    return multiselect_score;
}

function getJudgeScore(system_answer,user_answer){//获取判断题分数
    let judge_score=0;
    for(let i in system_answer){
        for(let j in user_answer){
            if(j==i && user_answer[j]==system_answer[i]){
                judge_score=judge_score+10;
            }
        }
    }
    console.log("判断"+judge_score);
    return judge_score;
}

function getShortanswer(system_answer,user_answer){//获取简答题分数
    let shortanswer_score=0;
    if(system_answer==user_answer){
        shortanswer_score=20;
    }
    console.log("简答"+shortanswer_score);
    return shortanswer_score;
}
//module.exports=getScore;