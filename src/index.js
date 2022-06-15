document.addEventListener("DOMContentLoaded", () => {
  // your code here
    const form = document.getElementById('create-task-form');
    //collects user input string value
    const input = document.getElementById('new-task-description').value;
    const userTasks = document.getElementById('list');
    const taskList = document.getElementById('tasks');
    form.addEventListener('submit', (event) => {
    event.preventDefault();
    const listItem = document.createElement("li");
    const delBtn = document.createElement("button");
    let checkBox = document.createElement("input");
    let label=document.createElement("label");//label
  
     checkBox.type = "checkbox";
     delBtn.innerText = "X";
     label.innerText = `${input} `;
     taskList.style.listStyleType = "none";
   input.value="";

   /*styling*/
   delBtn.style.marginLeft= '5px';
   checkBox.style.Color = 'pink';
   delBtn.style.backgroundColor = 'black';
    delBtn.style.color = 'white';label.innerText = `${input} `;
    delBtn.style.border = 'none';
    delBtn.style.padding = '3px 5px';
   listItem.appendChild(checkBox);//append  checkbox to list item
   listItem.appendChild(label);//append list item to list
   listItem.appendChild(delBtn);//append delete button to list item
   taskList.appendChild(listItem);//append list item 
    //delete task event 
   
    delBtn.addEventListener('click', function(){
		  delBtn.parentNode.remove();
   });
  }
);

}); 

