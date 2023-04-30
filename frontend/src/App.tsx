import { ToastContainer } from "react-toastify";
import GlobalStyle from "./assets/GlobalStyle";

import Router from "./pages/routes/Router";
import DarkModeToggler from "./components/dark_mode/DarkModeToggler";

const App = () => {
    
    return (
        <>
            <ToastContainer />
            <GlobalStyle />
            <Router />
            <DarkModeToggler />  
        </>
    )

}

export default App;