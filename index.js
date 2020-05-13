$(document).ready(function() {
	function readyQuiz() {
	$("#quiz-box").hide();
	$("#quiz-end").hide();
	};//function
	readyQuiz();
	function startQuiz() {
	$("#quiz-start").hide();
	$("#quiz-box").show();
	addQuiz();
};//function
$("#quiz-start").on("click", startQuiz);
//click event
let quizBox= [{
	count: 1,
	question: "What is the official linux mascot?",
	choices: ["Charlie, the horse", "Daphne, the anteater", "Tux, the penguin", "George, the eagle"],
	solution: "Tux, the penguin"
}, {
	count:2,
	question: "What is the Linux killer app?",
	choices: ["Minesweeper", "Solitare", "Microsoft Word", "Apache Web Server"],
	solution: "Apache Web Server"
}, {
	count:3,
	question: "What makes Linux great for high-performance computing?",
	choices: ["Open source, and freedom of use", "Security and compatibility", "Community resources", "All of the above"],
	solution: "All of the above"
}, {
	count:4,
	question: "What percentage of the entire phone market runs on, Android, the largest Linux mobile operating system?",
	choices: ["49% or less", "50-75%", "76-90%", "91-100%"],
	solution: "76-90%"
}, {
	count:5,
	question: "How many different flavors/versions of linux exist?",
	choices: ["0-150", "150-300", "300-450", "450-600"],
	solution: "450-600"
}, {
	count:6,
	question: "Where is Linux used?",
	choices: ["kiosks, servers, mainframe computers, supercomputers", "phones, tablets, cars, rockets, aircraft, submarines", "smart appliances, robots, game consoles", "All of the above"],
	solution: "All of the above"
}];//array
let scoresBox = {
	true: 0,
	false: 0,
	count: 0,
	total: quizBox.length
};//object
$("#total").text(scoresBox.total);
$("#count, #true, #false").text(0);
//set to 0
function addQuiz(){
	$("#question").text(quizBox[scoresBox.count]["question"]);
let choicesBox = document.getElementsByClassName("choices-box");
 let getLabel = choicesBox[0].getElementsByTagName("LABEL");
 for (let i = 0; i < quizBox[scoresBox.count]["choices"].length; i++) {
 getLabel[i].innerHTML = quizBox[scoresBox.count]["choices"][i];
}//loop
	$("#count").text(quizBox[scoresBox.count]["count"]);
};//function
