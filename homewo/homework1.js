//Code created by Cody ai
// let tasks = document.getElementById("input-box");
// let theList = document.getElementById("list");

// const completedCounter = document.getElementById("completed-counter");
// const uncompletedCounter = document.getElementById("uncompleted-counter");

// function addTask() {
//     let taskText = tasks.value.trim();
    
//     if (!taskText) {
//         alert("please write down a task");
        
//         // Assuming there's an element with class "p" for error messages
//         let text = document.getElementsByClassName("p")[0];
//         if (text) {
//             text.innerHTML = "please write down a task";
//             text.style.display = "contents";
//             text.style.color = "red";
//             text.style.marginTop = "1rem";
//         }
//         return;
//     }
    
//     const li = document.createElement("li");
//     li.innerHTML = `
//       <label>
//         <input type="checkbox">
//         <span>${taskText}</span>
//       </label>
//       <button class="edit-btn">Edit</button>
//       <button class="delete-btn">Delete</button>
//     `;
    
//     // Explicitly mark as uncompleted (though this is the default state)
//     li.classList.remove("completed");
    
//     theList.appendChild(li);
//     tasks.value = "";
    
//     const checkbox = li.querySelector("input");
//     const editBtn = li.querySelector(".edit-btn");
//     const taskSpan = li.querySelector("span");
//     const deleteBtn = li.querySelector(".delete-btn");

//     checkbox.addEventListener("click", function () {
//         li.classList.toggle("completed", checkbox.checked);
//         updateCounters();
//     });

//     editBtn.addEventListener("click", function () {
//         const update = prompt("Edit task:", taskSpan.textContent);
//         if (update !== null) {
//           taskSpan.textContent = update;
//           li.classList.remove("completed");
//           checkbox.checked = false;
//           updateCounters();
//         }
//     });
    
//     // Add delete functionality
//     deleteBtn.addEventListener("click", function() {
//         li.remove();
//         updateCounters();
//     });
    
//     // Update counters after adding a new task
//     updateCounters();
// }

// function updateCounters() {
//     const completedTasks = document.querySelectorAll(".completed").length;
//     const uncompletedTasks = document.querySelectorAll("li:not(.completed)").length;
  
//     completedCounter.textContent = completedTasks;
//     uncompletedCounter.textContent = uncompletedTasks;
// }
// //    localStorage.setItem("tasks", theList.innerHTML);
// localStorage.setItem("addTask(), updateCounters(), and deleteBtn.addEventListener")


//Grok ai
// let tasks = document.getElementById("input-box");
// let theList = document.getElementById("list");

// const completedCounter = document.getElementById("completed-counter");
// const uncompletedCounter = document.getElementById("uncompleted-counter");

// // Load tasks from local storage when the page loads
// document.addEventListener("DOMContentLoaded", function() {
//     const savedTasks = localStorage.getItem("tasks");
//     if (savedTasks) {
//         const taskArray = JSON.parse(savedTasks);
//         taskArray.forEach(task => {
//             addTaskToDOM(task.text, task.completed);
//         });
//         updateCounters();
//     }
// });

// function addTask() {
//     let taskText = tasks.value.trim();
    
//     if (!taskText) {
//         alert("please write down a task");
        
//         let text = document.getElementsByClassName("p")[0];
//         if (text) {
//             text.innerHTML = "please write down a task";
//             text.style.display = "contents";
//             text.style.color = "red";
//             text.style.marginTop = "1rem";
//         }
//         return;
//     }
    
//     addTaskToDOM(taskText, false);
//     tasks.value = "";
//     saveTasks();
//     updateCounters();
// }

// function addTaskToDOM(taskText, isCompleted) {
//     const li = document.createElement("li");
//     li.innerHTML = `
//       <label>
//         <input type="checkbox" ${isCompleted ? "checked" : ""}>
//         <span>${taskText}</span>
//       </label>
//       <button class="edit-btn">Edit</button>
//       <button class="delete-btn">Delete</button>
//     `;
    
//     if (isCompleted) {
//         li.classList.add("completed");
//     }
    
//     theList.appendChild(li);
    
