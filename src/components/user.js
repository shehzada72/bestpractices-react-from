import React, { Component } from 'react';
import FormFields from '../widgets/froms/formFields';

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
                }
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
                }
            }
        }
    };

    updateFrom = newState => this.setState({...newState});

    submitForm = e => {
        e.preventDefault();

        let dataToSubmit = {};
        for (let key in this.state.formData){
            dataToSubmit[key] = this.state.formData[key].value;
        }

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
