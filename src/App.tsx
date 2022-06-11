import React, {useState} from 'react';
import './App.css';
import {tasksType, Todolist} from "./Todolist";
import {v1} from "uuid";

export type FilterValueType = 'all' | 'completed' | 'active';

function App() {
    let [tasks, setTasks] = useState<Array<tasksType>>([
        {id: v1(), title:'HTML&CSS',isDone:true},
        {id: v1(), title:'JS',isDone:false},
        {id: v1(), title:'React',isDone:true},
        {id: v1(), title:'Redux',isDone:false},
    ]);


    const addTask = (newTitle:string) => {
        const newTask = {id: v1(), title: newTitle,isDone:false}
        setTasks([newTask, ...tasks])
    }

    let [filter, setFilter] = useState<FilterValueType>('all');

    function removeTasks(id: string) {
        let filteredTasks = tasks.filter( t => t.id !== id)
        setTasks(filteredTasks);
    }

    function changeFilter(value: FilterValueType) {
        setFilter(value);
    }

    let tasksForTodolist = tasks;
    if (filter === 'completed') {
        tasksForTodolist = tasks.filter(t => t.isDone === true);
    }
    if (filter === 'active') {
        tasksForTodolist = tasks.filter(t => t.isDone === false);
    }


    return (
        <div className="App">
            <Todolist title={'What to learn'}
                      tasks={tasksForTodolist}
                      removeTasks={removeTasks}
                      changeFilter={changeFilter}
                      addTask={addTask}
            />
        </div>
    );
}

export default App;
