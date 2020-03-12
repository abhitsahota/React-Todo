import React from 'react';

const TodoForm = props => {

    return (
        <div>
            <form onSubmit={props.handleAddTask}>
                <input
                type="text"
                name="item"
                value={props.taskName}
                onChange={props.handleChanges}
                />
                <button>Add</button>
            </form>
            <button onClick={props.clearDone}>Clear completed</button>
        </div>
    )
};

export default TodoForm;