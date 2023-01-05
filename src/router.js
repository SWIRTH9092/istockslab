import {createBrowserRouter, createRoutesFromElements, Route, Router} from "react-router-dom";
import App from "./App"
import Home from "./pages/Home"
import About from "./pages/About"
import Stock from "./pages/Stock"
import Dashboard from "./pages/Dashboard"
import { stockLoader } from "./stockloader"

// router for application
const router = createBrowserRouter (
    createRoutesFromElements (
        <Route path="/" element={<App/>}>
            <Route path="" element={<Home/>}/>
            <Route path="/about" element={<About/>}/>
            <Route path="/stocks" element={<Dashboard/>} />  
            <Route path="/Stock/:symbol" element={<Stock/>} loader={stockLoader} />
        </Route>
    )
)

export default router;
