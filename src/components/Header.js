import React from 'react';

class Header extends React.Component {
    render() {
        return (
            <div class="row">
                <div class="col-12 green">
                    {this.props.headerDescription}
                </div>
            </div>

            //  <h1>Get stuff done</h1>
        );
    }
}

export default Header;
