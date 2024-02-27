import React, { useReducer, useContext, Dispatch } from 'react'
import {
    ViewStateContext,
    ViewDispatchContext,
    Page,
    ViewState,
} from './context'
import ViewReducer, { initialViewState } from './reducer'
import { ViewAction } from './action'

interface ViewContextProviderProps {
    page?: Page
    children: React.ReactNode
}

export const useView = (): [ViewState, Dispatch<ViewAction>] => {
    const stateContext = useContext(ViewStateContext)
    const dispatchContext = useContext(ViewDispatchContext)
    if (stateContext === undefined || dispatchContext === undefined) {
        throw new Error('useView must be used within a ViewProvider')
    }
    return [stateContext, dispatchContext]
}

const ViewProvider = ({ children }: ViewContextProviderProps) => {
    const [view, dispatch] = useReducer(ViewReducer, initialViewState)
    return (
        <ViewStateContext.Provider value={view}>
            <ViewDispatchContext.Provider value={dispatch}>
                {children}
            </ViewDispatchContext.Provider>
        </ViewStateContext.Provider>
    )
}

export default ViewProvider
