const getProduct = (searchQuery) => {
  return async (dispatch) => {
    const url = `https://my-json-server.typicode.com/ParkTH-Dev/shoppingmall/products?q=${searchQuery}`;
    const response = await fetch(url);
    const data = await response.json();

    // reducer에 보내는 타입 정의
    dispatch({ type: "GET_PRODUCT_SUCESS", payload: { data } });
  };
};

export const productAction = { getProduct };
