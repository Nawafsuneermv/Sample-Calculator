function clickbtn(val){
    document.getElementById("screen").value+=val;
}
function clearbtn(){
    document.getElementById("screen").value=null;
}
function equalbtn(){
    var text=document.getElementById("screen").value;
    var result=eval(text);
    document.getElementById("screen").value=result;
}