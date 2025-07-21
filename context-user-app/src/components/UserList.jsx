import React, { useContext } from "react";
import { UserContext } from "../context/UserContext";
import AddUserForm from "./AddUserForm"; 

const UserList = () => {
    const { users } = useContext(UserContext);

    return (
        <div>
            <h2>Користувачі:</h2>
            <ul>
                {users.map((user) => (
                    <li key={user.id}>{user.name}</li>
                ))}
            </ul>
            <AddUserForm />
        </div>
    );
};

export default UserList;