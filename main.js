function getHistory(){
    return document.getElementById("history-value").innerText;
}
function printHistory(num){
    document.getElementById("history-value").innerHTML=num;
}
function getOutput(){
    return document.getElementById("output-value").innerText;
}
function printOutput(num){
    if(num==""){
        document.getElementById("output-value").innerText=num;
    }else{
    document.getElementById("output-value").innerText=getFormattedNumber(num);}
}

function getFormattedNumber(num){
    if(num=="-"){
        return "";}
    var n=Number(num);
    var value=n.toLocaleString("en");
    return value;
}

function reverseNumber(num){
return Number(num.replace(/,/g,''));
}
var operator=document.getElementsByClassName("operator");
for (var i=0;i<operator.length;i++){
    operator[i].addEventListener('click',function(){
        if (this.id=="clear"){
            printHistory("");
            printOutput("");
        }
        if(this.id=="backspace"){
            var output=reverseNumber(getOutput()).toString();
            if(output){
                output =output.substr(0,output.length-1);
                printOutput(output);
            }

        }
        else{
            var output=getOutput();
            var history=getHistory();
            if(output==""&&history!=""){
                if(isNaN(history[history.length-1])){
                    history=history.substr(0,history.length-1);
                }
            }
            if(output!=""||history!=""){
                output= output==""?output:reverseNumber(output);
                history=history+output;
                
                if(this.id=="="){
                    var result=eval(history);
                    printOutput(result);
                    printHistory("");
                }
                else{
                    history=history+this.id;
                    printHistory(history);
                    printOutput("");
                }
            }
        }
    })
}
var number=document.getElementsByClassName("number");
for (var i=0;i<number.length;i++){
    number[i].addEventListener('click',function(){
        var output = reverseNumber(getOutput());
        if(output!=NaN){
                output=output+this.id;
                printOutput(output);
        }
    })
}





var m=new Array();
for(var i=0;i<8;i++){
 m[i]=document.getElementsByClassName("operator")[i];
 m[i].style.fontSize="20px";
 if(i==0){m[i].style.background="yellow";}
 if(i==1){m[i].style.background="#11f07d";}
 if(i==2){m[i].style.background="blue";}
 if(i==3){m[i].style.background="#ed7e28";}
 if(i==4){m[i].style.background="#ee31f5";}
 if(i==5){m[i].style.background="#2e0bb0";}
 if(i==6){m[i].style.background="#4be3e3";}
 if(i==7){m[i].style.background="#e85f8f";}
}
for(var i=0;i<10;i++){
    m[i]=document.getElementsByClassName("number")[i];
    m[i].style.fontSize="20px";
    if(i==0){m[i].style.background="yellow";}
    if(i==1){m[i].style.background="#11f07d";}
    if(i==2){m[i].style.background="blue";}
    if(i==3){m[i].style.background="#ed7e28";}
    if(i==4){m[i].style.background="#ee31f5";}
    if(i==5){m[i].style.background="#2e0bb0";}
    if(i==6){m[i].style.background="#7df58b";}
    if(i==7){m[i].style.background="#d91c5b";}
    if(i==8){m[i].style.background="#4be3e3";}
    if(i==9){m[i].style.background="#d91333";}
   }
