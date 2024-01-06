import "./ToggleSwitch.css";
import { useState } from "react";
export default function ToggleSwitch({ label }) {
  const [isDark, setDark] = useState(false);
  const toggleDark = () => {
    setDark(!isDark);
    const html = document.getElementsByTagName("html")[0];
    console.log(html);
    html.classList.toggle("dark");
  };
  return (
    <>
      <div className="flex justify-end mb-5">
        <div className="toggle-switch">
          <input
            type="checkbox"
            className="checkbox"
            name={label}
            id={label}
            onClick={toggleDark}
          />
          <label className="label" htmlFor={label}>
            <span className="inner" />
            <span className="switch" />
          </label>
        </div>
      </div>
    </>
  );
}
