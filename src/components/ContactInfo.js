import React from 'react';

export default class ContactInfo extends React.Component {
    render() {
        return (
            <div>{this.props.contact.name} {this.props.contact.phone}</div>
        );
    }
}