//     const checkbox = li.querySelector("input");
//     const editBtn = li.querySelector(".edit-btn");
//     const taskSpan = li.querySelector("span");
//     const deleteBtn = li.querySelector(".delete-btn");

//     checkbox.addEventListener("click", function () {
//         li.classList.toggle("completed", checkbox.checked);
//         updateCounters();
//         saveTasks();
//     });

//     editBtn.addEventListener("click", function () {
//         const update = prompt("Edit task:", taskSpan.textContent);
//         if (update !== null) {
//             taskSpan.textContent = update;
//             li.classList.remove("completed");
//             checkbox.checked = false;
//             updateCounters();
//             saveTasks();
//         }
//     });
    
//     deleteBtn.addEventListener("click", function() {
//         li.remove();
//         updateCounters();
//         saveTasks();
//     });
// }

// function updateCounters() {
//     const completedTasks = document.querySelectorAll(".completed").length;
//     const uncompletedTasks = document.querySelectorAll("li:not(.completed)").length;
  
//     if (completedCounter) {
//         completedCounter.textContent = completedTasks;
//     }
//     if (uncompletedCounter) {
//         uncompletedCounter.textContent = uncompletedTasks;
//     }
// }

// function saveTasks() {
//     const taskElements = theList.querySelectorAll("li");
//     const taskArray = Array.from(taskElements).map(task => {
//         const taskText = task.querySelector("span").textContent;
//         const isCompleted = task.classList.contains("completed");
//         return { text: taskText, completed: isCompleted };
//     });
//     localStorage.setItem("tasks", JSON.stringify(taskArray));
// }



// grok 2
let tasks = document.getElementById("input-box");
let theList = document.getElementById("list");

const completedCounter = document.getElementById("completed-counter");
const uncompletedCounter = document.getElementById("uncompleted-counter");

// Check if essential elements exist
if (!tasks) console.error("Element with ID 'input-box' not found.");
if (!theList) console.error("Element with ID 'list' not found.");
if (!completedCounter) console.error("Element with ID 'completed-counter' not found.");
if (!uncompletedCounter) console.error("Element with ID 'uncompleted-counter' not found.");

// Load tasks from local storage when the page loads
document.addEventListener("DOMContentLoaded", function() {
    console.log("DOMContentLoaded event fired.");
    const savedTasks = localStorage.getItem("tasks");
    if (savedTasks) {
        try {
            const taskArray = JSON.parse(savedTasks);
            console.log("Loaded tasks from localStorage:", taskArray);
            taskArray.forEach(task => {
                addTaskToDOM(task.text, task.completed);
            });
            updateCounters();
        } catch (error) {
            console.error("Error parsing tasks from localStorage:", error);
        }
    } else {
        console.log("No tasks found in localStorage.");
    }
});

function addTask() {
    if (!tasks) {
        console.error("Cannot add task: 'input-box' element not found.");
        return;
    }

    let taskText = tasks.value.trim();
    
    if (!taskText) {
        alert("please write down a task");
        
        //Create an error message element if it doesn't exist already
        let text = document.getElementsByClassName("p")[0];
        if (text) {
            text.innerHTML = "please write down a task";
            text.style.display = "contents";
            text.style.color = "red";
            text.style.marginTop = "1rem";
        }
        return;
    }
    
    addTaskToDOM(taskText, false);
    tasks.value = "";
    saveTasks();
    updateCounters();
}

/**
 * Adds a new task to the list.
 * @param {string} taskText - The text of the task to add.
 * @param {boolean} isCompleted - Whether the task is completed.
 */
