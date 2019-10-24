import React from 'react';

class Newtask extends React.Component {
    addingTask = () => {
        alert("Hello Kate");
        }
    
    render() {
        return (
            <div className="row">
                <div className="col-10 green">
                    <input className="form-control" type="text" placeholder="New task..." />
                </div>
                <div className="col-2 button">
                    <button type="button" className="btn btn-primary" onClick={this.addingTask}>Add</button>
                </div>
            </div>
        );
    }
}

export default Newtask;
