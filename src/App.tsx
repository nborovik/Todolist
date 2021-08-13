import React, {useState} from 'react';
import './App.css';
import {tasksType, Todolist} from "./Todolist";

export type FilterValueType = 'all' | 'completed' | 'active';

function App() {
    let [tasks, setTasks] = useState<Array<tasksType>>([
        {id:1, title:'HTML&CSS',isDone:true},
        {id:2, title:'JS',isDone:false},
        {id:3, title:'React',isDone:true},
        {id:4, title:'Redux',isDone:false},
    ]);
    let [filter, setFilter] = useState<FilterValueType>('all');

    function removeTasks(id: number) {
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
            />
        </div>
    );
}

//<Todolist title={'What to learn2222'} tasks={tasks2}/>
//const tasks2=[
//         {id:1, title:'HTML&CSS222',isDone:false},
//         {id:2, title:'JS222',isDone:true},
//     ]

export default App;
