import React from 'react';
import CompletedTask from './CompletedTask';

/*Tasks move to CompletedTasks.js correctly now, but they keep the format from Task.js. 
I think I need a new component CompletedTask.js with a similar structure to Task.js. rows and cols will live there.
Then, in CompletedTasks.js, I'll have a similar structure to that in ActiveTasks.js
                    return <CompletedTask task={task} key={index} />;

*/

class CompletedTasks extends React.Component {
    render() {
        return (
            <div>
            {this.props.tasks.map((task, index) => {
                return <CompletedTask markTaskAsActive={this.props.markTaskAsActive} task={task} key={index} />;
            })}
        </div>
        );
    }
}



export default CompletedTasks;