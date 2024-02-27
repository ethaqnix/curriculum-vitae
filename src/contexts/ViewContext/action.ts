import { ViewState } from './context'

export interface IChangePage {
    type: 'CHANGE_PAGE'
    payload: ViewState
}

export const changePage = (newPage: ViewState): IChangePage => ({
    type: 'CHANGE_PAGE',
    payload: newPage,
})

export type ViewAction = IChangePage
