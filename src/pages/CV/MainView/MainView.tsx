import React from 'react'
import History from './History'
import MusicPreview from './MusicPreview'
import PDFPreview from './PDFPreview'
import { Route, Routes } from 'react-router-dom'

const MainView = () => {
    return (
        <Routes>
            <Route path="/" element={<History />} />
            <Route path="/music" element={<MusicPreview />} />
            <Route path="/preview" element={<PDFPreview />} />
        </Routes>
    )
}

export default MainView
