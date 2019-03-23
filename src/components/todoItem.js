import React, { Component } from 'react'
import PropTypes from 'prop-types';

export class todoItem extends Component {
    getStyle = () => {
        return {
            background: 'grey',
            padding: '10px',
            borderBottom: '1px solid black',

            textDecoration: this.props.todo.completed ? 
            'line-through' : 'none' 
        }
    }

    render() {
      const { id, title } = this.props.todo;
      return (
      <div style={this.getStyle()}>
        <p>
          <input type="checkbox" onChange={this.props.markComplete.bind(this, id)}/>
          {title}
          <button style={btnStyle} onClick={this.props.delTodo.bind(this, id)}>X</button>
        </p>
      </div>
    )
  }
}

todoItem.propTypes = {
    todo: PropTypes.object.isRequired
}
const btnStyle = {
  background: 'red',
  color:'black',
  border:'none',
}
export default todoItem
