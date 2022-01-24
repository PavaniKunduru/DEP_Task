
//santaClausable interface

function isSantaClausable(obj) {
  // TODO
return ['sayHoHoHo', 'distributeGifts', 'goDownTheChimney'].every(meth => typeof obj[meth] === 'function');
     
}
//
var santa = {
    sayHoHoHo: function() { console.log('Ho Ho Ho!') },
    distributeGifts: function() { console.log('Gifts for all!'); },
    goDownTheChimney: function() { console.log('*whoosh*'); }
};

var notSanta = {
    sayHoHoHo: function() { console.log('Oink Oink!') }
    // no distributeGifts() and no goDownTheChimney()
};

isSantaClausable(santa); // must return TRUE
isSantaClausable(notSanta); // must return FALSE
