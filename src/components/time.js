import { useState, useEffect } from "react";
import styled from "styled-components";
import { mediaQueries } from "../styles/_mediaQueries";
import { debounce } from "../utilities/helpers";

const TimeList = styled.div`
  position: fixed;
  display: grid;
  grid-auto-flow: column;
  text-align: center;
  margin-top: -1px;
  top: 119px;
  padding: 8px;
  background: #fff;
  width: 96%;
  transition: top 0.6s;
  z-index: 0;
  border-top: 1px solid #f1f1f2;

  .navbar--hidden {
    top: -50px;
  }

  @media ${mediaQueries.md} {
    display: inline-flex;
    justify-content: center;
  }

  h4 {
    margin: 0;
    padding: 8px 0;
  }
`;

const Item = styled.div`
  border-color: ${(props) => (props.active ? "#424749" : "f1f1f2")};
  border-width: 2px;
  border-style: solid;
  background: ${(props) => (props.active ? "#424749" : "transparent")};
  color: ${(props) => (props.active ? "#ffffff" : "#f1f1f2")};

  transition: 1 all;
  -webkit-transition: background-color 200ms linear;
  -ms-transition: background-color 200ms linear;
  transition: background-color 200ms linear;

  &.lunch {
    border-radius: 5px 0 0 5px;
    border-right: ${(props) => (props.active ? "2px solid #424749" : "none")};
  }

  &.dinner {
    border-radius: 0 5px 5px 0;
    border-left: ${(props) => (props.active ? "2px solid #424749" : "none")};
  }

  &:hover {
    cursor: pointer;
  }

  @media ${mediaQueries.md} {
    padding: 0 64px;
  }
`;

export default function Time() {
  const [lunchActive, setLunchActive] = useState(true);
  const [dinnerActive, setDinnerActive] = useState(false);
  const [prevScrollPos, setPrevScrollPos] = useState(0);
  const [visible, setVisible] = useState(true);

  const setActive = (param) => {
    if (param === "lunch") {
      setDinnerActive(false);
      setLunchActive(true);
    } else {
      setDinnerActive(true);
      setLunchActive(false);
    }
  };

  const handleScroll = debounce(() => {
    const currentScrollPos = window.pageYOffset;

    setVisible(
      (prevScrollPos > currentScrollPos &&
        prevScrollPos - currentScrollPos > 0) ||
        currentScrollPos < 10
    );

    setPrevScrollPos(currentScrollPos);
  }, 100);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, [prevScrollPos, visible, handleScroll]);

  return (
    <TimeList style={{ top: visible ? "119px" : "-119px" }}>
      <Item
        onClick={() => {
          setActive("lunch");
        }}
        active={lunchActive}
        className="lunch"
      >
        <h4>Lunch</h4>
      </Item>
      <Item
        onClick={() => {
          setActive("dinner");
        }}
        active={dinnerActive}
        className="dinner"
      >
        <h4>Dinner</h4>
      </Item>
    </TimeList>
  );
}
