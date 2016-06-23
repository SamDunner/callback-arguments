function findWaldo(arr, found) {
  for (var i = 0; i < arr.length; i++) {
    if (arr[i] == "Waldo") {
      var index = i;
      found(index);  // execute callback
    }
  }
}
function actionWhenFound(index) {
  console.log("His index is " + index + " , found him!");
}
findWaldo(["Alice", "Bob", "Waldo", "Winston"], actionWhenFound);
