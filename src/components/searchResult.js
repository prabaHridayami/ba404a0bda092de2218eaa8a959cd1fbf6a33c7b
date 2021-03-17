import styled from "styled-components";
const Result = styled.div`
  display: grid;
  grid-auto-flow: column;
  place-items: center start;
  padding: 8px 0;

  svg {
    margin: 8px;
    padding: 4px;
    border-radius: 50%;
    background: #f1f1f2;
  }
`;

const Details = styled.div`
  border-bottom: 1px solid #e2e4e4;
  padding: 8px 0;

  p {
    margin: 0;

    &:first-child {
      font-weight: 600;
    }
    &:last-child {
      font-size: 12px;
    }
  }
  .address {
    display: -webkit-box;
    -webkit-line-clamp: 1;
    -webkit-box-orient: vertical;
    overflow: hidden;
  }
`;
export default function SearchResult({
  location,
  address,
  changeLocation,
  closeModal,
}) {
  const onClick = () => {
    changeLocation();
    closeModal();
  };
  return (
    <Result onClick={onClick}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="#6e7679"
        width="18px"
        height="18px"
      >
        <path d="M0 0h24v24H0z" fill="none" />
        <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" />
      </svg>

      <Details>
        <p className="location">{location}</p>
        <p className="address">{address}</p>
      </Details>
    </Result>
  );
}
