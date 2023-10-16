import React from "react";

class UserCardClass extends React.Component{
    constructor(props){
        super(props); // Call the constructor of the parent class (React.Component)

        // console.log("Child " + this.props.name + " constructor.");
    }

    componentDidMount(){
        // console.log("Child " + this.props.name +  " componentDidMount.");
    }

    render(){
        
        const {name} = this.props;

        console.log("Child "+ name +" render.");

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