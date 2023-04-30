import { useEffect, useState } from "react";
import { DarkModeStyles } from "./DarkModeToggler.styles";

const DarkMode = () => {

    const [darkMode, setDarkMode] = useState(() => {
        const storedDarkMode = localStorage.getItem("dark-mode");
        return storedDarkMode !== null ? JSON.parse(storedDarkMode) : false;
    });

    darkMode && document.body.classList.add('dark-mode')

    const handleDarkMode = (event: { target: { checked: boolean; }; }) => {
        const newDarkMode = event.target.checked;
        setDarkMode(newDarkMode);
        document.body.classList.toggle('dark-mode', newDarkMode);
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
