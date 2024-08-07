import { useState } from "react";
import UserContextProvider from "./context/UserContextProvider";
import Login from "./components/Login";
import Profile from "./components/Profile";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    // 6: using context provider in a component
    <UserContextProvider>
      <h1>React is fun</h1>
      <Login />
      <Profile />
    </UserContextProvider>
  );
}

export default App;
