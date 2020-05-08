$(document).ready(function() {
	function readyQuiz() {
	$("#quiz-box").hide();
	$("#quiz-end").hide();
	};//function
	readyQuiz();
	function startQuiz() {
	$("#quiz-start").hide();
	$("#quiz-box").show();
};//function
$("#quiz-start").on("click", startQuiz);
});//function
