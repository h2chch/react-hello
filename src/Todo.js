import React from 'react'
class Todo extends React.Component
{
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <div>
                <input type="checkbox" checked={this.props.todo.checked} onChange={this.props.onToggle}/>
                TODO: <span>{this.props.todo.desc}</span> &nbsp;    
                <button onClick={this.props.onDelete}>Hapus TODO ini</button>
            </div>
        )
    }
}

export default Todo