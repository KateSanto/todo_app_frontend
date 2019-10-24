import React from 'react';

class ActiveTask extends React.Component {
    render() {
        
        return (
            <div className="row taskBreak">
                <div className="col-8 green">
                    {this.props.taskDescription}
                </div>
                <div className="col-2 button">
                    <button type="button" className="btn btn-success">Done</button>
                </div>
                <div className="col-2 green">
                    <button type="button" className="btn btn-danger">Delete</button>
                </div>
            </div>
        );
    }
}

export default ActiveTask;