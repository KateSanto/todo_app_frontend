import React from 'react';

class Task extends React.Component {
 render() {
     return (
         <div className="row">
             <div className="col-8">
                 {this.props.taskDescription}
             </div>
             <div className="col-2">
                 DONE
             </div>
             <div className="col-2">
                 DELETE
             </div>
         </div>
     );
 }
}

export default Task;