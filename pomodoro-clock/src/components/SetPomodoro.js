import React, { useState } from "react";
import Button from "../components/Button";
import { SettingsContext } from "../context/SettingsContext";

const SetPomodoro = () => {
  const { updateExecute } = useContext(SettingsContext);

  const [newTimer, setNewTimer] = useState({
    work: 0.2,
    short: 0.1,
    long: 0.5,
    active: "work",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    switch (name) {
      case "work":
        setNewTimer({
          ...newTimer,
          work: parseInt(value),
        });
        break;
      case "shortBreak":
        setNewTimer({
          ...newTimer,
          short: parseInt(value),
        });
        break;
      case "longBreak":
        setNewTimer({
          ...newTimer,
          long: parseInt(value),
        });
        break;
      default:
        break;
    }
    console.log("newTimer");
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    updateExecute(newTimer);
  };

  return (
    <div className="form-container">
      <form noValidate onSubmit={handleSubmit}>
        <div className="input-wrapper">
          <input
            className="input"
            type="number"
            name="work"
            onChange={handleChange}
            value={newTimer.work}
          />
          <input
            className="input"
            type="number"
            name="shortBreak"
            onChange={handleChange}
            value={newTimer.short}
          />
          <input
            className="input"
            type="number"
            name="longBreak"
            onChange={handleChange}
            value={newTimer.long}
          />
        </div>
        <Button title="Set Timer" _callback={handleSubmit} />
      </form>
    </div>
  );
};

export default SetPomodoro;
