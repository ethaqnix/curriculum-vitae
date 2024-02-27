import { Dispatch, createContext } from 'react'
import { initialViewState } from './reducer'
import { ViewAction } from './action'

export type Page = 'history' | 'music'

export interface ViewState {
    page: Page
}

export const ViewStateContext = createContext<ViewState>(initialViewState)
export const ViewDispatchContext = createContext(
    {} as unknown as Dispatch<ViewAction>
)
