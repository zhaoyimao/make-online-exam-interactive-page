function getUserAnswer(){//获取用户答案
    let user_answer={};
    user_answer.blanks=getFillInTheBlanksAnswer();
    user_answer.select=getSelectAnswer();
    user_answer.multiselect=getMultiselectAnswer();
    user_answer.judge=getJudgeAnswer();
    user_answer.shortanswer=getShortAnswer();
    return user_answer;
}
function getFillInTheBlanksAnswer(){//获取填空题答案
    let fill_in_the_blanks=[];
    let blanks_1_value=document.getElementById("blanks_1").value;
    fill_in_the_blanks.push(blanks_1_value);
    let blanks_2_value=document.getElementById("blanks_2").value;
    fill_in_the_blanks.push(blanks_2_value);
    let blanks_3_value=document.getElementById("blanks_3").value;
    fill_in_the_blanks.push(blanks_3_value);
    let blanks_4_value=document.getElementById("blanks_4").value;
    fill_in_the_blanks.push(blanks_4_value);
    console.log("填空题答案:"+fill_in_the_blanks);
    return fill_in_the_blanks;
}

function getSelectAnswer(){//获取选择题答案
    let select_1_value=document.getElementsByName("select_1");
    let select_2_value=document.getElementsByName("select_2");
    let select_value=[];
    select_value.push(getSelectValue(select_1_value));
    select_value.push(getSelectValue(select_2_value));
    console.log("选择题答案:"+select_value);
    return select_value;
}
function getSelectValue(radio){//获取单选选中的值
    let select_value;
    for(let i in radio){
        if(radio[i].checked==true){
            select_value=radio[i].value;
            break;
        }
    }
    return select_value;
}
function getMultiselectAnswer(){//获取多选题答案
    let multiselect_value=[];
    let multiselect_1_value=document.getElementsByName("multiselect_1");
    let multiselect_2_value=document.getElementsByName("multiselect_2");
    multiselect_value.push(getMultiselectValue(multiselect_1_value));
    multiselect_value.push(getMultiselectValue(multiselect_2_value));
    console.log("多选题答案:"+multiselect_value);
    return multiselect_value;
}
function getMultiselectValue(radio){//获取多选选中的值
    let select_value=[];
    for(let i in radio){
        if(radio[i].checked==true){
            select_value.push(radio[i].value);
        }
    }
    return select_value;
}

function getJudgeAnswer(){//获取判断题答案
    let judge_value=[];
    let judge_1_value=document.getElementsByName("judge_1");
    let judge_2_value=document.getElementsByName("judge_2");
    judge_value.push(getSelectValue(judge_1_value));
    judge_value.push(getSelectValue(judge_2_value));
    console.log("判断题答案:"+judge_value);
    return judge_value;
}

function getShortAnswer(){//获取简答题答案
    let shortanswer_value=document.getElementById("short_answer_text").value;
    console.log("简答题答案:"+shortanswer_value);
    return shortanswer_value;
}