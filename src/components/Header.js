import React from 'react';

class Header extends React.Component {
    render() {
        return (
            <div className="row">
                <div className="col-12 green">
                    {this.props.headerDescription}
                </div>
            </div>
        );
    }
}

export default Header;
