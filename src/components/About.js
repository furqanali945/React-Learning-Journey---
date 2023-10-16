import UserCardClass from "./UserCardClass";
import React from "react";

class About extends React.Component{
    constructor(props){
        super(props);
        console.log("Parent constructor called.");
    }

    componentDidMount(){
        console.log("Parent did mount.");
    }

    render(){
        console.log("Parent render!");
        return (
            <div className="about_page">
                <div className="container">
                    <h1>About Us Page</h1>
                    <h2>Team Members</h2>
                    <UserCardClass name="1" />
                    <UserCardClass name="2" />
                    {/*
                    <UserCardClass name="Child 3 - Class Based Component" />
                    <UserCardClass name="Child 4 - Class Based Component" /> */}
                </div>
            </div>
        )
    }
}


export default About;