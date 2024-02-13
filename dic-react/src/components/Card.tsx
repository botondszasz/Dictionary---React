import InputGroup from "./InputGroup";

function Card() {
  return (
    <div className="card mb-3">
      <h5 className="card-header text-bg-success">Dictionary</h5>
      <div className="card-body d-grid gap-2">
        <InputGroup></InputGroup>
      </div>
    </div>
  );
}

export default Card;
