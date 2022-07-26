import React, { useState } from 'react'

function Todo() {

    const [todos, setTodos] = useState(["anik", "bhadra"])
    const [task, setTask] = useState("")

    function createTodo(event) {
        event.preventDefault()
        setTodos(oldTodos => {
            setTask('')
            return [...oldTodos, task]
        })
    }


    return (
        <div>
            <h1>todo</h1>

            <form onSubmit={createTodo} >
                <input type="text" value={task} onChange={e => { setTask(e.target.value) }} />
                <button type='submit' >create todo</button>
            </form>


            <ul>
                {todos.map(todo => {
                    return <li>{todo} </li>
                })}
            </ul>
        </div>
    )
}

export default Todo