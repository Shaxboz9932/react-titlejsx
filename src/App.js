import { BrowserRouter, Routes, Route } from "react-router-dom"
import Home from "./pages/Home"
import Tour from './pages/Tour'
import SearchAppBar from "./components/AppBar"
import { useStoreTour } from "./state/State"

function App () {

    const {tours} = useStoreTour()

    return (
        <BrowserRouter>
            <SearchAppBar/>
            <Routes>
                <Route path='/' element={<Home/>}/>
                <Route path=':id' element={<Tour item={tours} />}/>
            </Routes>
        </BrowserRouter>
    )
}

export default App