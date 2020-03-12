import React from 'react';
import TodoList from './components/TodoList';
import TodoForm from './components/TodoForm';


const data = [
  {
    task: 'Organize Garage',
    id: 1528817077286,
    completed: false
  },
  {
    task: 'Bake Cookies',
    id: 1528817084358,
    completed: true
  }
];


class App extends React.Component {
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state


  constructor() {
    super();
      this.state = {
        data: data,
        taskName: ''
    };
  };

  addTodo = todoName => {
    this.setState({
      data: [...this.state.data,
        {
          task: todoName,
          id: Date.now(),
          completed: false
        }
      ]
    })
  }

  completeTodo = todoID => {
    this.setState({
      data: this.state.data.map(task => {
        console.log('AS : App js : App : completetodo : check if id is passed',todoID)
        if (task.id === todoID) {
          return {
            ...task,
            completed: !task.completed
          };
        }
        return task;
    })
    })
  }

  clearDone = () => {
    this.setState({
      data: this.state.data.filter(task => !task.completed) 
    })
  }

  handleChanges = e => {
    this.setState({ taskName: e.target.value });
  };
        
  handleAddTask = e => {
    e.preventDefault();
    this.addTodo(this.state.taskName);
    this.setState({
      taskName: ''
    })
  };

  render() {
    return (
      <div>
        <h2>Welcome to your Todo App!</h2>

        <TodoList data={this.state.data} completeTodo={this.completeTodo} />

        <TodoForm 
        clearDone={this.clearDone}
        handleAddTask={this.handleAddTask}
        handleChanges={this.handleChanges}
        taskName={this.state.taskName}
        />
      </div>
    );
  }
}

export default App;
