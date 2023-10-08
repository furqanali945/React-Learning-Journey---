import UserCard from "./UserCard";
import UserCardClass from "./UserCardClass";

const About = () => {
    return (
        <div className="about_page">
            <div className="container">
                <h1>About Us Page</h1>
                <h2>Team Members</h2>
                <UserCard name="Syed Furqan Ali - Functional Component" />
                <UserCardClass name="Syed Furqan Ali - Class Based Component" />
            </div>
        </div>
    )
}

export default About;