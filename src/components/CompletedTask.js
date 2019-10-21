import React from 'react';

class CompletedTask extends React.Component {
    render() {
        return (
            <div class="row taskBreak">
                <div class="col-10 green">
                {this.props.completedTaskDescription}
                    </div>
                <div class="col-2 button">
                    <button type="button" class="btn btn-primary">Activate</button>
                </div>
            </div>
        );
    }
}

export default CompletedTask;