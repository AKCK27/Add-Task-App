var container = document.getElementById("task-display");
var champ = document.getElementById("task-input");
var button = document.getElementById("task-button");
let tasks = [];
// Event to display content 
button.addEventListener("click", function(e) {
      e.preventDefault();
     champ.value;
    
     if(champ.value) {
        // List container 
        const list = document.createElement("ul");
        list.classList.add("task-list");

        // List element 
        const list_el = document.createElement("li");
        list_el.classList.add("task");
        list.appendChild(list_el);

        // Check task 
        const check_task  = document.createElement("input");
        check_task.type = "checkbox";
        check_task.checked = false;
        check_task.classList.add("task-check");
         list_el.appendChild(check_task)
         check_task.onclick = () => {
            if (check_task.checked === true) {
                 check_task.classList.add("task-checked");
                 list.el.style.textDecoration = "line-through";
            }else if (check_task.checked === false) {
                check_task.classList.remove("task-checked");
            }
            console.log(check_task)
         }

        
        // Label 

        const label = document.createElement("label");
        label.classList.add("task-label");
        list_el.appendChild(label);
        label.innerText =  champ.value;
         // Edit button

         const edit_button = document.createElement("button");
         edit_button.classList.add("task-edit");
         edit_button.innerHTML =`<i class=" glyphicon glyphicon-edit"></i> `
         list_el.appendChild(edit_button);
 

        // Delete Button
        const button_remove = document.createElement("button");
        button_remove.classList.add("task-remove");
        button_remove.innerHTML =`<i class="glyphicon  glyphicon-remove"></i>`;
        list_el.appendChild(button_remove);

       
        // Time 
          const time = new Date().toLocaleTimeString();
          const span = document.createElement("span");
          span.classList.add("task-time");
          span.appendChild(document.createTextNode(time));
          label.appendChild(span);
        // Display all to DOM 
        container.appendChild(list);
        champ.value = ""
     }
      
})

// function to check the task 






