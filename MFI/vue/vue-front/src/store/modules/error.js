export default {
    state:{
        validations:{}
    },
    mutations:{
        setValidationError(state,error){
            state.validations=error;
        }
    }
}
