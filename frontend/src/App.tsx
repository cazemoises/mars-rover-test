import { ToastContainer } from "react-toastify";
import GlobalStyle from "./assets/GlobalStyle";

import Router from "./pages/routes/Router";
import DarkModeToggler from "./components/dark_mode/DarkModeToggler";
import Back from "./components/go_back/Back";

const App = () => {

    return (
        <>
            <Back />
            <ToastContainer />
            <GlobalStyle />
            <Router />
            <DarkModeToggler />  
        </>
    )

}

export default App;