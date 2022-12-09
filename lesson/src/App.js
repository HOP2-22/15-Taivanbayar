import logo from "./logo.svg";
import "./App.css";
import _, { differenceBy, differenceWith, intersection, intersectionBy } from "lodash";

function App() {
  const myArray = [1, 2, 3];
  const mySecArray = [1, 2, 4];

  let products = [
    { product: "banana", hasGMO: true },
    { product: "apple", hasGMO: false },
    { product: "orange", hasGMO: false },
  ];
  const secondValue = _.differenceBy(
    products,
    [{ product: "banana", hasGMO: true }],
    "product",
    "hasGMO"
  );
  const myMassive = [4, 2, 1];
  const a = [2, 4, 3, 9, 7, 4, 5];
  const b = [2, 4, 5, 6];

  const products2 = {
    apple: { hasGMO: false },
    banana: { hasGMO: true },
    orange: { hasGMO: false },
  };


  return (
    <div className="App">
      <div>1 : {_.difference(myArray, mySecArray)} </div>
      <div>2: {JSON.stringify(secondValue)}</div>
      <div>3: {JSON.stringify(_.dropRightWhile(products, ["hasGMO", false]))}</div>
      <div>4: {JSON.stringify(_.fill(myMassive, "0"))}</div>
      <div>5: {JSON.stringify(_.intersection(a, b))}</div>
      <div>6: {JSON.stringify([1,1,1,1,2,2,2,3,3,4,4,5,5], [2,2,2,2,1,1,1,2,3])}</div>
      <div>7: {JSON.stringify(_.xor([1,1,1,1,2,2,2,3,3,4,4,5,5], [2,2,2,2,1,1,1,2,3]))}</div>
      <div>8: {JSON.stringify(_.isEqual(2, '2'))}</div>
      <div>9: {JSON.stringify(_.max([1,1,1,1,2,2,2,3,3,4,4,5,5]))}</div>
      <div>10: {JSON.stringify(_.sum([1,1,1,1,2,2,2,3,3,4,4,5,5]))}</div>
      <div>11: {JSON.stringify(_.sample([1,1,1,1,2,2,2,3,3,4,4,5,5]))}</div>
      <div>12: {JSON.stringify(_.merge({'haha': 7}, {'hoho': 2}))}</div>
      <div>13: {JSON.stringify(_.findKey(products2, 'hasGMO', true))}</div>
      <div>14: {JSON.stringify(_.keys(products2))}</div>
    </div>
  );
}

export default App;
