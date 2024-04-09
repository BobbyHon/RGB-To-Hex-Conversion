function rgb(r, g, b) {
    let arr = [r,g,b]
  
  for (let i = 0; i < arr.length; i++){
    arr[i] = !isNaN(arr[i]) && parseInt(arr[i]) < 0 ? '00' : arr[i]
    arr[i] = !isNaN(arr[i]) && parseInt(arr[i]) > 255 ? 'ff' : arr[i]
  }
  
  arr[0] = arr[0].toString(16).length > 1 ? arr[0].toString(16) : '0' + arr[0].toString(16)
  arr[1] = arr[1].toString(16).length > 1 ? arr[1].toString(16) : '0' + arr[1].toString(16)
  arr[2] = arr[2].toString(16).length > 1 ? arr[2].toString(16) : '0' + arr[2].toString(16)
  
  return arr[0].toUpperCase() + arr[1].toUpperCase() + arr[2].toUpperCase()
}