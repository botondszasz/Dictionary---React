interface Props {
  children: string;
  onClick: () => void;
}

function Button({ children, onClick }: Props) {
  return (
    <button className="btn btn-outline-success" onClick={onClick}>
      {children}
    </button>
  );
}

export default Button;
