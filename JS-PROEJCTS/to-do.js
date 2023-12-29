
function Submit(){
    const input = document.getElementById('input');
    const tasks = document.getElementById('elements');

    if (input.value.trim() == '') {
        alert('PLEASE Add a TASK');
        return;

   };

   const taskText = document.createTextNode(tasks.value);
   const deleteButton = document.createElement('button');
   
   deleteButton.appendChild(document.createTextNode('Delete'));
   deleteButton.click = function (){
        tasks.removeChild(tasks);
   }

   const task = document.createElement('li');
    task.appendChild(taskText);
    task.appendChild(deleteButton);

    taskList.appendChild(task);
    taskInput.value = '';

}