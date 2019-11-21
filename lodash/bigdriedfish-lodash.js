var bigdriedfish = (function (){
  function chunk(ary, size) {
    let res = []
    for (let i = 0; i < ary.length; i += size) {
        res.push(ary.slice(i, i + size))
    }
    return res
  }
  function compact(array) {
    let surplus = []
    for (let i = 0; i < array.length; i++) {
      if (array[i]) {
        surplus.push(array[i])
      }
    }
    return surplus
  }
  function different(array, [values]) {
    
  }
 
  return {
    chunk,
    compact,
    concat
  }
}) ();

