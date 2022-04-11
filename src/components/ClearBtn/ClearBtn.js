import { HiTrash } from "react-icons/hi";
import { Button } from "../Button";

export const ClearBtn = ({ id, bg, onClick, color, size, fontSize, type }) => {
  return (
    <Button
      id={id}
      bg={bg}
      color={color}
      fontSize={fontSize}
      onClick={onClick}
      size={size}
      type={type}
    >
      <HiTrash />
    </Button>
  );
};
