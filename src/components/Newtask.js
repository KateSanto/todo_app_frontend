import React from 'react';

class Newtask extends React.Component {
    render() {
        return (
            <div class="row">
                <div class="col-10 green">
                    <input class="form-control" type="text" placeholder="New task..." />
                </div>
                <div class="col-2 button">
                    <button type="button" class="btn btn-primary">Add</button>
                </div>
            </div>
        );
    }
}

export default Newtask;
