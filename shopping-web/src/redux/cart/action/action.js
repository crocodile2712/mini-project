

export function actionCartIncrease (payload){
    return {
        type:"increaseCartItem",
        payload
    }
}
export function actionCartDecrease (payload){
    return {
        type:"decreaseCartItem",
        payload
    }
}
export function ActionCartChange (payload){
    return {
        type:"cartChange",
        payload
    }
}
export function ActionWishChange (payload){
    return {
        type:"wishChange",
        payload
    }
}
export function emptyCart (){
    return {
        type:"emptyCart",
    }
}
export function actionAddCart (payload){
    return {
        type:"addCart",
        payload
    }
}
export function actionWishList (payload){
    return {
        type:"actionWishList",
        payload
    }
}