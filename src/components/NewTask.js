import React from 'react';
const uuidv4 = require('uuid/v4');


class NewTask extends React.Component {
    state = {
        taskDescription: ""
    }

    newTask = () => {
        const task = {
            id: uuidv4(),
            taskDescription: this.state.taskDescription,
            completed: false
        }

        this.props.addedTask(task);

        this.setState({ taskDescription: "" });
    }

    taskDescriptionChanged = (event) => {
        let taskDescription = this.state.taskDescription;

        taskDescription = event.target.value;

        this.setState({ taskDescription });
    }

    render() {
        return (
            <div className="row">
                <div className="col-9 green">
                    <input className="form-control" type="text" placeholder="New task..." value={this.state.taskDescription} onChange={this.taskDescriptionChanged} />
                </div>
                <div className="col-2 button">
                    <button type="button" className="btn btn-primary" onClick={this.newTask}>Add</button>
                </div>
            </div>
        );
    }
}

export default NewTask;
