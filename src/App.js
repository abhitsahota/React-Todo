import React from 'react';
import TodoList from './components/TodoList';
import TodoForm from './components/TodoForm';


class App extends React.Component {
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state
  const data = [
    {
      task: 'Organize Garage',
      id: 1528817077286,
      completed: false
    },
    {
      task: 'Bake Cookies',
      id: 1528817084358,
      completed: false
    }
  ];

  constructor() {
    super();
      this.state = {
        data
    };
  };



  render() {
    return (
      <div>
        <h2>Welcome to your Todo App!</h2>

        <TodoList data={this.state.data} />

        <TodoForm />
      </div>
    );
  }
}

export default App;
