// your components will all go in this `component` directory.
// feel free to change this component.js into TodoList.js
import React from 'react';
import Todo from './Todo';

const TodoList = props => {

    return (
        <div>
            {props.data.map(task => (
                <Todo 
                key={task.id}
                task={task.task}
                id={task.id}
                completeTodo={props.completeTodo} 
               /> 
            ))
            }

        </div>
    )
};

export default TodoList;