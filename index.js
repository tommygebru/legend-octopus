$(document).ready(function() {
			function readyQuiz() {
				$("#quiz-box").hide();
				$("#quiz-end").hide();
			}; //function
			readyQuiz();

			function startQuiz() {
				$("#quiz-start").hide();
				$("#quiz-box").show();
				addQuiz();
			}; //function
			$("#quiz-start").on("click", startQuiz);
			//click event
			let quizBox = [{
				count: 1,
				question: "What is the official linux mascot?",
				choices: ["Charlie, the horse", "Daphne, the anteater", "Tux, the penguin", "George, the eagle"],
				solution: "Tux, the penguin"
			}, {
				count: 2,
				question: "What is the Linux killer app?",
				choices: ["Minesweeper", "Solitare", "Microsoft Word", "Apache Web Server"],
				solution: "Apache Web Server"
			}, {
				count: 3,
				question: "What makes Linux great for high-performance computing?",
				choices: ["Open source, and freedom of use", "Security and compatibility", "Community resources", "All of the above"],
				solution: "All of the above"
			}, {
				count: 4,
				question: "What percentage of the entire phone market runs on, Android, the largest Linux mobile operating system?",
				choices: ["49% or less", "50-75%", "76-90%", "91-100%"],
				solution: "76-90%"
			}, {
				count: 5,
				question: "How many different flavors/versions of linux exist?",
				choices: ["0-150", "150-300", "300-450", "450-600"],
				solution: "450-600"
			}, {
				count: 6,
				question: "Where is Linux used?",
				choices: ["kiosks, servers, mainframe computers, supercomputers", "phones, tablets, cars, rockets, aircraft, submarines", "smart appliances, robots, game consoles", "All of the above"],
				solution: "All of the above"
			}]; //array
			let scoresBox = {
				true: 0,
				false: 0,
				count: 0,
				total: quizBox.length
			}; //object
			$("#total").text(scoresBox.total);
			$("#count, #true, #false").text(0);//set to 0
 			function addQuiz() {
				$("#question").text(quizBox[scoresBox.count]["question"]);
				let choicesBox = document.getElementsByClassName("choices-box");
				let getLabel = choicesBox[0].getElementsByTagName("LABEL");
				for (let i = 0; i < quizBox[scoresBox.count]["choices"].length; i++) {
					getLabel[i].innerHTML = quizBox[scoresBox.count]["choices"][i];
				} //loop
				$("#count").text(quizBox[scoresBox.count]["count"]);
				$("form").on("click", "div", function(event){
					$(event.target).closest("input").attr("checked");
				});
			}; //function
			$("#nextButton").hide();//hide button
			$(".choices-box").on("click", "#submitButton", function(event) {
					event.preventDefault();
					$("#submitButton").hide();
					$("#nextButton").show();
					$("#solution").text(quizBox[scoresBox.count]["solution"]);
					if ($("input:checked").next().text() === quizBox[scoresBox.count]["solution"]) {
						scoresBox.true++;
						$("#true").text(scoresBox.true);
						$(".scores-box .solution").css("background", "#20c200");
					} else {
						scoresBox.false++;
						$("#false").text(scoresBox.false);
						$(".scores-box .solution").css("background", "orangered");
					}
				}); //click event
				$(".choices-box").on("click", "#nextButton", function(event) {
					event.preventDefault();
					$(".scores-box .solution").css("background", "#ffa927");
					if ((scoresBox.count + 1) === scoresBox.total) {
						$("#quiz-box").hide();
						$("#quiz-end").show();
						$("#finalScore").text(`FINAL SCORE:  ${Math.floor((100*scoresBox.true)/scoresBox.total)} %`);
					} else {
						scoresBox.count++;
						$("#nextButton").hide();
						$("#submitButton").show();
						$("#question, #solution").text("");
						addQuiz();
					}
				}); //click event
				$("#quiz-end").on("click", "#restartButton", function() {
					location.reload();
					readyQuiz();
				}); //click event
			}); //READY
