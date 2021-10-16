var inputBox = document.querySelector(".inputField input");
var addBtn = document.querySelector(".inputField button");
var todoList = document.querySelector(".todoList");
var deleteAllBtn = document.querySelector(".footer button");
inputBox.onkeyup = ()=>{
  var userEnteredValue = inputBox.value;
  if(userEnteredValue.trim() != 0){
    addBtn.classList.add("active");
  }else{
    addBtn.classList.remove("active");
  }
}
showTasks(); 
addBtn.onclick = ()=>{ 
  var userEnteredValue = inputBox.value; 
  var getLocalStorageData = localStorage.getItem("New Todo"); 
  if(getLocalStorageData == null){ 
    listArray = []; 
  }else{
    listArray = JSON.parse(getLocalStorageData);
  }
  listArray.push(userEnteredValue); 
  localStorage.setItem("New Todo", JSON.stringify(listArray))
  showTasks();
  addBtn.classList.remove("active"); 
}
function showTasks(){
  var getLocalStorageData = localStorage.getItem("New Todo");
  if(getLocalStorageData == null){
    listArray = [];
  }else{
    listArray = JSON.parse(getLocalStorageData); 
  }
  var pendingTasksNumb = document.querySelector(".pendingTasks");
  pendingTasksNumb.textContent = listArray.length; 
  if(listArray.length > 0){ 
    deleteAllBtn.classList.add("active"); 
  }else{
    deleteAllBtn.classList.remove("active"); 
  }
  var newLiTag = "";
  listArray.forEach((element, index) => {
    newLiTag += `<li>${element}<span class="icon" onclick="deleteTask(${index})"><i class="fas fa-trash"></i></span></li>`;
  });
  todoList.innerHTML = newLiTag;
  inputBox.value = ""; 
}
function deleteTask(index){
  var getLocalStorageData = localStorage.getItem("New Todo");
  listArray = JSON.parse(getLocalStorageData);
  listArray.splice(index, 1);
  localStorage.setItem("New Todo", JSON.stringify(listArray));
  showTasks();
}
deleteAllBtn.onclick = ()=>{
  listArray = [];
  localStorage.setItem("New Todo", JSON.stringify(listArray));
  showTasks();
}