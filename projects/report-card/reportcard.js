var ordinals = ["first", "second", "third", "fourth"];
var classnames = []
var specialDesignations = []

initializeClasses();

var averages = []
initalizeAverages();

var letterGrades = ["A", "B", "C", "D", "F"];
var honorsGPA = [4.4, 3.3, 2.2, 1.1, 0];
var APgpa = [5, 4, 3, 2, 0];
var regGPA = [4, 3, 2, 1, 0];

var classGrades = []
getLetterGrades()
msg = "Your GPA is " + getGPA();
document.write("<h1>" + msg + "</h1>");
alert(msg);




function average() {
	if (arguments.length === 0) {return 0}
	let sum = 0;
	for (var i = 0; i < arguments.length; i++) {
  	sum += arguments[i];
  }
  return (sum/(arguments.length));
}

function initializeClasses() {
	for(var i = 0; i <= 3; i++) {
  	classnames.push(prompt("What is the name of your " + ordinals[i] + " class?"));
   	let tempAP = prompt("If " + classnames[i] + " is an AP class, say 'yes', otherwise type anything besides 'yes'.").toLowerCase(); 
    let isAP = (tempAP === "yes") ? true : false;
    if (isAP) { 
    	specialDesignations.push("AP");
      document.write("<p>" + classnames[i] + " is an AP class" + "</p>")
    } else { 
    	let tempHnrs = prompt("If " + classnames[i] + " is an Honors class, say 'yes', otherwise type anything besides 'yes'.").toLowerCase();
      let isHnrs = (tempHnrs === "yes") ? true : false;
      if (isHnrs) { 
      	specialDesignations.push("Honors");
        document.write("<h3>" + classnames[i] + " is an Honors class" + "</h3>");
      } else { 
      	specialDesignations.push("None"); 
        document.write("<h3>" + classnames[i] + " is a normal class" + "</h3>");
      }
    }
    
  }
}

function getTestAverage(classname) {
  let test1 = Number(prompt("What was your first test grade in " + classname + "?"));
  document.write("<p>" + classname + " test1: " + test1 + "</p>");
	
  let test2 = Number(prompt("What was your second test grade in " + classname + "?"));
  document.write("<p>" + classname + " test2: " + test2 + "</p>");
	
  let test3 = Number(prompt("What was your third test grade in " + classname + "?"));
  document.write("<p>" + classname + " test3: " + test3 + "</p>");
  
  let test4 = Number(prompt("What was your fourth test grade in " + classname + "?"));
  document.write("<p>" + classname + " test4: " + test4 + "</p>");
  
  return average(test1, test2, test3, test4);
} 

function initalizeAverages(classname) {
	for (var i = 0; i<=3; i++) {
  	let tmpavg = getTestAverage(classnames[i])
    document.write("<h2>" + classnames[i] + " average: " + tmpavg + "</h2>");
    averages.push(tmpavg);
  }
}

function getLetterGradeKey(num) { 
	if (num >= 93) {
  	return 0;
  } else if (num >= 85) {
  	return 1;
  } else if (num >= 77) {
  	return 2;
  } else if (num >= 70) {
  	return 3;
  } else {
  	return 4;
  }
}

function getLetterGrades() {
	for (var i = 0; i <= 3; i++) {
  	grade = getLetterGradeKey(Math.round(averages[i]));
    document.write("<p>" + "You have a " + letterGrades[grade] + " in " + classnames[i] + "</p>");
    classGrades.push(grade);
  }
}

function getGPA() { 
	let sum = 0;
	for(var i = 0; i <= 3; i++) {
  	switch(specialDesignations[i]) {
    	case "AP": 
      	sum += APgpa[classGrades[i]];
        document.write("<h4>" + classnames[i] + " has " + APgpa[classGrades[i]] + " on the AP scale." + "</h4>");
        break;
     	case "Honors":
      	sum += honorsGPA[classGrades[i]];
        document.write("<h4>" + classnames[i] + " has " + honorsGPA[classGrades[i]] + " on the honors scale." + "</h4>");
        break;
      case "None": 
      	sum += regGPA[classGrades[i]];
        document.write("<h4>" + classnames[i] + " has " + regGPA[classGrades[i]] + " on the regular scale." + "</h4>");
        break;
    }
  }
	return sum/4;
}