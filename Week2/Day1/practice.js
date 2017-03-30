var glazedDonuts = [
  {
    frosting: 'glazed',
    style: 'cake',
    type: 'old fashioned',
    age: '45',
    time: 'minutes'
  },
  {
    frosting: 'glazed',
    style: 'yeast raised',
    type: 'regular',
    age: '5',
    time: 'minutes'
  },
  {
    frosting: 'glazed',
    style: 'yeast raised',
    type: 'jelly filled',
    age: '1',
    time: 'seconds'
  }
];
var numPurchase = 0;
for (var donut in glazedDonuts) {
  if((glazedDonuts[donut].age < 25 && glazedDonuts[donut].time == 'minutes') || glazedDonuts[donut].time == 'seconds'){
    numPurchase = numPurchase+1;
  }
  else {
    console.log("i don't want this donut...");
  }
}
console.log(numPurchase);