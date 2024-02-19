interface Props {
  onClick: () => void;
}

function SaveButton({ onClick }: Props) {
  return (
    <button className="btn btn-outline-success" onClick={onClick}>
      Save
    </button>
  );
}

export default SaveButton;
