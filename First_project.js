var name =prompt("enter any name");
alllinks= document.links;
Array.from(alllinks).forEach ((eachLink)=>{
  if (eachLink.text== name){
    console.log(eachLink);
  }
})