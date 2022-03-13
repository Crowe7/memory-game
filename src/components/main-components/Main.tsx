import React, {useEffect, useState} from 'react';
import * as Characters from '../../ImageArray';
import { shuffleArray, CharacterData } from '../../utility';
import { CharCards } from './CharCards';

export default function Main() {
    const [currScore, setCurrScore] = useState(0);
    const [maxScore, setMaxScore] = useState(0);
    const [layout, setLayout] = useState<CharacterData[]>([]);
    const [guess, setGuess] = useState<string[]>([]); // setGuess(prevState => [...prevState, newElement]);

    // use effect hook for shuffling charaters in setLayout array... do this to have useeffect only go off once => |After the callback function put []. So you’ll have something like useEffect(() => {// some code here}, [])
    // handle click checks if e is equal to any of the guess arrays .Name and if so call reset game, if not raise CurrScore and riase maxscore if its smaller, then add that guess to the array alawys shuffle after 
    // have an array in here that gets populated and  shuffled by the shuffle function on the use effect and onCLickm have this same array be used for concatting it onto the setGuess hook
    //check that by having a function that takes the character name and checks the array for the index with that name and whens its found concat it onto set guess, not only that

    useEffect(() => {
        let charArr:CharacterData[] = Characters.Characters;
        setLayout(shuffleArray(charArr));
    }, []);

    const handleClick = (e:any) => {
        let name:string = '';
        if(e.target.alt === undefined) {
            name = e.target.innerText;
        } else {
            name = e.target.alt;
        }

        if(checkIfValidGuess(name) === false) {
            if(maxScore < currScore) {
                setMaxScore(currScore);
            }
            resetGame();
        } else {
            setCurrScore(currScore + 1);
            if(maxScore < currScore + 1) {
                setMaxScore(currScore + 1);
            }
            addGuess(name);
            let charArr:CharacterData[] = layout;
            setLayout(shuffleArray(charArr));
        }
    }
    const addGuess = (charName:string) => {
        setGuess(prevState => [...prevState, charName]);
    }
    const checkIfValidGuess = (charName:string) => {
        for (let index of guess) {
            if(index === charName) {
                return false
            }
        }
        return true

    }

    const resetGame = () => {
        setCurrScore(0);
        setGuess([]);
    }
  return (
    <CharCards layout={layout} handleClick={handleClick}/>
  )
}
