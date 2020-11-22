import names from './nameData';
import { isValid } from './isValid';

export function generate() {
  let isPossible = true;
  let namesList = [...names];
  let pairs = [];
  console.log(namesList);
  const getRandom = () => {
    return namesList[Math.floor(Math.random() * namesList.length)];
  }
  
  names.map(giver => {
    let count = 0;
    let receiver = getRandom();
    while (!isValid(giver, receiver) && count < 6) {
      receiver = getRandom();
      count++;
    }
    if (count > 4) {
      isPossible = false;
    }
    const index = namesList.findIndex(name => { return name === receiver});
    console.log(index);
    namesList.splice(index, 1);
    return pairs.push([giver.name, receiver.name]);
  })

  return isPossible && pairs;
}