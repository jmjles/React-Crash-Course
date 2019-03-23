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

    markComplete = (e) => {
        console.log(this.props);
        
    }
    render() {
    return (
      <div style={this.getStyle()}>
        <p>
            <input type="checkbox" onChange={this.markComplete}></input>
            {this.props.todo.title}
        </p>
      </div>
    )
  }
}

todoItem.propTypes = {
    todo: PropTypes.object.isRequired
}
export default todoItem
