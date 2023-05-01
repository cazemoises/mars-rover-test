// Import necessary components and modules
import { ToastContainer } from "react-toastify";
import GlobalStyle from "./assets/GlobalStyle"; 
import Router from "./pages/routes/Router"; 
import DarkModeToggler from "./components/darkMode/DarkModeToggler"; 

const App = () => {
    return (
        <>
            <ToastContainer /> {/* Display feedback messages */}
            <GlobalStyle /> {/* Apply global CSS styles */}
            <Router /> {/* Define application routes */}
            <DarkModeToggler /> {/* Allow user to toggle light/dark mode */}
        </>
    )
}

export default App;