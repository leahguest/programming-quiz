var prompt = require('prompt-sync')();

var questions = [
	{
		text: "What is the correct HTML for referring to an external style sheet?",
		answer: [
			'<style src="mystyle.css">',
			'<stylesheet>mystyle.css</stylesheet>',
			'<link rel="stylesheet" type="text/css" href="mystyle.css">'
		],
		correct: 2

	},
	{
		text: "Which CSS property controls the text size?",
		answer: [
			'font-style',
			'font-size',
			'text-style',
			'text-size'
		],
		correct: 1
	},
	{
		text: "How do you display hyperlinks without an underline?",
		answer: [
			'a {underline: none;}',
			'a {text-decoration: no-underline;}',
			'a {decoration: no-underline;}',
			'a {text-decoration: none;}'
		],
		correct: 3
	},
	{
		text: "How do you select all p elements inside a div element?",
		answer: [
			'div.p',
			'div p',
			'div + p'
		],
		correct: 1
	},
	{
		text: "What is the default value of the position property?",
		answer: [
			'fixed',
			'relative',
			'static',
			'absolute'
		],
		correct: 2
	},
	{
		text: "Choose the correct HTML element for the largest heading:",
		answer: [
			'<h1>',
			'<head>',
			'<heading>',
			'<h6>'
		],
		correct: 0
	},
	{
		text: "What combinator below is used for selecting direct descendants?",
		answer: [
			'+',
			'~',
			'.',
			'>'
		],
		correct: 3
	},
	{
		text: "The following unit represents 100% of the font-size of its parent element.",
		answer: [
			'%',
			'em',
			'rem',
			'vh'
		],
		correct: 1
	},
	{
		text: "What does CSS stand for?",
		answer: [
			'Carrot Slicing System',
			'Correlated Service Spoon',
			'Canvas Styling Service',
			'Cascading Style Sheets'
		],
		correct: 3
	},
	{
		text: "What does 'var' stand for in JavaScript?",
		answer: [
			'variation',
			'variance',
			'variable',
			'varsity'
		],
		correct: 2
	},
	{
		text: "How does a while loop start?",
		answer: [
			'while (i <= 10; i++)',
			'while (i <= 10)',
			'while i = 1 to 10'
		],
		correct: 1
	},
	{
		text: "How do you call a function named 'myFunction'?",
		answer: [
			'myFunction()',
			'call function myFunction()',
			'call myFunction()'
		],
		correct: 0
	},
	{
		text: "How does a for loop start?",
		answer: [
			'for (i <=5; i++)',
			'for (i = 0; i <=5; i++)',
			'for (i = 0; i <=5)',
			'for i = 1 to 5'
		],
		correct: 1
	},
	{
		text: "JavaScript is the same as Java.",
		answer: [
			'True',
			'False'
		],
		correct: 1
	},
	{
		text: "Which operator is used to assign a value to a variable?",
		answer: [
			'*',
			'-',
			'=',
			':'
		],
		correct: 2
	}


];

var answer;
var totalCorrect = 0;
// var date = new Date();
var start = new Date().getTime();


for (var i = 0; i < questions.length; i++) {
	console.log(questions[i].text);
	for (var j = 0; j < questions[i].answer.length; j++) {
		console.log(questions[i].answer[j]);
	}
	answer = prompt('What is your answer?');
	if (answer.toLowerCase() === questions[i].answer[questions[i].correct].toLowerCase()) {
		console.log('Correct!');
		totalCorrect += 1;
	} else {
		console.log('Wrong! The correct answer is ' + questions[i].answer[questions[i].correct])
	}
}

var end = new Date().getTime();
var difference = end - start
var seconds = difference / 1000
var minute = seconds / 60

var grade = totalCorrect / questions.length * 100



console.log('You got ' + totalCorrect + ' questions correct. Your grade is ' + grade + '%!');
if (grade >= 70) {
	console.log('Great! You passed!');
} else {
	console.log('Maybe you should study some more.')
}
console.log('This quiz took you ' + minute + ' minutes.');
