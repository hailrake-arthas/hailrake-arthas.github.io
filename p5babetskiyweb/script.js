const input = document.getElementById("taskInput");
const list = document.getElementById("taskList");

let tasks = JSON.parse(localStorage.getItem("tasks")) || [];
let filter = "all";


input.addEventListener("keydown", e => {
    if (e.key === "Enter" && input.value.trim() !== "") {
        tasks.push({
            text: input.value,
            completed: false,
            date: new Date().toLocaleString("uk-UA")
        });
        input.value = "";
        save();
        render();
    }
});


function render() {
    list.innerHTML = "";

    tasks
        .filter(task => {
            if (filter === "completed") return task.completed;
            if (filter === "active") return !task.completed;
            return true;
        })
        .forEach((task, index) => {
            const li = document.createElement("li");
            if (task.completed) li.classList.add("completed");

            if (!task.completed) {
                const checkbox = document.createElement("input");
                checkbox.type = "checkbox";
                checkbox.onclick = () => {
                    task.completed = true;
                    save();
                    render();
                };
                li.appendChild(checkbox);
            }

     
            const span = document.createElement("span");
            span.className = "task-text";
            span.textContent = task.text;


            span.ondblclick = () => {
                const edit = document.createElement("input");
                edit.className = "edit-input";
                edit.value = task.text;

                edit.onkeydown = e => {
                    if (e.key === "Enter") {
                        task.text = edit.value;
                        save();
                        render();
                    }
                };

                li.replaceChild(edit, span);
                edit.focus();
            };

            li.appendChild(span);


            const date = document.createElement("span");
            date.className = "date";
            date.textContent = task.date;
            li.appendChild(date);


            const del = document.createElement("span");
            del.className = "delete";
            del.textContent = "✖";
            del.onclick = () => {
                tasks.splice(index, 1);
                save();
                render();
            };

            li.appendChild(del);
            list.appendChild(li);
        });
}


function showAll() {
    filter = "all";
    render();
}

function showActive() {
    filter = "active";
    render();
}

function showCompleted() {
    filter = "completed";
    render();
}


function save() {
    localStorage.setItem("tasks", JSON.stringify(tasks));
}

render();
