function alternatingCharacters(s) {
  //split string
  const splitString = s.split("")
  //keep track of characters that need to be deleted
  let deletedCount = 0
  //assign pointers to the starting point in the array and the next value in the array
  let start = 0;
  let next = 1
//iterate through the array, if the value of start is equal to the value of next, we know we need to delete one so add to the deleted count
  while (next < splitString.length) {
    if (splitString[start] === splitString[next]) {
      deletedCount++
      start++
      next++
    } else {

      start++
      next++
    }
  }
  return deletedCount
}

alternatingCharacters("AAABBBAABB")