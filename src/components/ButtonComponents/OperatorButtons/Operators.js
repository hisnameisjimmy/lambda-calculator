import React, {useState} from "react";
import OperatorButton from "./OperatorButton.js"

//import any components needed

//Import your array data to from the provided data file
import { operators } from '../../../data.js';

const Operators = (props) => {
  // STEP 2 - add the imported data to state
  const [buttonOp] = useState(operators);
  return (
    <div>
      {/* STEP 3 - Use .map() to iterate over your array data and return a button
       component matching the name on the provided file. Pass
       it any props needed by the child component*/}
       {buttonOp.map((element) => {
        return <OperatorButton text={element.char} value={element.value}/>
      })}
    </div>
  );
};

export default Operators;