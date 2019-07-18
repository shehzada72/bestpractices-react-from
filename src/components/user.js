import React, { Component } from 'react';
import FormFields from '../widgets/froms/formFields';
import {processFromFields} from "../utils/methods";

class User extends Component {

    state = {
        formData: {
            name: {
                element: 'input',
                value: '',
                label: true,
                labelText: 'Name',
                config: {
                    name: 'name',
                    type: 'text',
                    placeholder: 'Enter your name'
                },
                validation: {
                    required: true,
                    minLen: 5
                },
                valid: false,
                touched: false,
                validationMessage: ''
            },
            last_name: {
                element: 'input',
                value: '',
                label: true,
                labelText: 'Last Name',
                config: {
                    name: 'last_name',
                    type: 'text',
                    placeholder: 'Enter your last name'
                },
                validation: {
                    required: false
                },
                valid: true,
                touched: false,
                validationMessage: ''
            },
            message: {
                element: 'textarea',
                value: '',
                label: true,
                labelText: 'Message',
                config: {
                    name: 'message',
                    rows: 4,
                    cols: 36
                },
                validation: {
                    required: true
                },
                valid: false,
                touched: false,
                validationMessage: ''
            },
            age: {
                element: 'select',
                value: '',
                label: true,
                labelText: 'Age',
                config: {
                    name: 'age',
                    options: [
                        {val: '1', text: '10-20'},
                        {val: '2', text: '20-30'},
                        {val: '3', text: '30-40'},
                        {val: '4', text: '40-50'},
                    ]
                },
                validation: {
                    required: true
                },
                valid: false,
                touched: false,
                validationMessage: ''
            }
        }
    };

    updateFrom = newState => this.setState({...newState});

    submitForm = e => {
        e.preventDefault();

        let dataToSubmit = processFromFields(this.state.formData);


        console.log(dataToSubmit);
    };

    render(){
        return(
            <div>
                <div className="container">
                    <form onSubmit={this.submitForm}>

                        <FormFields
                            formData={this.state.formData}
                            changeHandler={newState => this.updateFrom(newState)}
                        />

                        <button type={'submit'}>Submit</button>
                    </form>
                </div>
            </div>
        )
    }
}

export default User;
