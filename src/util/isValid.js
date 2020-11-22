export function isValid(giver, receiver) {
  if (giver.name === receiver.name) {
    console.log('bad');
    return false;
  } else if (giver.group === receiver.group) {
    console.log('bad');
    return false;
  } else {
    console.log('good');
    return true;
  }
}