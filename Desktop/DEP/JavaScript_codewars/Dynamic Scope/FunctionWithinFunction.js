//A function within a function

function always (n) {
return ()=> n;
}

var three = always(3);
three(); // returns 3
