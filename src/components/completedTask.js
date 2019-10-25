import React from 'react';

class completedTask extends React.Component {
    render() {
        return (
            <div className="row taskBreak">
                <div className="col-10 green">
                {this.props.completedTaskDescription}
                    </div>
                <div className="col-2 button">
                    <button type="button" className="btn btn-primary">Activate</button>
                </div>
            </div>
        );
    }
}

export default completedTask;