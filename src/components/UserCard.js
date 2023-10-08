const UserCard = ({name}) => {
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

export default UserCard;