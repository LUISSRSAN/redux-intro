const initialStateCustomer = {
    fullName:'',
    nationalID:"",
    createdAt:"",
    }
    
    
    
   export default  function customerReducer(state=initialStateCustomer,action){
        switch (action.type){
            case 'customer/createCustomer':
                return {
    ...state,
    fullName:action.payload.fullName,
    nationalID:action.payload.nationalID,
    createdAt:action.payload.createdAt
                }
            case 'customer/updateName':
                return {
    
                ...state,
                fullName:action.payload
                };
            default : return state;
        }
    
    }
    
    
    
    
    
    //pass event as type and update state 
    
    
    //const ACCOUNT_DEPOSIT = "account/deposit";
    
    ;
    
    
    // action creators 
    export function createCustomer(fullName,nationalID){
        return{
            type : 'customer/createCustomer',payload :{fullName,nationalID,createdAt: new Date().toISOString()},
    
    
        }
    }
    
    export function updateName(fullName){
    return {type:'account/updateName',payload:{fullName}};
    }
    