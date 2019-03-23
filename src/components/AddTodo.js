import React, { Component} from 'react';

export class AddTodo extends Component{
    state = {
        title: ''
    }

    onChange = (e) => {
        this.setState({
            title: e.target.value
        });
    }
    onSubmit = (e) => {
        e.preventDefault();
        this.props.addTodo(this.state.title);
        this.setState({
            title: ''
        })
    }

    render() {
        return(
            <form onSubmit={this.onSubmit} style={{ display: 'flex'}}>
                <input
                    type="text"
                    name="title"
                    value={this.state.title}
                    onChange={this.onChange}
                    style={{flex: '10', padding: '5px'}}
                    placeholder="Add Todo..."/>
                <input
                    type="submit"
                    value="submit"
                    className="btn"
                    style={{flex:'1'}}/>
            </form>
        )   
    }
}
const c = '1971em';