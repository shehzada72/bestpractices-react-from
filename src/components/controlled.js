import React, { Component } from 'react';

class Controlled extends Component {

    state = {
        name: 'Shehzad',
        lastName: 'Aslam'
    };

    updateFields = e => {
        let {name, value} = e.target;
        this.setState({[name]: value})
    };

    render(){
        return(
            <div>
                <form>
                    <div className={'form_element'}>
                        <label>Enter Name</label>
                        <input
                            type="text"
                            name={'name'}
                            value={this.state.name}
                            onChange={this.updateFields}
                        />
                    </div>
                    <div className={'form_element'}>
                        <label>Enter LastName</label>
                        <input
                            type="text"
                            name={'lastName'}
                            value={this.state.lastName}
                            onChange={this.updateFields}
                        />
                    </div>
                </form>
            </div>
        )
    }
}

export default Controlled;
