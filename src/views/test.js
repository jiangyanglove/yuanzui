var scope = 'global scope';
function checkscope () {
  var scope = 'local scope'
  function need () {
    var scope = 'need scope'
    return scope
  }
  return need()
}
console.log(checkscope())