import React from 'react';

export default class ContactInfo extends React.Component {
    constructor(props) {
        super(props);
    }


    render() {
        return (
            <div onClick={this.props.onClick}>
                {this.props.contact.name}
            </div>
        );
    }
}
