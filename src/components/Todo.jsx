import React, { useState } from 'react'

function Todo() {

    const [todos, setTodos] = useState(["anik", "bhadra"])
    const [task, setTask] = useState("")

    function createTodo() {
        setTodos(oldTodos => {
            return [...oldTodos, task]
        })
    }
    return (
        <div>
            <h1>todo</h1>
            <input type="text" value={task} onChange={e => { setTask(e.target.value) }} />
            <button onClick={createTodo} >create todo</button>

            <ul>
                {todos.map(todo => {
                    return <li>{todo} </li>
                })}
            </ul>
        </div>
    )
}

export default Todo