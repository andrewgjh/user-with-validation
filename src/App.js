import logo from "./logo.svg";
import "./App.css";
import AddUser from "./components/AddUser";
import { useState } from "react";
import UsersList from "./components/UsersList";
import ErrorModal from "./components/ErrorModal";

function App() {
  const [users, setUsers] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  return (
    <div className="App">
      <AddUser
        onAdd={setUsers}
        showError={setShowModal}
        setErrorMessage={setErrorMessage}
      />
      <UsersList users={users} />
      {showModal && (
        <ErrorModal showError={setShowModal}>{errorMessage}</ErrorModal>
      )}
    </div>
  );
}

export default App;
