import React from "react";
import { Navigate, useNavigate } from "react-router-dom";
import styled from "styled-components";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 6px;
  padding: 20px;
  cursor: pointer;
`;
const Img = styled.img`
  width: 300px;
  border-radius: 4px;
  margin-bottom: 10px;
`;

const ProductCard = ({ item }) => {
  // console.log(item);
  const navigate = useNavigate();
  const formttedPrice = new Intl.NumberFormat("ko-KR", {
    style: "currency",
    currency: "KRW",
  }).format(item.price);

  const showDetail = () => {
    navigate(`products/${item.id}`);
  };
  return (
    <Wrapper onClick={showDetail}>
      <Img src={item && item?.img} />
      <div>Conscious Choice</div>
      <div>{item && item?.title}</div>
      <div>{item && formttedPrice}</div>
      <div>{item && item?.new === true ? "신제품" : "이벤트 상품"}</div>
    </Wrapper>
  );
};

export default ProductCard;
