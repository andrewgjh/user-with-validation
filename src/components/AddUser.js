import { useState } from "react";
import styles from "./AddUser.module.css";

const AddUser = ({ onAdd, showError, setErrorMessage }) => {
  const [usernameInput, setUserNameInput] = useState("");
  const [ageInput, setAgeInput] = useState("");
  const onUsernameChangeHandler = e => {
    setUserNameInput(e.target.value);
  };
  const onAgeChangeHandler = e => {
    setAgeInput(e.target.value);
  };

  const submitHandler = e => {
    e.preventDefault();
    if (!usernameInput.trim().length || !ageInput.trim().length) {
      setErrorMessage("Username and Age Field must both be filled out.");
      showError(true);
      return;
    }
    if (parseInt(ageInput) < 0) {
      setErrorMessage("You cannot be a negative age.");
      showError(true);
      return;
    }
    onAdd(prev => [
      ...prev,
      { id: Math.random(), username: usernameInput, age: ageInput },
    ]);
    setAgeInput("");
    setUserNameInput("");
  };

  return (
    <section className={styles.section_add_age}>
      <form className={styles.add_age_form} onSubmit={submitHandler}>
        <label>Username</label>
        <input
          type="text"
          value={usernameInput}
          onChange={onUsernameChangeHandler}
        ></input>
        <label>Age(Years)</label>
        <input
          type="number"
          onChange={onAgeChangeHandler}
          value={ageInput}
        ></input>
        <button type="submit">Add User</button>
      </form>
    </section>
  );
};

export default AddUser;
