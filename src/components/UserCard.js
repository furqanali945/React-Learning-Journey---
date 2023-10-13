import { useState } from "react";

const UserCard = ({name}) => {

    const [count] = useState(0);    
    const [count_2] = useState(1);   

    return(
        <div className="usercard">
            <ul>
                <li>
                    <strong>Name:</strong> {name} - {count} - {count_2}
                </li>
                <li>
                   <strong>Github:</strong> @furqanali945
                </li>
                <li><strong>Designation:</strong> Senior Web Developer</li>
            </ul>
        </div>
    )
}

export default UserCard;