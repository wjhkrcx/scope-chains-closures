function foo(){
  var bar=3;
  quux=3;
  function zip(){
    var quux;
    bar=true;
  }
  return zip;
}
