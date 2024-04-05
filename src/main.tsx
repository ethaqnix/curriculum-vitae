import React from 'react'
import ReactDOM from 'react-dom'

import './i18n'

import App from './App'

import { createBrowserRouter, RouterProvider } from 'react-router-dom'

import('@axe-core/react').then(({ default: axe }) => {
    axe(React, ReactDOM, 1000)
})

const router = createBrowserRouter([
    {
        path: '/curriculum-vitae/*',
        element: <App />,
    },
])

ReactDOM.render(
    <React.StrictMode>
        <RouterProvider router={router} />
    </React.StrictMode>,
    document.getElementById('root')
)
