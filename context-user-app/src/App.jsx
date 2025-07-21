import React from "react";
import { UserProvider } from "./context/UserContext";
import UserList from "./components/UserList";

function App() {
    return (
        <UserProvider>
            <div style={{ padding: 20 }}>
                <h1>Контекст: Список користувачів</h1>
                <UserList />
            </div>
        </UserProvider>
    );
}

export default App;