function addTaskToDOM(taskText, isCompleted) {
    if (!theList) {
        console.error("Cannot add task to DOM: 'list' element not found.");
        return;
    }

    // Create a new <li> element and add the task text and buttons to it
    const li = document.createElement("li");
    li.innerHTML = `
      <label>
        <input type="checkbox" ${isCompleted ? "checked" : ""}>
        <span>${taskText}</span>
      </label>
      <button class="edit-btn">Edit</button>
      <button class="delete-btn">Delete</button>
    `;
    
    if (isCompleted) {
        li.classList.add("completed");
    }
    
    theList.appendChild(li);
    console.log("Added task to DOM:", taskText, "Completed:", isCompleted);
    
    const checkbox = li.querySelector("input");
    const editBtn = li.querySelector(".edit-btn");
    const taskSpan = li.querySelector("span");
    const deleteBtn = li.querySelector(".delete-btn");

    checkbox.addEventListener("click", function () {
        li.classList.toggle("completed", checkbox.checked);
        updateCounters();
        saveTasks();
        console.log("Checkbox toggled for task:", taskText, "New state:", checkbox.checked);
    });

    editBtn.addEventListener("click", function () {
        const update = prompt("Edit task:", taskSpan.textContent);
        if (update !== null) {
            taskSpan.textContent = update;
            li.classList.remove("completed");
            checkbox.checked = false;
            updateCounters();
            saveTasks();
            console.log("Task edited:", taskText, "New text:", update);
        }
    });
    
    deleteBtn.addEventListener("click", function() {
        li.remove();
        updateCounters();
        saveTasks();
        console.log("Task deleted:", taskText);
    });
}

function updateCounters() {
    const completedTasks = document.querySelectorAll(".completed").length;
    const uncompletedTasks = document.querySelectorAll("li:not(.completed)").length;
  
    if (completedCounter) {
        completedCounter.textContent = completedTasks;
    } else {
        console.error("Cannot update completed counter: Element not found.");
    }
    if (uncompletedCounter) {
        uncompletedCounter.textContent = uncompletedTasks;
    } else {
        console.error("Cannot update uncompleted counter: Element not found.");
    }
    console.log("Counters updated - Completed:", completedTasks, "Uncompleted:", uncompletedTasks);
}

function saveTasks() {
    if (!theList) {
        console.error("Cannot save tasks: 'list' element not found.");
        return;
    }

    const taskElements = theList.querySelectorAll("li");
    const taskArray = Array.from(taskElements).map(task => {
        const taskText = task.querySelector("span").textContent;
        const isCompleted = task.classList.contains("completed");
        return { text: taskText, completed: isCompleted };
    });
    localStorage.setItem("tasks", JSON.stringify(taskArray));
    console.log("Tasks saved to localStorage:", taskArray);
}



// // Code created by Claude ai
// let tasks = document.getElementById("input-box");
// let theList = document.getElementById("list");

// const completedCounter = document.getElementById("completed-counter");
// const uncompletedCounter = document.getElementById("uncompleted-counter");

// // Load tasks from localStorage when the page loads
// function loadTasks() {
//     // Get tasks from localStorage or use empty array if none exists
//     const savedTasks = JSON.parse(localStorage.getItem("tasks")) || [];
    
//     // Create DOM elements for each saved task
//     savedTasks.forEach(task => {
//         const li = createTaskElement(task.text, task.completed);
//         theList.appendChild(li);
//     });
    
//     // Update counters after loading saved tasks
//     updateCounters();
// }

// // Create a task element with proper event listeners
// function createTaskElement(taskText, isCompleted = false) {
//     const li = document.createElement("li");
//     li.innerHTML = `
//       <label>
//         <input type="checkbox" ${isCompleted ? "checked" : ""}>
//         <span>${taskText}</span>
//       </label>
//       <button class="edit-btn">Edit</button>
//       <button class="delete-btn">Delete</button>
//     `;
    
//     // Set completed state based on saved data
//     if (isCompleted) {
//         li.classList.add("completed");
//     }
    
//     const checkbox = li.querySelector("input");
//     const editBtn = li.querySelector(".edit-btn");
//     const taskSpan = li.querySelector("span");
//     const deleteBtn = li.querySelector(".delete-btn");

//     checkbox.addEventListener("click", function () {
//         li.classList.toggle("completed", checkbox.checked);
//         updateCounters();
//         saveTasks(); // Save whenever task status changes
//     });

//     editBtn.addEventListener("click", function () {
//         const update = prompt("Edit task:", taskSpan.textContent);
//         if (update !== null) {
//           taskSpan.textContent = update;
//           li.classList.remove("completed");
//           checkbox.checked = false;
//           updateCounters();
//           saveTasks(); // Save after editing
//         }
//     });
    
