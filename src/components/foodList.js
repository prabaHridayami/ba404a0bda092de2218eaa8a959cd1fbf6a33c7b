import styled from "styled-components";
import Food from "./food";

const foods = [
  {
    title: "Ayam Goreng Serai",
    img: "https://kln.imgix.net/production/5UDJJOS97W-Savoury-2.jpg?w=700",
    merchant: "Kulina Savoury x Monsta Corner",
    price: 70000,
    review: 4.5,
    date: "2021-03-17",
  },
  {
    title: "Holycow Steak Set Wagyu Tenderloin",
    img:
      "https://kln.imgix.net/production/Holycow%20Steak%20Set%20Wagyu%20Tenderloin.jpg?w=700",
    merchant: "Steak Hotel By HOLYCOW!",
    price: 183000,
    review: 3.7,
    date: "2021-03-17",
  },
  {
    title: "Bundling, Kulit Ayam Krispy 130gr (3x)",
    img:
      "https://kln.imgix.net/production/ANGKRINGAN%20BABON%20JOGJA.jpeg?w=700",
    merchant: "Angkringan Babon",
    price: 133350,
    review: 4.5,
    date: "2021-03-18",
  },
  {
    title: "Tumpeng (45 cm)",
    img: "https://kln.imgix.net/production/tumpeng%20dpl.png?w=700",
    merchant: "Angkringan Babon",
    price: 900000,
    review: 4.0,
    date: "2021-03-18",
  },
];

const List = styled.div`
  margin-top: 64px;
`;

const ListDate = styled.p`
  padding: 0 16px;
  font-weight: 600;
`;

export default function FoodList() {
  return (
    <List>
      {foods.map((food, index) => {
        const newDate = new Date(food.date);
        const options = {
          weekday: "long",
          day: "2-digit",
          month: "long",
          year: "numeric",
        };

        return (
          <>
            {index === 0 && (
              <ListDate>
                {new Intl.DateTimeFormat("id-ID", options).format(newDate)}
              </ListDate>
            )}
            {index !== 0 && food.date !== foods[index - 1].date ? (
              <ListDate>
                {new Intl.DateTimeFormat("id-ID", options).format(newDate)}
              </ListDate>
            ) : (
              ""
            )}

            <Food
              key={food.title}
              title={food.title}
              img={food.img}
              merchant={food.merchant}
              price={food.price}
              review={food.review}
            />
          </>
        );
      })}
    </List>
  );
}
