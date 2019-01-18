var bigdriedfish = function() {
  function chunk(ary, size) {
    let res = []
    for (let i = 0; i < arr.length; i += size) {
        res.push(arr.slice(i, i + size))
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
  




  reuturn {
    chunk: chunk,
    compact: compact,
  }



}()

