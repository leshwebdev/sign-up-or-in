function ErrMsg(props) {
  return (
    <span className="form-text text-danger">
      {props.errors.map((error, index) => (
        <div key={index}>{error}</div>
      ))}
    </span>
  );
}

export default ErrMsg;
