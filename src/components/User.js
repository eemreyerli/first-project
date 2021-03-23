import React, { Component } from 'react'

class User extends Component {
    render() {

        //Destructing
        const {name,department,salary,sene} = this.props;
        return (
            <div>
                <ul>
                    <li>İsim : {name} </li>
                    <li>Departman : {department}</li>
                    <li>Maaş : {salary}</li>
                    <li>Kaç senelik : {sene}</li>
                </ul>
            </div>
        )
    }
}

export default User;