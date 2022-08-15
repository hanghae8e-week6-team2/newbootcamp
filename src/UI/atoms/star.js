import { useState } from "react";
import { FaStar } from "react-icons/fa";
import styled from "styled-components";
const Star = () => {
  const [hovered, setHovered] = useState(null);
  const [clicked, setClicked] = useState(null);
  const textList = [
    "별로에요",
    "그저 그래요",
    "보통이에요",
    "좋아요",
    "최고예요",
  ];
  return (
    <Div>
      <div>
        <p>이 글을 평가해주세요</p>
        {[1, 2, 3, 4, 5].map((x) => {
          return (
            <p key={x} show={hovered === x}>
              {textList[x - 1]}
            </p>
          );
        })}
      </div>
      <div>
        {[1, 2, 3, 4, 5].map((x) => (
          <FaStar
            className={(clicked >= x) | (hovered >= x) && "red"}
            key={x}
            onMouseEnter={() => {
              setHovered(x);
            }}
            // onMouseLeave={() => setHovered(null)}
            onClick={() => {
              setClicked(x);
              console.log(clicked);
            }}
          />
        ))}
      </div>
    </Div>
  );
};
export default Star;
const Div = styled.div`
  .red {
    color: red;
  }
`;
