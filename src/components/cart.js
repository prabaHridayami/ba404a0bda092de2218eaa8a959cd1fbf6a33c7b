import NumberFormat from "react-number-format";
import styled from "styled-components";

const CartWrapper = styled.div`
  position: sticky;
  display: grid;
  place-items: center start;
  grid-auto-flow: column;
  bottom: 16px;
  background: #a23530;
  color: #fff;
  margin: 0 8px;
  padding: 8px 16px;
  border-radius: 10px;
  -webkit-box-shadow: 0px 8px 10px 0px rgba(10, 31, 68, 0.1);
  box-shadow: 0px 8px 10px 0px rgba(10, 31, 68, 0.1);

  p {
    margin: 0;
    &:last-child {
      margin-top: 4px;
      font-size: 12px;
    }
  }
`;

const Icons = styled.div`
  margin-left: auto;
`;

export default function Cart({ totalPrice, totalItem }) {
  return (
    <CartWrapper>
      <div>
        <p>
          <strong>
            {totalItem} {totalItem > 1 ? "Items" : "Item"}
          </strong>
          &nbsp; | &nbsp;
          <strong>
            <NumberFormat
              value={totalPrice}
              displayType={"text"}
              thousandSeparator={true}
              prefix={"Rp "}
            />
          </strong>
        </p>
        <p>Termasuk ongkos kirim</p>
      </div>
      <Icons>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="white"
          width="24px"
          height="24px"
        >
          <path d="M0 0h24v24H0V0z" fill="none" />
          <path d="M15.55 13c.75 0 1.41-.41 1.75-1.03l3.58-6.49c.37-.66-.11-1.48-.87-1.48H5.21l-.94-2H1v2h2l3.6 7.59-1.35 2.44C4.52 15.37 5.48 17 7 17h12v-2H7l1.1-2h7.45zM6.16 6h12.15l-2.76 5H8.53L6.16 6zM7 18c-1.1 0-1.99.9-1.99 2S5.9 22 7 22s2-.9 2-2-.9-2-2-2zm10 0c-1.1 0-1.99.9-1.99 2s.89 2 1.99 2 2-.9 2-2-.9-2-2-2z" />
        </svg>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="white"
          width="24px"
          height="24px"
        >
          <path d="M0 0h24v24H0V0z" fill="none" />
          <path d="M8.59 16.59L13.17 12 8.59 7.41 10 6l6 6-6 6-1.41-1.41z" />
        </svg>
      </Icons>
    </CartWrapper>
  );
}
