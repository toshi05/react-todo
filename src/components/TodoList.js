import React from 'react';

class TodoList extends React.Component {
    render() {
        { console.log(this.props) }
        return (
            <div>
                {this.props.todos.map((todoItem) => {
                    return (
                        <div>
                            <input
                                type="checkbox"
                            />
                            <p>{todoItem.id}</p>
                            <p>{todoItem.title}</p>
                            <p>{todoItem.content}</p>
                        </div>
                    )
                })}
            </div>
        )
    }

}
export default TodoList;