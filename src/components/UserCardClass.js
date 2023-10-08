import React from "react";

class UserCardClass extends React.Component{
    constructor(props){
        super(props); // Call the constructor of the parent class (React.Component)
    }
    }
    render(){
        const {name} = this.props;

        return(
            <div className="usercard">
                <ul>
                    <li>
                        <strong>Name:</strong> {name}
                    </li>
                    <li>
                       <strong>Github:</strong> @furqanali945
                    </li>
                    <li><strong>Designation:</strong> Senior Web Developer</li>
                </ul>
            </div>
        )
    }
}

export default UserCardClass; 