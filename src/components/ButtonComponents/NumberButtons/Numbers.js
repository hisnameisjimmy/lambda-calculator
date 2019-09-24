import React, {useState} from "react";
import NumberButton from "./NumberButton.js"

//import any components needed
// example of import from data.js. Note all the ../   This is how we move through folders. 
/* 
import { numbers } from '../../../data' 
*/
//Import your array data to from the provided data file

import { numbers } from '../../../data.js';

const Numbers = (props) => {
  console.log(props);
  // STEP 2 - add the imported data to state
  const [buttonNumber] = useState(numbers);
  // const numberArray = numbers.map((element) => {
  //   return <NumberButton text={element} />
  // });
  return (
    <div>
      {/* STEP 3 - Use .map() to iterate over your array data and return a button
       component matching the name on the provided file. Pass
       it any props needed by the child component*/}
       {buttonNumber.map((element) => {
        return <NumberButton text={element} />
      })}
    </div>
  );
};

export default Numbers;