//     deleteBtn.addEventListener("click", function() {
//         li.remove();
//         updateCounters();
//         saveTasks(); // Save after deleting
//     });
    
//     return li;
// }

// function addTask() {
//     let taskText = tasks.value.trim();
    
//     if (!taskText) {
//         alert("please write down a task");
        
//         // Assuming there's an element with class "p" for error messages
//         let text = document.getElementsByClassName("p")[0];
//         if (text) {
//             text.innerHTML = "please write down a task";
//             text.style.display = "contents";
//             text.style.color = "red";
//             text.style.marginTop = "1rem";
//         }
//         return;
//     }
    
//     const li = createTaskElement(taskText);
//     theList.appendChild(li);
//     tasks.value = "";
    
//     // Update counters and save to localStorage
//     updateCounters();
//     saveTasks();
// }

// function updateCounters() {
//     const completedTasks = document.querySelectorAll(".completed").length;
//     const uncompletedTasks = document.querySelectorAll("li:not(.completed)").length;
  
//     completedCounter.textContent = completedTasks;
//     uncompletedCounter.textContent = uncompletedTasks;
// }

// // Save all tasks to localStorage
// function saveTasks() {
//     const taskElements = document.querySelectorAll("#list li");
//     const tasksToSave = [];
    
//     // Convert DOM elements to simple objects for storage
//     taskElements.forEach(taskEl => {
//         const taskText = taskEl.querySelector("span").textContent;
//         const isCompleted = taskEl.classList.contains("completed");
        
//         tasksToSave.push({
//             text: taskText,
//             completed: isCompleted
//         });
//     });
    
//     // Save to localStorage
//     localStorage.setItem("tasks", JSON.stringify(tasksToSave));
// }

// // Call loadTasks when the page loads
// document.addEventListener("DOMContentLoaded", loadTasks);






// let tasks = document.getElementById("input-box");
// let theList = document.getElementById("list");

// // Ensure these IDs match your HTML
// const completedCounter = document.getElementById("complete");
// const uncompletedCounter = document.getElementById("unco");

// // Load tasks from local storage when the page loads
// document.addEventListener("DOMContentLoaded", function() {
//     const savedTasks = localStorage.getItem("tasks");
//     if (savedTasks) {
//         theList.innerHTML = savedTasks;
//         updateCounters();
//     }
// });

// function addTask() {
//     let taskText = tasks.value.trim();

//     if (!taskText) {
//         alert("please write down a task");
//         let text = document.getElementsByClassName("p")[0];
//         if (text) {
//             text.innerHTML = "please write down a task";
//             text.style.display = "contents";
//             text.style.color = "red";
//             text.style.marginTop = "1rem";
//         }
//         return;
//     }

//     const li = document.createElement("li");
//     li.innerHTML = `
//         <input type="checkbox">
//         <span>${taskText}</span>
//         <label></label>
//         <button class="edit-btn">Edit</button>
//         <button class="delete-btn">Delete</button>
//     `;

//     li.classList.remove("completed");

//     theList.appendChild(li);
//     tasks.value = "";

//     const checkBox = li.querySelector("input");
//     const editBtn = li.querySelector(".edit-btn");
//     const taskSpan = li.querySelector("span");
//     const deleteBtn = li.querySelector(".delete-btn");

//     checkBox.addEventListener("click", function() {
//         li.classList.toggle("completed", checkBox.checked);
//         updateCounters();
//         saveTasks();
//     });

//     editBtn.addEventListener("click", function() {
//         const update = prompt("Edit task:", taskSpan.textContent);
//         if (update !== null) {
//             taskSpan.textContent = update;
//             li.classList.remove("completed");
//             checkBox.checked = false;
//             updateCounters();
//             saveTasks();
//         }
//     });

//     deleteBtn.addEventListener("click", function() {
//         li.remove();
//         updateCounters();
//         saveTasks();
//     });

//     updateCounters();
//     saveTasks();
// }

