import React from 'react';
import ContactInfo from './ContactInfo';
import ContactDetails from './ContactDetails';
import ContactCreate from './ContactCreate';
import update from 'react-addons-update';

export default class Contact extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            contactData: [{
                name: 'Abet',
                phone: '010-0000-0001'
            }, {
                name: 'Betty',
                phone: '010-0000-0002'
            }, {
                name: 'Charlie',
                phone: '010-0000-0003'
            }, {
                name: 'David',
                phone: '010-0000-0004'
            }],
            keyword: "",
            selectedKey: -1
        };

        this.handleChange = this.handleChange.bind(this);

        this.handleCreate = this.handleCreate.bind(this);
        this.handleRemove = this.handleRemove.bind(this);
        this.handleEdit = this.handleEdit.bind(this);

        this.handleContactClick = this.handleContactClick.bind(this);
    }

    componentWillMount() {

        let contactData = localStorage.contactData;

        if(contactData) {
            this.setState({
                contactData: JSON.parse(contactData)
            });
        }
    }

    componentDidUpdate(prevProps, prevState) {
        if(JSON.stringify(prevState.contactData) != JSON.stringify(this.state.contactData)) {
             localStorage.contactData = JSON.stringify(this.state.contactData);
         }
    }



    handleChange(e) {
        let nextState = {};
        nextState[e.target.name] = e.target.value; // { name: value } 식의 객체가 만들어짐
        this.setState(nextState);
    }

    handleCreate(contact) {
        this.setState({
            contactData: update(this.state.contactData, { $push: [contact] })
        })
    }

    handleRemove() {
        this.setState({
            contactData: update(this.state.contactData,
                { $splice: [[this.state.selectedKey, 1]]}),
            selectedKey: -1
        });
    }

    handleEdit(name, phone) {
        this.setState({
            contactData: update(this.state.contactData,
                {
                    [this.state.selectedKey]: {
                        name: {$set: name},
                        phone: {$set: phone}
                     }
                })
        })
    }

    handleContactClick(key) {
        this.setState({
            selectedKey: key
        });

        console.log(key, 'is selected');
    }

    render() {
        const mapToComponents = (data) => {
            data.sort((a,b) => { return a.name > b.name; }); // 알파벳 순서로 정렬
            data = data.filter(
                (contact) => {
                    return contact.name.toLowerCase()
                           .indexOf(this.state.keyword.toLowerCase()) > -1;
                }
            );

            return data.map((contact, i) => {
                return (<ContactInfo
                            contact={contact}
                            key={i}
                            onClick={ () => { this.handleContactClick(i) } }
                        />);
            });
        };

        return (
            <div>
                <h1>Contacts</h1>
                <input name="keyword" 
                       placeholder="Search"
                       value={this.state.keyword} 
                       onChange={this.handleChange}/>
                <div>{mapToComponents(this.state.contactData)}</div>
                <ContactDetails
                    contact={this.state.contactData[this.state.selectedKey]}
                    isSelected={this.state.selectedKey!=-1}
                    onRemove={this.handleRemove}
                    onEdit={this.handleEdit}/>
                <ContactCreate onCreate={this.handleCreate}/>
            </div>
        );
    }
}
