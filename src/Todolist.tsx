import React, {ChangeEvent, useState, KeyboardEvent} from 'react';
import {FilterValueType} from "./App";
import {Button} from "./Components/Button";


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

    const tsarChangeFilterHandler = (value: FilterValueType) => {
        props.changeFilter(value)
    }

    const removeTaskHandler=(tID:string)=> {
        props.removeTasks(tID)
    }

    return (
        <div>
            <h3>{props.title}</h3>
            <div>
                <input value={newTitle} onChange={onChangeHandler} onKeyPress={onKeyPressHandler}/>
                {/*<button onClick={addTaskHandler}>+</button>*/}
                <Button name={'+'} callBack={()=>addTaskHandler}/>
            </div>
            <ul>
                {
                    props.tasks.map( t => {

                        return(
                            <li key={t.id}>
                                <input type="checkbox" checked={t.isDone}/>
                                <span>{t.title}</span>
                                {/*<button onClick={()=>removeTaskHandler(t.id)}>X</button>*/}
                                <Button name={'x'} callBack={()=>removeTaskHandler(t.id)}/>
                            </li>
                        )
                    })
                }
            </ul>
            <div>
                {/* <button onClick={()=>tsarChangeFilterHandler("all")}>All</button>*/}
                {/*<button onClick={()=>tsarChangeFilterHandler("active")}>Active</button>*/}
                {/*<button onClick={()=>tsarChangeFilterHandler("completed")}>Completed</button>*/}
                <Button name={'all'} callBack={()=>tsarChangeFilterHandler('all')} />
                <Button name={'active'} callBack={()=>tsarChangeFilterHandler('active')} />
                <Button name={'completed'} callBack={()=>tsarChangeFilterHandler('completed')} />
            </div>
        </div>
    )
}