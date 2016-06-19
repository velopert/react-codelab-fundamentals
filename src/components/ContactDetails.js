import React from 'react';

export default class ContactDetails extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            isEdit: false,
            name: '',
            phone: ''
        }

        this.handleRemove = this.handleRemove.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.handleEdit = this.handleEdit.bind(this);
        this.toggleMode = this.toggleMode.bind(this);
        this.handleKeyPress = this.handleKeyPress.bind(this);
    }

    handleRemove() {
        this.props.onRemove();
    }

    handleChange(e) {
        let nextState = {};
        nextState[e.target.name] = e.target.value;
        this.setState(nextState);
    }

    handleEdit() {
        this.props.onEdit(this.state.name, this.state.phone);
    }

    toggleMode() {
        if(!this.state.isEdit) {
            this.setState({
                name: this.props.contact.name,
                phone: this.props.contact.phone
            });
        } else {
            this.handleEdit();
        }

        this.setState({
            isEdit: !this.state.isEdit
        });
    }

    handleKeyPress(e) {
        if(e.charCode==13) {
            this.toggleMode();
        }
    }

    render() {

        const view = (
            <div>
                <p>{ this.props.contact.name }</p>
                <p>{ this.props.contact.phone }</p>
            </div>
        );

        const edit = (
            <div>
                <p><input type="text" name="name" placeholder="name"
                        value={this.state.name} onChange={this.handleChange}
                        onKeyPress={this.handleKeyPress}/></p>
                <p><input type="text" name="phone" placeholder="phone"
                        value={this.state.phone} onChange={this.handleChange}
                        onKeyPress={this.handleKeyPress}/></p>
            </div>
        );



        // 선택되었을 때 보여질 부분
        const details = (
            <div>
                { this.state.isEdit ? edit : view }
                <button onClick={this.toggleMode}>{ this.state.isEdit ? "Ok" : "Edit" }</button>
                <button onClick={this.handleRemove}>Remove</button>
            </div>
        );

        // 아무것도 선택되지 않았을 때 보여질 부분
        const blank = (
            <div> Nothing is Selected </div>
        );

        return(
            <div>
                <h2>Details</h2>

                { /* isSelected props 값에 따라 어떤걸 보여줄지 정한다
                    ternary expression condition ? true : false */ }

                { this.props.isSelected ? details : blank }


             </div>
        );
    }
}

ContactDetails.defaultProps = {
    contact: {
        name: "",
        phone: ""
    }
}