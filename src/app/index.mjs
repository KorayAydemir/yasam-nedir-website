import '../css/index.css'
import { Route } from 'react-router-dom'
import { Routes } from 'react-router-dom'

import Landing from './infrastructure/views/landing/index.mjs'
import Yasambilim from './infrastructure/views/yasambilim/index.mjs'
import Layout from './infrastructure/layout/index.mjs'

const App = () => {
    return (
        <Routes>
            <Route path="/" element={<Landing />} />
            <Route element={<Layout />}>
                <Route path="/yasambilim" element={<Yasambilim />} />
            </Route>
        </Routes>
    )
}
export default App
