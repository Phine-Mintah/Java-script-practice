let tasks = document.getElementById("input-box");
let theList = document.getElementById("list");

// Create an error message element if it doesn't exist already
let errorMessage = document.createElement("p");
errorMessage.className = "error-message";
errorMessage.style.color = "red";
errorMessage.style.marginTop = "0.5rem";
errorMessage.style.display = "none";
// Insert the error message after the input box
tasks.parentNode.insertBefore(errorMessage, tasks.nextSibling);

// Add event listener to hide error message when input is clicked
tasks.addEventListener("click", function() {
  errorMessage.style.display = "none";
});

function addTask() {
    let taskText = tasks.value.trim();
    if (!taskText) {
        alert("please write down a task")
    }

    if (!taskText) {
        // Show error message below input
        errorMessage.textContent = "please write down a task";
        errorMessage.style.display = "block";
        return;
    }
    
    const li = document.createElement("li");
    li.innerHTML = `
      <label>
        <input type="checkbox">
        <span>${taskText}</span>
      </label>
      <span class="edit-btn">Edit</span>
      <span class="delete-btn">Delete</span>
    `;
    
    theList.appendChild(li);
    tasks.value = "";
    // Hide error message when task is successfully added
    errorMessage.style.display = "none";
}
