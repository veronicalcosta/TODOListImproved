function addTask() {
    const taskInput = document.getElementById("taskInput");
    const taskText = taskInput.value;

    if (taskText === "") {
        alert("Please enter a task.");
        return;
    }

    const taskList = document.getElementById("taskList");
    const listItem = document.createElement("li");

    // Add task text
    listItem.textContent = taskText;

    // Create 'Done' button
    const doneButton = document.createElement("button");
    doneButton.textContent = "Mark as Done";
    doneButton.style.marginLeft = "20px";
    doneButton.onclick = function () {
        markAsDone(listItem);
    };

    // Append task and button to list
    listItem.appendChild(doneButton);
    taskList.appendChild(listItem);

    // Clear the input field
    taskInput.value = "";
}

function markAsDone(listItem) {
    // Move the task to the "Done" list or add strike-through
    const doneList = document.getElementById("doneList");
    const clonedItem = listItem.cloneNode(true);
    
    // Remove the "Mark as Done" button in the done list
    clonedItem.removeChild(clonedItem.lastChild);
    
    // Add a "done" class to style it
    clonedItem.classList.add("done");
    doneList.appendChild(clonedItem);
    
    // Remove the task from the original list
    listItem.remove();
}
