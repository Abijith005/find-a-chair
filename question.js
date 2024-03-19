function getChairs(rooms, required) {
  if (required <= 0) {
    return 1;
  }
  let res = [];
  for (const room of rooms) {
    const [occupied, chairs] = room;
    const vaccant = chairs - occupied.length;
    res.push(vaccant);
    if ((required -= vaccant) <= 0) {
      break;
    }
  }
  if (required) {
    return 0;
  }
  return res;
}

const rooms = [
  ["XXX", 3],["XXXXX", 6],["XXXXXX", 9],["XX", 2]];
const required = 1;
let vaccantChairs = getChairs(rooms, required);

console.log(vaccantChairs);