// function updateCounters() {
//     const completedTasks = document.querySelectorAll("li.completed");
//     const uncompletedTasks = document.querySelectorAll("li:not(.completed)");

//     // Add checks to avoid null errors
//     if (completedCounter) {
//         completedCounter.textContent = completedTasks.length;
//     }
//     if (uncompletedCounter) {
//         uncompletedCounter.textContent = uncompletedTasks.length;
//     }
// }

// // Save tasks to local storage
// function saveTasks() {
//     function saveTasks() {
//         const taskElements = theList.querySelectorAll("li");
//         const taskArray = Array.from(taskElements).map(task => {
//             const taskText = task.querySelector("span").textContent;
//             const isCompleted = task.classList.contains("completed");
//             return { text: taskText, completed: isCompleted };
//         });
//         localStorage.setItem("tasks", JSON.stringify(taskArray));
    
//     }
  //  // localStorage.setItem("tasks", theList.innerHTML);
// }



// let tasks = document.getElementById("input-box");
// let theList = document.getElementById("list");

// const completedCounter = document.getElementById("complete");
// const uncompletedCounter = document.getElementById("unco");

// // Load tasks from local storage when the page loads
// document.addEventListener("DOMContentLoaded", function() {
//     const savedTasks = localStorage.getItem("tasks");
//     if (savedTasks) {
//         const taskArray = JSON.parse(savedTasks);
//         taskArray.forEach(task => {
//             addTaskToDOM(task.text, task.completed);
//         });
//         updateCounters();
//     }
// });

// function addTask() {
//     let taskText = tasks.value.trim();

//     if (!taskText) {
//         alert("please write down a task");
//         let text = document.getElementsByClassName("p")[0];
//         if (text) {
//             text.innerHTML = "please write down a task";
//             text.style.display = "contents";
//             text.style.color = "red";
//             text.style.marginTop = "1rem";
//         }
//         return;
//     }

//     addTaskToDOM(taskText, false);
//     tasks.value = "";
//     saveTasks();
//     updateCounters();
// }

// function addTaskToDOM(taskText, isCompleted) {
//     const li = document.createElement("li");
//     li.innerHTML = `
//         <input type="checkbox" ${isCompleted ? "checked" : ""}>
//         <span>${taskText}</span>
//         <label></label>
//         <button class="edit-btn">Edit</button>
//         <button class="delete-btn">Delete</button>
//     `;

//     if (isCompleted) {
//         li.classList.add("completed");
//     }

//     theList.appendChild(li);

//     const checkBox = li.querySelector("input");
//     const editBtn = li.querySelector(".edit-btn");
//     const taskSpan = li.querySelector("span");
//     const deleteBtn = li.querySelector(".delete-btn");

//     checkBox.addEventListener("click", function() {
//         li.classList.toggle("completed", checkBox.checked);
//         updateCounters();
//         saveTasks();
//     });

//     editBtn.addEventListener("click", function() {
//         const update = prompt("Edit task:", taskSpan.textContent);
//         if (update !== null) {
//             taskSpan.textContent = update;
//             li.classList.remove("completed");
//             checkBox.checked = false;
//             updateCounters();
//             saveTasks();
//         }
//     });

//     deleteBtn.addEventListener("click", function() {
//         li.remove();
//         updateCounters();
//         saveTasks();
//     });
// }

// function updateCounters() {
//     const completedTasks = document.querySelectorAll("li.completed");
//     const uncompletedTasks = document.querySelectorAll("li:not(.completed)");

//     if (completedCounter) {
//         completedCounter.textContent = completedTasks.length;
//     }
//     if (uncompletedCounter) {
//         uncompletedCounter.textContent = uncompletedTasks.length;
//     }
// }

// function saveTasks() {
//     const taskElements = theList.querySelectorAll("li");
//     const taskArray = Array.from(taskElements).map(task => {
//         const taskText = task.querySelector("span").textContent;
//         const isCompleted = task.classList.contains("completed");
//         return { text: taskText, completed: isCompleted };
//     });
//     localStorage.setItem("tasks", JSON.stringify(taskArray));
// }