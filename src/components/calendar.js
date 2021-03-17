import { useState } from "react";
import styled from "styled-components";

const DateList = styled.div`
  position: sticky;
  top: 64px;
  background: #fff;
  display: flex;
  overflow-x: auto;
  padding-bottom: 8px;
  z-index: 999;
  padding-left: 8px;
`;

const Day = styled.div`
  display: grid;
  place-items: center;
  padding: 8px 16px;

  height: 30px;
  width: 30px;
  border-radius: 999rem;
  transition: 1s all;
  cursor: pointer;
  p {
    margin: 0;
    font-size: 9px;
    font-weight: 700;
  }

  &.active {
    background-color: #424749;
    color: #ffffff;
  }

  &.disabled {
    color: #f1f1f2;
    cursor: default;
  }
`;

export default function Calendar() {
  const [active, setActive] = useState(0);

  const handleOnClick = (index, el) => {
    if (el.parentNode.classList.contains("disabled") === false) {
      setActive(index);
    }
  };

  const Dates = [];
  let curDate = new Date();
  curDate.setDate(curDate.getDate() - 1);
  for (let day = 0; day < 15; day++) {
    curDate.setDate(curDate.getDate() + 1);
    const weekday = new Intl.DateTimeFormat("id-ID", {
      weekday: "short",
    })
      .format(curDate)
      .toLocaleUpperCase();
    const date = curDate.getDate();
    Dates.push({ weekday, date });
  }

  return (
    <DateList>
      {Dates.map((day, index) => {
        let weekend = "";
        if (day.weekday === "MIN") {
          weekend = "disabled";
        } else if (day.weekday === "SAB") {
          weekend = "disabled";
        }

        return (
          <Day
            onClick={(event) => {
              handleOnClick(index, event.target);
            }}
            key={day.date}
            className={`${weekend} ${active === index ? "active" : ""}`}
          >
            <p>{String(day.weekday)}</p>
            <p>{String(day.date)}</p>
          </Day>
        );
      })}
    </DateList>
  );
}
