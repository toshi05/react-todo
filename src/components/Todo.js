import React from 'react';

class Todo extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            title: '',
            content: ''
        }
        this.registTodo = this.registTodo.bind(this);
    }
    contentChanged(event) {
        let inputContent = event.target.value;
        this.setState({ content: inputContent })
    }
    titleChanged(event) {
        let inputTitle = event.target.value;
        this.setState({ title: inputTitle })
    }
    registTodo(event) {
        console.log(event)
        event.preventDefault();
        console.log("regist button click")
        this.props.updateState(this.state);
        this.setState({ title: "", content: "" })
    };
    render() {
        return (
            <div>
                <form onSubmit={this.registTodo}>
                    <h1>TODO</h1>
                    <input
                        className="title"
                        type="text"
                        value={this.state.title}
                        onChange={(event) => { this.titleChanged(event) }}
                    />
                    <input
                        className="content"
                        type="text"
                        value={this.state.content}
                        onChange={(event) => { this.contentChanged(event) }}
                    />
                    <button
                        type="submit"
                    >登録</button>
                </form>
            </div>
        )
    }
}
export default Todo;