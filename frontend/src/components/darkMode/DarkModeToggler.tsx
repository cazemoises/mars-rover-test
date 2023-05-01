import { useState } from "react";
import { DarkModeStyles } from "./DarkModeToggler.styles";

const DarkMode = () => {

    // Set the initial state of darkMode to the value stored in localStorage or false
    const [darkMode, setDarkMode] = useState(() => {
        const storedDarkMode = localStorage.getItem("dark-mode");
        return storedDarkMode !== null ? JSON.parse(storedDarkMode) : false;
    });

    // Add 'dark-mode' class to the body when darkMode is true
    darkMode && document.body.classList.add('dark-mode')

    // Handle changes in the toggle switch
    const handleDarkMode = (event: { target: { checked: boolean; }; }) => {
        const newDarkMode = event.target.checked;
        setDarkMode(newDarkMode);
        // Toggle 'dark-mode' class on the body when the toggle switch is clicked
        document.body.classList.toggle('dark-mode', newDarkMode);
        // Store the current value of darkMode in localStorage
        localStorage.setItem('dark-mode', JSON.stringify(newDarkMode));
    }

    return (
        <DarkModeStyles.Switch>
            <DarkModeStyles.Input type="checkbox" checked={darkMode} onChange={handleDarkMode} />
            <DarkModeStyles.Span></DarkModeStyles.Span>
        </DarkModeStyles.Switch> 
    )

}

export default DarkMode;
