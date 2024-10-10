import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import { Container, Row, Col, Dropdown, Button } from "react-bootstrap";

const Img = styled.img`
  width: 100%;
  /* height: 700px; */
  border-radius: 4px;
  margin-bottom: 10px;
  /* object-fit: cover;
  background-position: top; */
`;
const ProductDesc = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  font-size: 22px;
  padding: 10px;
`;
const ProductTitle = styled.div`
  font-weight: 600;
`;
const ProductPrice = styled.div`
  font-size: 18px;
`;
const ProductChoice = styled.div``;

const ProductDetail = () => {
  const [product, setProduct] = useState(null);
  const { id } = useParams();

  const getProductDetail = async () => {
    const url = `https://my-json-server.typicode.com/yerixx/Musinsa/products/${id}`;
    const response = await fetch(url);
    const data = await response.json();
    setProduct(data);
  };
  // console.log(id);

  const formttedPrice = new Intl.NumberFormat("ko-KR", {
    style: "currency",
    currency: "KRW",
  }).format(product?.price);

  useEffect(() => {
    getProductDetail();
  }, []);

  return (
    <Container>
      <Row>
        <Col>
          <Img src={product && product?.img} alt={product && product?.img} />
        </Col>
        <Col>
          <ProductDesc>
            <ProductTitle>상품명 : {product && product?.title}</ProductTitle>
            <ProductPrice>상품가격 : {product && formttedPrice}</ProductPrice>
            <ProductChoice>
              {product && product?.choice ? "Conscious choice" : ""}
            </ProductChoice>
            <Dropdown>
              <Dropdown.Toggle variant="outline-dark" id="dropdown-basic">
                Size
              </Dropdown.Toggle>

              <Dropdown.Menu>
                {product &&
                  product?.size.length > 0 &&
                  product?.size.map((item, index) => (
                    <Dropdown.Item key={index} href={`#/${index}`}>
                      {item}
                    </Dropdown.Item>
                  ))}
              </Dropdown.Menu>
            </Dropdown>
            <Button variant="secondary">장바구니</Button>
            <Button variant="dark">상품결제</Button>
          </ProductDesc>
        </Col>
      </Row>
    </Container>
  );
};

export default ProductDetail;
