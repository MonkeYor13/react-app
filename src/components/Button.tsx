import { ReactNode } from "react";

type Props = {
  children: ReactNode;
  isLoding?: boolean;
  onClick: () => void;
};

function Button({ children, isLoding, onClick }: Props) {
  return (
    <button
      disabled={isLoding}
      onClick={onClick}
      type="button"
      className={`btn btn-${isLoding ? 'secondary' : 'primary'}` }
    >
      {isLoding ? "Cargando..." : children}
    </button>
  );
}

export default Button;
