import { Page } from './context'

export interface IChangePage {
    type: 'CHANGE_PAGE'
    payload: Page
}

export const changePage = (newPage: Page): IChangePage => ({
    type: 'CHANGE_PAGE',
    payload: newPage,
})

export type ViewAction = IChangePage
