export const pharmacyId=(name)=>{
    return {
        type:'pharmacy_ID',
        payload: name
    }
}

export const ID=(n)=>{
    return {
        type:'U_ID',
        payload: n
    }
}
export const Fname=(na)=>{
    return {
        type:'First',
        payload: na
    }
}
export const Lname=(nam)=>{
    return {
        type:'Last',
        payload: nam
    }
}
export const cartItems=(c)=>{
    return {
        type:'cart',
        payload: c
    }
}