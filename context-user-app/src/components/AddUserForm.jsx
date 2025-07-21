import React, { useState, useContext } from "react";
import { UserContext } from "../context/UserContext";

const AddUserForm = () => {
    const { addUser } = useContext(UserContext);
    const [name, setName] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        if (name.trim()) {
            addUser(name);
            setName("");
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <h3>Додати користувача:</h3>
            <input
                type="text"
                placeholder="Ім’я"
                value={name}
                onChange={(e) => setName(e.target.value)}
            />
            <button type="submit">Додати</button>
        </form>
    );
};

export default AddUserForm;
