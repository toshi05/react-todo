import React from 'react';

class Todo extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            title:'',
            content:''
        }
    }
    contentChanged(event){
        let inputContent = event.target.value;
        this.setState({content:inputContent})
    }
    titleChanged(event){
        let inputTitle = event.target.value;
        this.setState({title:inputTitle})
    }
    render(){
        return(
            <div>
                <h1>TODO</h1>
                <input
                    className="title" 
                    type="text"
                    value={this.state.title}
                    onChange={(event) => {this.titleChanged(event)}}
                />
                <input
                    className="content" 
                    type="text"
                    value={this.state.content}
                    onChange={(event) => {this.contentChanged(event)}}
                />
            </div>
        )
    }
}
export default Todo;