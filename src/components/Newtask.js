import React from 'react';

class Newtask extends React.Component {
    state = {
        newTaskDescription: ""
    }

    Newtask = () => {
        const task = {
            id: 1,
            taskDescription: this.state.newTaskDescription,
            completed: false
        }

        this.props.Newtask(this.taskDescription);

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
                <div className="col-10 green">
                    <input className="form-control" type="text" placeholder="New task..." value={this.state.taskDescription} onChange={this.taskDescriptionChanged} />
                </div>
                <div className="col-2 button">
                    <button type="button" className="btn btn-primary" onClick={this.addingTask}>Add</button>
                </div>
            </div>
        );
    }
}

export default Newtask;
