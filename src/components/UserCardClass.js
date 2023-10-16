import React from "react";

class UserCardClass extends React.Component{
    constructor(props){
        super(props); // Call the constructor of the parent class (React.Component)
        this.state = {
            count: 0,
        };

        console.log("Child " + this.props.name + " constructor.");
    }

    componentDidMount(){
        console.log("Child " + this.props.name +  " componentDidMount.");
    }
    
    render(){
        
        const {name} = this.props;
        const {count,count_2} = this.state;

        console.log("Child "+ name +" render.");

        return(
            <div className="usercard">
                <ul>
                    <li><button
                        onClick={()=> {
                            this.setState(
                                {
                                    count: this.state.count + 1,
                                }
                            )
                        }}
                    >Increase the Count</button></li>
                    <li>
                        <strong>Name:</strong> {name} - {count} 
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