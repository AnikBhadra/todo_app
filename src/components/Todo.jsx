import React, { useState } from 'react'

let globalID = 0

function Todo() {

    const [todos, setTodos] = useState([])
    const [task, setTask] = useState("")

    function createTodo(event) {
        event.preventDefault()
        setTodos(oldTodos => {
            setTask('')
            return [...oldTodos, { todo: task, id: globalID++ }]
        })
    }

    function deleteItem(itemID) {
        setTodos(oldTodos => oldTodos.filter(item => item.id !== itemID))
    }

    return (
        <div>
            <h1>todo</h1>

            <form onSubmit={createTodo} >
                <input type="text" value={task} onChange={e => { setTask(e.target.value) }} />
                <button type='submit' >create todo</button>
            </form>


            <ul>
                {todos.map((item) => {
                    return <div key={item.index} >
                        <li>{item.todo} </li>
                        <button onClick={() => deleteItem(item.id)} >-</button>
                    </div>
                })}
            </ul>
        </div>
    )
}

export default Todo