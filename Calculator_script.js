function display(a){
    document.getElementById("screen").value+=a;
}
function compute(){
    var x=document.getElementById("screen").value;
    var y=eval(x);
    document.getElementById("screen").value=y;
}
function remove(){
    document.getElementById("screen").value="";

}