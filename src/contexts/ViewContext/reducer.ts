import { ViewAction } from './action'
import { ViewState } from './context'

export const initialViewState: ViewState = {
    page: 'pdf',
}

const ViewReducer = (
    state: ViewState = initialViewState,
    action: ViewAction
): ViewState => {
    switch (action.type) {
        case 'CHANGE_PAGE':
            return {
                ...action.payload,
            }
        default:
            return state
    }
}

export default ViewReducer
