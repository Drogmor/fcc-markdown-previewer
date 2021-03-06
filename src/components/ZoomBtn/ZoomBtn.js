import { useEffect, useState } from "react";
import { HiZoomIn } from "react-icons/hi";
import { HiZoomOut } from "react-icons/hi";
import { Button } from "../Button";

export const ZoomBtn = ({ id, bg, onClick, color, size, fontSize }) => {
  const [clicked, setClicked] = useState(false);

  useEffect(() => {
    const el = document.getElementById(id);
    const mouseClickHandler = (event) => {
      setClicked((clicked) => !clicked);
    };
    if (el) {
      el.addEventListener("click", mouseClickHandler);
      return () => {
        el.removeEventListener("click", mouseClickHandler);
      };
    }
  }, [id, clicked]);

  return (
    <Button
      id={id}
      bg={bg}
      color={color}
      fontSize={fontSize}
      onClick={onClick}
      size={size}
    >
      {clicked ? <HiZoomOut /> : <HiZoomIn />}
    </Button>
  );
};
