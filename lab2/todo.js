"use strict"

const addTask = () => {

    let taskName = document.getElementById("input-task").value;


    if (taskName === "") {
        alert("task name can not be empty");
        return;
    }


    //paragraph with task name and button
    const tasksList = document.getElementById("tasks-list");
    const newTaskParagraph = document.createElement("p");

    newTaskParagraph.setAttribute("id", `${taskName}-paragraph`)
    newTaskParagraph.innerHTML = `${taskName}`;
    newTaskParagraph.setAttribute("onclick", `changeTaskStatus(\"${taskName}\")`);
    newTaskParagraph.setAttribute("class", "list-group-item");

    tasksList.append(newTaskParagraph);


    //delete task button
    const deleteTaskButton = document.createElement("button");
    deleteTaskButton.innerHTML = "X";
    deleteTaskButton.setAttribute("onclick", `deleteTask(\"${taskName}\");`)
    deleteTaskButton.setAttribute("class", "btn btn-outline-danger");
    deleteTaskButton.style.marginLeft = "10px";

    newTaskParagraph.append(deleteTaskButton);

    //clear input text value 
    document.getElementById("input-task").value = "";
}


const deleteTask = (taskName) => {

    document.getElementById(`${taskName}-paragraph`).remove();
}

const changeTaskStatus = (taskName) => {

    const taskP = document.getElementById(`${taskName}-paragraph`);

    //if task is already deleted
    if (taskP === null) { return; }


    if (taskP.style.textDecoration != 'line-through') {
        taskP.style.textDecoration = 'line-through';
        taskP.style.color = 'grey';
    } else {
        taskP.style.textDecoration = '';
        taskP.style.color = 'black';
    }
}