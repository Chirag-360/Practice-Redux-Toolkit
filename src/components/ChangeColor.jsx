import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { changeColor } from "../feature/theme";

export const ChangeColor = () => {
  const dispatch = useDispatch();
  const [color, setColor] = useState("blue");
  //   const handleChangeColor = (e) => {
  //     setColor(e.target.value);
  //   };
  return (
    <div>
      <input
        onChange={(e) => {
          setColor(e.target.value);
        }}
        type="text"
      />
      <button
        onClick={() => {
          dispatch(changeColor(color));
        }}
      >
        ChangeColor
      </button>
    </div>
  );
};
