import { useEffect } from "react";
import { DarkModeStyles } from "./DarkModeToggler.styles";

const DarkMode = () => {

    const handleDarkMode = (event: { target: { checked: boolean | undefined; }; }) => {
        document.body.classList.toggle('dark-mode', event.target.checked);
    }

    useEffect(() => {
        
    }, [])

    return (
        <DarkModeStyles.Switch>
            <DarkModeStyles.Input type="checkbox" onChange={handleDarkMode} />
            <DarkModeStyles.Span></DarkModeStyles.Span>
        </DarkModeStyles.Switch> 
    )

}

export default DarkMode;