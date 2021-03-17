import styled from "styled-components";
import NumberFormat from "react-number-format";
import StarRatings from "react-star-ratings";

import { useDispatch } from "react-redux";
import { sumPrice, sumItem } from "../actions";

const Container = styled.div`
  width: 90%;
  background: #fff;
  margin: 16px auto;
  border-radius: 10px;
  -webkit-box-shadow: 0px 8px 10px 0px rgba(10, 31, 68, 0.1);
  box-shadow: 0px 8px 10px 0px rgba(10, 31, 68, 0.1);
  img {
    width: 100%;
  }

  h5 {
    margin: 0;
  }
`;

const FeaturedImage = styled.div`
  background: url(${(props) => props.background});
  border-radius: 10px 10px 0 0;
  background-position: center;
  background-size: cover;
  width: 100%;
  height: 300px;

  background-repeat: no-repeat;
  content: "";
`;

const Details = styled.div`
  padding: 16px;
  p {
    margin: 0;
    font-size: 12px;
  }

  h3 {
    font-size: 20px;
    margin: 4px 0;
  }

  h4 {
    margin: 0;
  }
`;

const Footer = styled.div`
  display: grid;
  grid-auto-flow: column;
  place-items: center start;
  font-size: 20px;
  margin: 16px 0 0;
`;

const AddButton = styled.button`
  background: #f9423a;
  border: none;
  color: #fff;
  font-weight: 600;
  border-radius: 8px;
  padding: 4px 16px;
  margin-left: auto;
  display: grid;
  grid-auto-flow: column;
  place-items: center;
`;

const Rating = styled(StarRatings)`
  z-index: -1;
`;

export default function Food({ title, img, merchant, price, review }) {
  const dispatch = useDispatch();

  const addToCart = () => {
    dispatch(sumPrice(price));
    dispatch(sumItem(1));
  };
  return (
    <Container>
      <FeaturedImage background={img}></FeaturedImage>
      <Details>
        <h4>
          {review} &nbsp;
          <Rating
            rating={review}
            starRatedColor="#f9423a"
            starDimension="16px"
            starSpacing="2px"
            numberOfStars={5}
            name="rating"
          />
        </h4>
        <h3>{title}</h3>
        <p>{merchant}</p>
        <Footer>
          <h5>
            <NumberFormat
              value={price}
              displayType={"text"}
              thousandSeparator={true}
              prefix={"Rp "}
            />
          </h5>
          <AddButton onClick={addToCart}>
            ADD
            <span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="white"
                width="24px"
                height="24px"
              >
                <path d="M0 0h24v24H0z" fill="none" />
                <path d="M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z" />
              </svg>
            </span>
          </AddButton>
        </Footer>
      </Details>
    </Container>
  );
}
