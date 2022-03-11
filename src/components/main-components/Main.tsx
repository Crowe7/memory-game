import React, {useState} from 'react'
import * as Characters from '../../ImageArray'
import { shuffleArray } from '../../utility';

export default function Main() {
    const [currScore, setCurrScore] = useState(0);
    const [maxScore, setMaxScore] = useState(0);
    const [layout, setLayout] = useState([]);
    const [guess, setGuess] = useState([]);

    // use effect hook for shuffling charaters in setLayout array... do this to have useeffect only go off once => |After the callback function put []. So you’ll have something like useEffect(() => {// some code here}, [])
    // reset function sets curr score and setguess both to 0
    // handle click checks if e is equal to any of the guess arrays .Name and if so call reset game, if not raise CurrScore and riase maxscore if its smaller, then add that guess to the array alawys shuffle after 
    // have an array in here that gets populated and  shuffled by the shuffle function on the use effect and onCLickm have this same array be used for concatting it onto the setGuess hook
    //check that by having a function that takes the character name and checks the array for the index with that name and whens its found concat it onto set guess, not only that

    const resetGame = () => {
        setCurrScore(0);
        setGuess([]);
    }
  return (
    <div>Main</div>
  )
}
