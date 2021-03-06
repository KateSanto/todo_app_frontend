import React from 'react';
const uuidv4 = require('uuid/v4');


class NewTask extends React.Component {
    state = {
        taskDescription: ""
        // creationDate: ""
    }

    //lookup 'moment' library for due date thing

    newTask = () => {
        const task = {
            // id: uuidv4(),
            taskDescription: this.state.taskDescription,
            completed: "0"
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
            <div className="row new">
                <div className="col-9">
                    <input className="form-control" type="text" placeholder="New task..." value={this.state.taskDescription} onChange={this.taskDescriptionChanged} onSubmit={this.newTask}/>
                </div>
                <div className="col-2 button">
                    <button type="submit" className="btn btn-primary" onClick={this.newTask}><span className="fas fa-plus" aria-hidden="true"></span></button>

                </div>
            </div>
        );
    }
}

export default NewTask;
