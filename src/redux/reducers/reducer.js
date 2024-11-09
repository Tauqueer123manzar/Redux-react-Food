const INIT_STATE={
    carts:[]
};

export const cartreducer=(state=INIT_STATE,action)=>{
    switch(action.type){
        case "ADD_CART":

        // check if product is already exist in cart
        const existingProduct=state.carts.findIndex(
            (item)=>item.id === action.payload.id
        );

        if(existingProduct>=0){
           const updateCarts=state.carts.map((item,index)=>{
              index===existingProduct?{
                ...item,qnty:item.qnty+1
              }:item
           });
           return {...state,carts:updateCarts};
        }else{
            const newProduct = { ...action.payload, qnty: 1 };
            return { ...state, carts: [...state.carts, newProduct] };
        }
        default:
            return state
    }
}