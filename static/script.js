async function loadTasks() {
    console.log("Loading tasks...");  // Debugging
    const response = await fetch("/tasks");
    const tasks = await response.json();
    console.log("Tasks received:", tasks);  // Debugging
    const taskList = document.getElementById("taskList");
    taskList.innerHTML = "";
    tasks.forEach(task => {
        let li = document.createElement("li");
        li.className = "list-group-item d-flex justify-content-between align-items-center task-item fade-in";
        li.textContent = task.title;

        let btn = document.createElement("button");
        btn.className = "btn btn-danger btn-sm";
        btn.textContent = "❌";
        btn.onclick = async () => {
            await fetch(`/tasks/${task.id}`, { method: "DELETE" });
            loadTasks();
        };

        li.appendChild(btn);
        taskList.appendChild(li);
    });
}

document.getElementById("taskForm").onsubmit = async (e) => {
    e.preventDefault();
    let title = document.getElementById("taskInput").value;
    if (!title.trim()) return; // Prevent empty tasks
    console.log("Adding task:", title);  // Debugging
    await fetch("/tasks", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ title }),
    });
    document.getElementById("taskInput").value = "";
    loadTasks();
};

loadTasks();

