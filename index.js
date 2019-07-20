/* PROBLEM SET IN TECH INTERVIEW: 

  Say, for example, we now want the deli counter to assign each customer an individual number rather than use their name. How would you solve this new problem?
  
  EXPLANATION OF BELOW:
  
  To satisfy the new problem, UNCOMMENT lines (12-13, 22-28, 41-51, 63 AND 67) then comment out lines (15-20, 30-39, 62 AND 66). This should hopefully satisfy the new problem!
  
  Note: current uncommented solution satisfies DeliCounter.
*/

// var i = 1
// var numOfRemovals = 0

function takeANumber(katzDeliLine, name){
  katzDeliLine.push(name)
  var position = katzDeliLine.length 
  var welcomeMessage = `Welcome, ${name}. You are number ${position} in line.`
  return welcomeMessage
}
  
//   function takeANumber(katzDeliLine){
//   var position = i - numOfRemovals
//   katzDeliLine.push(i)
//   var welcomeMessage = `Welcome! Your number is ${i}. You are number ${position} in line.`
//   return welcomeMessage
//   i++
// }

function nowServing(katzDeliLine){
  if (katzDeliLine.length === 0){
    var nobodyWaiting = "There is nobody waiting to be served!"
    return nobodyWaiting
  } else {
    var serving = `Currently serving ${katzDeliLine[0]}.`
    katzDeliLine.shift()
    return katzDeliLine, serving
  }  
}
    
// function nowServing(katzDeliLine){
//   if (katzDeliLine.length === 0){
//     var nobodyWaiting = "There is nobody waiting to be served!"
//     return nobodyWaiting
//   } else {
//     var serving = `Currently serving number ${katzDeliLine[0]}.`
//     katzDeliLine.shift()
//     numOfRemovals++ 
//     return katzDeliLine, serving
//   }
// }

function currentLine(katzDeliLine){
  if (katzDeliLine.length === 0){
    var emptyLine = "The line is currently empty."
    return emptyLine
  } else {
    var lineString = "The line is currently: "
    var t = 0
    while (t < katzDeliLine.length){
      if (t === katzDeliLine.length - 1){
        lineString += `${t + 1}. ${katzDeliLine[t]}`
        // lineString += `Number ${katzDeliLine[t]}`
      t++
      } else {
        lineString += `${t + 1}. ${katzDeliLine[t]}, `
        // lineString += `Number ${katzDeliLine[t]}, `
      t++
      }
    } 
    return lineString
  }
}

/* Best Wishes, 
    
    Kane Stephens: hopeful applicant!

*/


