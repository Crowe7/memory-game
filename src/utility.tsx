
export interface CharacterData {
    url: string;
    Name: string;
}

function shuffleArray(unshuffledArr:CharacterData[]) {
    let shuffled = unshuffledArr
        .map(value => ({value, sort: Math.random() }))
        .sort((a,b) => a.sort - b.sort)
        .map(({value}) => value);
    return shuffled
}

export {shuffleArray}
