import React, { useState } from "react";

function AddTodo(props) {

    // const [taskName, setTaskName] = useState('');
    // const [description, setDescription] = useState('');

    const handleSubmit = (event) =>{
        event.preventDefault();
        const taskName = event.target[0].value;
        const description = event.target[1].value;
        console.log(`Input clicked...using taskName:${taskName}, description ${description} `);
        props.createTodo(taskName, description);
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <label htmlFor="taskName-input">Enter Task Name</label>
                <input required
                    type="text"
                    id="taskName-input"
                />

                <label htmlFor="description-input">Enter Task Description</label>
                <input required
                    type="text"
                    id="description-input"
                />
                <button type="submit">Add Task</button>
            </form>
            <ul>
            {props.tasks.map((task => <li>{task.taskName}</li>))} 
                
            </ul>
        </div>
    )

}

export default AddTodo;