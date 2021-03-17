import { useState } from "react";
import styled from "styled-components";

import Result from "./searchResult";
import { useDispatch } from "react-redux";
import { changeLocation } from "../actions";

const Addresses = [
  {
    location: "Kulina",
    address:
      "Gedung Kulina, Jl. Tulodong Atas No.28, RT.6/RW.3, Senayan, Kec. Kby. Baru, Kota Jakarta Selatan, Daerah Khusus Ibukota Jakarta 12190",
  },
  {
    location: "Pt Bali Kulina Utama",
    address:
      "Jl. Pendidikan No.117, Sidakarya, Kec. Denpasar Sel., Kota Denpasar, Bali 80224",
  },
  {
    location: "Gojek",
    address:
      "Pasaraya Blok M Gedung B Lt. 6, Jl. Iskandarsyah II No.7, RT.3/RW.1, Melawai, Kec. Kby. Baru, Kota Jakarta Selatan, Daerah Khusus Ibukota Jakarta 12160",
  },
  {
    location: "Shopee Indonesia",
    address:
      "Pacific Century Place Tower Lt. 26 SCBD (Sudirman Central Business District) Lot 10, Jl. Jend. Sudirman No.52-53, RT.5/RW.3, Senayan, Kec. Kby. Baru, Kota Jakarta Selatan, Daerah Khusus Ibukota Jakarta 12190",
  },
  {
    location: "Senayan City",
    address:
      " Jl. Asia Afrika No.19, RT.1/RW.3, Gelora, Kecamatan Tanah Abang, Kota Jakarta Pusat, Daerah Khusus Ibukota Jakarta 10270",
  },
  {
    location: "Beachwalk Shopping Center",
    address: "Jl. Pantai Kuta, Kuta, Kabupaten Badung, Bali 80361",
  },
];

const ModalContent = styled.div`
  padding: 0 16px;
`;

const ModalHeader = styled.div`
  position: sticky;
  top: 16px;
  background: #fff;
  h3 {
    margin: 16px 0;
  }
`;

const SearchField = styled.input`
  position: relative;
  display: inline-block;
  border-radius: 5px;
  padding: 8px 0;
  width: 90%;
  border: 1px solid #6e7679;
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='%23f9423a' width='18px' height='18px'%3E%3Cpath d='M0 0h24v24H0z' fill='none'/%3E%3Cpath d='M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z'/%3E%3C/svg%3E");
  background-repeat: no-repeat;
  background-position: 7px 7px;
  padding-left: 30px;
  margin-right: -30px;
`;

const SearchResult = styled.div`
  overflow-y: auto;
`;

export default function SearchModal({ closeModal }) {
  const [input, setInput] = useState("");
  const [addresslist, setAddresslist] = useState(Addresses);
  const updateInput = async (value) => {
    if (value !== "") {
      const filtered = Addresses.filter((address) => {
        return address.location.toLowerCase().includes(value.toLowerCase());
      });
      setInput(value);
      setAddresslist(filtered);
    } else {
      setAddresslist(Addresses);
    }
  };
  const dispatch = useDispatch();
  return (
    <ModalContent>
      <ModalHeader>
        <h3>Cek makanan yang tersedia dilokasi kamu!</h3>
        <SearchField
          input={input}
          onChange={(e) => updateInput(e.target.value)}
        />
      </ModalHeader>
      {addresslist && (
        <SearchResult>
          {addresslist.map((item) => {
            return (
              <Result
                key={item.location}
                location={item.location}
                address={item.address}
                changeLocation={() => dispatch(changeLocation(item.location))}
                closeModal={closeModal}
              />
            );
          })}
        </SearchResult>
      )}
    </ModalContent>
  );
}
