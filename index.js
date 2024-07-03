// code your solution here
// functions.js

// Function to return a string with Saturday activity
function saturdayFun(activity = "roller-skate") {
    return `This Saturday, I want to ${activity}!`;
  }
  
  // Function to return a string with Monday work
  function mondayWork(work = "go to the office") {
    return `This Monday, I will ${work}.`;
  }
  
  // Function to return a function that adds visual flair to an adjective
  function wrapAdjective(flair = "*") {
    return function(adjective = "special") {
      return `You are ${flair}${adjective}${flair}!`;
    };
  }
  
  module.exports = {
    saturdayFun,
    mondayWork,
    wrapAdjective
  };
  