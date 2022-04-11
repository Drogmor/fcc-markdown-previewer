import { useEffect, useState } from "react";
import { HiOutlinePlus, HiOulineMinus } from "react-icons/hi";
import { Button } from "../Button";

export const ResizeBtn = ({ id, bg, onClick, color, size, fontSize }) => {
  const [clicked, setClicked] = useState(false);

  useEffect(() => {
    const el = document.getElementById(id);
    const mouseClickHandler = (event) => {
      console.log(clicked);
      setClicked((clicked) => !clicked);
    };
    if (el) {
      el.addEventListener("click", mouseClickHandler);
      return () => {
        el.removeEventListener("click", mouseClickHandler);
      };
    }
  }, [clicked]);
  return (
    <Button
      id={id}
      bg={bg}
      color={color}
      fontSize={fontSize}
      onClick={onClick}
      size={size}
    >
      {clicked ? <HiOulineMinus /> : <HiOutlinePlus />}
    </Button>
  );
};
