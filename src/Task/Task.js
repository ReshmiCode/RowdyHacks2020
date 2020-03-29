import React, { useState } from 'react';

import NewTask from './NewTask';
import TaskList from './TaskList';
import '../Resources/Resources.css';
import './Task.css';
const axios = require('axios');

const Task = () => {
    const [tasks, setTasks] = useState([{
        description: "drink water",
        repeats: true,
        count: 2,
        reminderTime: "7pm"
    }]);

    const addNewTask = async (newTask) => {
        await axios.get('https://rowdyhacks-2020.appspot.com/api/v1/users/tasks/5e802fe14f41e13a0c6c5db4')
        .then(function (response) {
            console.log(response);
        });

        setTasks((prevTasks) => {
          return prevTasks.concat(newTask);
        });
    }

    const increaseCount = (desc) => {
        const objIndex = tasks.findIndex((obj => obj.description === desc));
        setTasks((prevTasks) => {
            prevTasks[objIndex].count = prevTasks[objIndex].count + 1;
            return prevTasks.slice(0);  // must return new array for state to update
        });
    }

    return(
        <div>
            <div className="intro-bar">
                <h1>🌟 Keep Motivated 🌟</h1>
            </div>
            <div className="intro-desc">
                <h1>Set Daily Tasks</h1>
            </div>
            <div className="task-list">
                <NewTask onAddTask={addNewTask}/>
                <TaskList items={tasks} increaseCount={increaseCount}/>
            </div>
        </div>
    );
};

export default Task;