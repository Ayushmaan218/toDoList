import React, {useState} from "react";

function TODOLIST(){
    const [tasks, setTasks] = useState([]);
    const [newTask, setNewTask] = useState("");

    function handelInputChange(event){
        setNewTask(event.target.value)
    }

    function addTask(){
        if(newTask.trim() !==""){
            setTasks(t=>[...t,newTask]);
            setNewTask("");
        }
    }

    function deleteTask(index){
        const updatedTask = tasks.filter((_,i)=>i!==index);
        setTasks(updatedTask);
    }

    function moveTaskUp(index){
        if(index > 0){
            const updatedTask=[...tasks];
            [updatedTask[index],updatedTask[index-1]]=
            [updatedTask[index-1],updatedTask[index]];
            setTasks(updatedTask);        
        }
    }

    function moveTaskdown(index){
        if(index < tasks.length){
            const updatedTask=[...tasks];
            [updatedTask[index],updatedTask[index+1]]=
            [updatedTask[index+1],updatedTask[index]];
            setTasks(updatedTask);        
        }
    }
    return (<
        div className="to-do-list">
            <h1>to-do-List</h1>
            <div>
                <input type="text" 
                placeholder="Enter a task...."
                value={newTask}
                onChange={handelInputChange}
                />
                <button
                    className="add-button"
                    onClick={addTask}>
                    add
                </button>

            </div>
            <ol>
                {tasks.map((task, index)=>
                    <li key={index}>
                        <span className="text">{task}</span>
                        <button
                            className="delete-button"
                            onClick={()=>deleteTask(index)}>
                                🗑️
                        </button>
                        <button
                            className="move-button"
                            onClick={()=>moveTaskUp(index)}>
                                ⬆️
                        </button>
                        <button
                            className="move-button"
                            onClick={()=>moveTaskdown(index)}>
                                ⬇️
                        </button>
                    </li>
                )}
            </ol>
        </div>)
}
export default TODOLIST