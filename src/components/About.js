import UserCardClass from "./UserCardClass";
import React from "react";

class About extends React.Component{
    constructor(props){
        super(props);
        // console.log("Parent constructor called.");

        this.state = {
            userInfo:{}
        }
    }

    async componentDidMount(){
        // console.log("Parent did mount.");
        // API call
        const data =  await fetch("https://api.github.com/users/furqanali945");
        const json =  await data.json();

        this.setState({
            userInfo: json
        })    

        console.log(json);
    }

    componentDidUpdate(){
        console.log("Component Did update called!");
    }

    render(){
        // console.log("Parent render!");

        const {name,location,avatar_url} = this.state.userInfo;

        return (
            <div className="about_page">
                <div className="container">
                    <h1>About Us Page</h1>
                    <h2>Team Members</h2>
                    <UserCardClass name={name} location={location} avatar_url={avatar_url}/>
                </div>
            </div>
        )
    }
}


export default About;