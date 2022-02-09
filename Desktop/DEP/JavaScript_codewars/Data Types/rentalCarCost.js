// Transportation on vacation

function rentalCarCost(d) {
  // Your solution here
  let day = d >=3  && d<7 ? 20:0,  //day discount
    week = d >= 7 ? 50 : 0 ;  // week discount
  return (d*40) - day - week;
}
rentalCarCost(3);
