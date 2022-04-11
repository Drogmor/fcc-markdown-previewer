import { useEffect, useState } from "react";
import { HiOutlinePlusSm } from "react-icons/hi";
import { HiOutlineMinusSm } from "react-icons/hi";
import { Button } from "../Button";

export const ResizeBtn = ({ id, bg, onClick, color, size, fontSize }) => {
  const [clicked, setClicked] = useState(false);

  useEffect(() => {
    const el = document.getElementById(id);
    const mouseClickHandler = (event) => {
      console.log(clicked);
      setClicked((clicked) => {
        return !clicked;
      });
    };
    if (el) {
      el.addEventListener("click", mouseClickHandler);
      return () => {
        el.removeEventListener("click", mouseClickHandler);
      };
    }
  }, [clicked, id]);
  return (
    <Button
      id={id}
      bg={bg}
      color={color}
      fontSize={fontSize}
      onClick={onClick}
      size={size}
    >
      {clicked ? <HiOutlineMinusSm /> : <HiOutlinePlusSm />}
    </Button>
  );
};
