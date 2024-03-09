import { Dispatch, createContext } from 'react'
import { initialViewState } from './reducer'
import { ViewAction } from './action'

export type Page = 'history' | 'music' | 'pdf'

export interface DefaultViewState {
    page: Page
}

export interface MusicViewState extends DefaultViewState {
    page: 'music'
    additionnalData: {
        musicUrl: string
        title: string
    }
}

export interface HistoryViewState extends DefaultViewState {
    page: 'history'
    additionnalData?: {}
}

export interface PDFViewState extends DefaultViewState {
    page: 'pdf'
    additionnalData?: {}
}

export type ViewState = HistoryViewState | MusicViewState | PDFViewState

export const ViewStateContext = createContext<ViewState>(initialViewState)
export const ViewDispatchContext = createContext(
    {} as unknown as Dispatch<ViewAction>
)
