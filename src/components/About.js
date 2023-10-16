import UserCardClass from "./UserCardClass";
import React from "react";

class About extends React.Component{
    constructor(props){
        super(props);
        // console.log("Parent constructor called.");
    }

    async componentDidMount(){
        // console.log("Parent did mount.");
        // API call
        const data =  await fetch("https://api.github.com/users/akshaymarch7");
        const json =  await data.json();
        console.log(json);
    }

    render(){
        // console.log("Parent render!");
        return (
            <div className="about_page">
                <div className="container">
                    <h1>About Us Page</h1>
                    <h2>Team Members</h2>
                    <UserCardClass name="Syed Furqan Ali" />
                </div>
            </div>
        )
    }
}


export default About;