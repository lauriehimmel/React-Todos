function JSPractice(props) {
  console.log(props);
  // props -> { key: value }
  // keys -> at the parent level
  // values -> at the parent level

  // locally scope "state" -> local data used by the component
  const string = "Joshua Smith";

  const bestNumber = 3;
  const randomNumber = Math.floor(Math.random() * 100);
  const favColors = ["ghost whisperer", "purple", "teal"];
  const favoritePerson = {
    name: "Luna",
    age: "18months",
    isAlwaysHungry: true
  };
  function repeatString(str, num) {
    return str.repeat(num);
  }

  let numMessage;
  if (bestNumber === 37) {
    numMessage = <p>Awesome</p>;
  } else {
    numMessage = <p>Booo!!!!</p>;
  }

  return (
    <div>
      <li>Random Number: {randomNumber}</li>
      <li>String: {repeatString(string, bestNumber)}</li>
      <li>Number: {bestNumber}</li>
      <li>
        Booleans, null, & undefined: {true && "happy"}
        {null || "friend"}
        {undefined || "!!!"}
      </li>
      {/* Ternary Statements return some value*/}
      {/* 1. JS conditional ?  */}
      {/* 2. Desired value -> "heads" */}
      {/* 3. Separator :  */}
      {/* 4. Default value -> "tails" */}
      <li>{randomNumber <= 50 ? "Heads" : "Tails"}</li>

      {/* do if else statements work in JSX */}
      {numMessage}
      <li>Fav Colors Variable: {favColors.join(", ")}</li>
      {favoritePerson.isAlwaysHungry ? <h3>"NOM NOM NOM"</h3> : null}
    </div>
  );
}

export default JSPractice;
