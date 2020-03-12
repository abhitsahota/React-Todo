import React from 'react';

const Todo = props => {
    return (
        <div>
            <h3>{props.task}</h3><button onClick={e => props.completeTodo(props.id)}>Completed</button>
            <br />
            <br />
        </div>
    )
};

export default Todo;