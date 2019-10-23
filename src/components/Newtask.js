import React from 'react';

class Newtask extends React.Component {
    render() {
        return (
            <div className="row">
                <div className="col-10 green">
                    <input className="form-control" type="text" placeholder="New task..." />
                </div>
                <div className="col-2 button">
                    <button type="button" className="btn btn-primary">Add</button>
                </div>
            </div>
        );
    }
}

export default Newtask;
