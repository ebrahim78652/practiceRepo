export function MyComp({ welcomeString, setName }) {
  console.log("MyComp Function ran");

  const changeName = (event) => {
    setName(event.target.value);
  };

  return (
    <div className="container">
      <input type="text" onChange={changeName} />
      <div>{welcomeString}</div>
    </div>
  );
}
