import React from 'react';

class ActiveTask extends React.Component {
    render() {
        return (
            <div class="row taskBreak">
                <div class="col-8 green">
                    {this.props.taskDescription}
                </div>
                <div class="col-2 button">
                    <button type="button" class="btn btn-success">Done</button>
                </div>
                <div class="col-2 green">
                    <button type="button" class="btn btn-danger">Delete</button>
                </div>
            </div>
        );
    }
}

export default ActiveTask;