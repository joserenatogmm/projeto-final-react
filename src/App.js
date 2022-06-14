import Header from "./components/Header";
import Menu from "./components/Menu";
import Main from "./components/Main";
import {BrowserRouter} from "react-router-dom";

function App() {
    return (
        <div>
            <Header></Header>
            <BrowserRouter>
                <Menu></Menu>
                <Main></Main>
            </BrowserRouter>
        </div>
    )
}

export default App;
