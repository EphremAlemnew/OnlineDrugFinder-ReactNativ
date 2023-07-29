export const pharmacy_id=(state=null,action)=>{
    switch(action.type){
        case 'pharmacy_ID':
            return action.payload
        default:
            return state
    }
}

export const U_ID=(state=null,action)=>{
    switch(action.type){
        case 'U_ID':
            return action.payload
        default:
            return state
    }
}
export const first=(state=null,action)=>{
    switch(action.type){
        case 'First':
            return action.payload
        default:
            return state
    }
}
export const last=(state=null,action)=>{
    switch(action.type){
        case 'Last':
            return action.payload
        default:
            return state
    }
}
export const cartItem=(state=null,action)=>{
    switch(action.type){
        case 'cart':
            return action.payload
        default:
            return state
    }
}