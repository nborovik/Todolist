import React from 'react';
import {FilterValueType} from "./App";

type propsType = {
    title: string;
    tasks: Array<tasksType>
    removeTasks: (id: number) => void
    changeFilter: (value: FilterValueType) => void
}

export type tasksType = {
    id: number
    title: string
    isDone: boolean
}

export const Todolist = (props:propsType) => {
    return (
        <div>
            <h3>{props.title}</h3>
            <div>
                <input/>
                <button>+</button>
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
                <button onClick={ () => { props.changeFilter('all') } }>All</button>
                <button onClick={ () => { props.changeFilter('active') } }>Active</button>
                <button onClick={ () => { props.changeFilter('completed') } }>Completed</button>
            </div>
        </div>
    )
}