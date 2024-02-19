interface Props {
  onClick: () => void;
}

function SearchButton({ onClick }: Props) {
  return (
    <button className="btn btn-outline-success" onClick={onClick}>
      Search
    </button>
  );
}

export default SearchButton;
