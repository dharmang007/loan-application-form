/**
 * @author Chinmay Vadgama
 * @
 */
import ActionsConstants from '../constants/actionsConstants';

export default{
    saveBasicDetails: (payload) => {
        return {
            type: ActionsConstants.SAVE_BASIC_DETAILS,
            payload: payload
        }
    },
    submitLoanApplication:() => {
        return{
            type: ActionsConstants.SUBMIT_LOAN_APPLICATION
        }
    }
    // Keep adding more actions here...
}