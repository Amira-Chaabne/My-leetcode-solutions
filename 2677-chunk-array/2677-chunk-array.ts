var chunk = function(arr: number[], size: number):number[][] | number[] | [] {
    // edge cases
  if(arr.length === 0) return arr
  
  let res: number[][] = []
  let chunk: number[] = []
  
  for(let a of arr){
    if(chunk.length === size){
      res.push(chunk)
      chunk = []
    }
    chunk.push(a)
  }
  if(chunk) res.push(chunk)
  return res
};