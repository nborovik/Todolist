import React, {ChangeEvent, useState, KeyboardEvent} from 'react';
import {FilterValueType} from "./App";

type propsType = {
    title: string;
    tasks: Array<tasksType>
    removeTasks: (id: string) => void
    changeFilter: (value: FilterValueType) => void
    addTask:(newTitle:string)=>void
}

export type tasksType = {
    id: string
    title: string
    isDone: boolean
}

export const Todolist = (props:propsType) => {
    const [newTitle, setNewTitle] = useState('')
    console.log(newTitle)


    const addTaskHandler=()=>{
        props.addTask(newTitle)
        setNewTitle('')
    }

    const onChangeHandler=(event:ChangeEvent<HTMLInputElement>)=>{
        setNewTitle(event.currentTarget.value)
    }

    const onKeyPressHandler=(event:KeyboardEvent<HTMLInputElement>)=>{
        if(event.key==="Enter"){
            addTaskHandler()
        }
    }

    const allChangeFilter = () => {
        props.changeFilter('all')
    }

    const activeChangeFilter = () => {
        props.changeFilter('active')
    }

    const completedChangeFilter = () => {
        props.changeFilter('completed')
    }


    return (
        <div>
            <h3>{props.title}</h3>
            <div>
                <input value={newTitle} onChange={onChangeHandler} onKeyPress={onKeyPressHandler}/>
                <button onClick={addTaskHandler}>+</button>
            </div>
            <ul>
                {
                    props.tasks.map( t => <li><input type="checkbox" checked={t.isDone}/>
                            <span>{t.title}</span>
                            <button onClick={ () => { props.removeTasks(t.id)} }>X</button>
                        </li>
                    )
                }
            </ul>
            <div>
                <button onClick={allChangeFilter}>All</button>
                <button onClick={activeChangeFilter}>Active</button>
                <button onClick={completedChangeFilter}>Completed</button>
            </div>
        </div>
    )
}