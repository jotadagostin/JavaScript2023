// switch and case

let points = 5;

switch (points) {
  case 1:
    console.log("first place");
    break;
  case 2:
    console.log("second place");
    break;
  case 3:
    console.log("third place");
    break;
  case 4:
  case 5:
  case 6:
    console.log("award of participation!");
    break;
  default:
    console.log("didnt make podium");
    break;
}
