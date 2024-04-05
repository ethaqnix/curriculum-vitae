import AppContainer from '@pages/AppContainer'

import './App.module.scss'
import './i18n'
import { Suspense } from 'react'
import { Route, Routes, useOutlet } from 'react-router-dom'
import MusicPreview from '@pages/CV/MainView/MusicPreview'
import PDFPreview from '@pages/CV/MainView/PDFPreview'
import History from '@pages/CV/MainView/History'

function App() {
    return (
        <Suspense fallback={<div>Loading... </div>}>
            <Routes>
                <Route path="/" element={<AppContainer />}>
                    <Route path="*" element={<History />} />
                    <Route path="/music" element={<MusicPreview />} />
                    <Route path="/preview" element={<PDFPreview />} />
                </Route>
            </Routes>
        </Suspense>
    )
}

export default App
