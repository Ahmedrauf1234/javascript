const todoForm = document.querySelector('#todo')
const unorder = document.querySelector('#ul')
let arr = [] //is pe loopm chal raha hai
function RenderTodo(){
    for(i = 0; i<arr.length; i++){
        unorder.innerHTML += `<li> ${arr[i]}  <button onclick="deleteTodo(${i})" >Delete</button> <button onclick="editTodo(${i})" >Edit</button>  </li> ` ;
    }

}





function addTodo(){
    unorder.innerHTML = ""
    //console.log(todoForm.value);
    arr.push(todoForm.value)
    console.log(arr);
    RenderTodo()
   
  
   todoForm.value = "" 
}

//delete work start

function deleteTodo(i){
    unorder.innerHTML = ""
    console.log("todo deleted",arr[i]);
    arr.splice(i,1);
    console.log(arr);
   RenderTodo()
}   

//edit work start 
function editTodo(i){
    unorder.innerHTML = ""
    let editVal = prompt("enter edit value?")
    arr.splice(i ,1,editVal);
   RenderTodo()
    //console.log("todo edittodo",arr[i],edit);
}

// let id = 50;
// let UserId = 100;
// id = UserId; //100
// UserId = id; //100
// id += 50; //150
// UserId += 100;//200
// console.log(id,UserId)





























































