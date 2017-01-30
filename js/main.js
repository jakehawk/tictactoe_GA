console.log("connected");

var tableID;
var turnCount=0;
var x, y;
var logicArray = [
	[4, 5, 6],
	[9, 8, 7],
	[3, 11, 10]
];
var winnerFound = false;
var xWins=0, oWins=0;


//Add Click Logic
for (var i=1; i<4; i++){
	for(var j=1; j<4; j++){
		tableID = i+"_"+j;
		document.getElementById(tableID).onclick = function(){
			if (turnCount % 2 === 0 && this.innerHTML === "" && !winnerFound) {
				this.innerHTML = "X";
				turnCount++;
				x=this.getAttribute('id').charAt(0)-1;
				y=this.getAttribute('id').charAt(2)-1;
				logicArray[x][y] = 1;
			}
			else if (turnCount % 2 !== 0 && this.innerHTML === "" && !winnerFound){
				this.innerHTML = "O";
				turnCount++;
				x=this.getAttribute('id').charAt(0)-1;
				y=this.getAttribute('id').charAt(2)-1;
				logicArray[x][y] = 2;
			}
			checkWinner();
		}
	}
}

// Reset Button
document.getElementById('reset').onclick = function(){
	for(var i=0; i<=9; i++){
		document.getElementsByTagName('td')[i].innerHTML="";
		winnerFound = false;
		turnCount = 0;
		document.getElementsByTagName('h2')[0].innerHTML="";	
		logicArray = [
			[4, 5, 6],
			[9, 8, 7],
			[3, 11, 10]
		];
	}
	
}

// Function to check the winner
function checkWinner(){
	if (logicArray[0][0]===logicArray[0][1] && logicArray[0][0]===logicArray[0][2]){
		winnerFound = true;
		document.getElementsByTagName('h2')[0].innerHTML = document.getElementById('1_1').innerHTML+" is the winner!";
		winCount(xWins, oWins, document.getElementById('1_1').innerHTML);
	} else if (logicArray[1][0]===logicArray[1][1] && logicArray[1][0]===logicArray[1][2]) {
		winnerFound = true;
		document.getElementsByTagName('h2')[0].innerHTML = document.getElementById('2_1').innerHTML+" is the winner!";
		winCount(xWins, oWins, document.getElementById('2_1').innerHTML);
	} else if (logicArray[2][0]===logicArray[2][1] && logicArray[2][0]===logicArray[2][2]) {
		winnerFound = true;
		document.getElementsByTagName('h2')[0].innerHTML = document.getElementById('3_1').innerHTML+" is the winner!";
		winCount(xWins, oWins, document.getElementById('3_1').innerHTML);
	} else if (logicArray[0][0]===logicArray[1][0] && logicArray[1][0]===logicArray[2][0]) {
		winnerFound = true;
		document.getElementsByTagName('h2')[0].innerHTML = document.getElementById('1_1').innerHTML+" is the winner!";
		winCount(xWins, oWins, document.getElementById('1_1').innerHTML);
	} else if (logicArray[0][1]===logicArray[1][1] && logicArray[1][1]===logicArray[2][1]) {
		winnerFound = true;
		document.getElementsByTagName('h2')[0].innerHTML = document.getElementById('1_2').innerHTML+" is the winner!";
		winCount(xWins, oWins, document.getElementById('1_2').innerHTML);
	} else if (logicArray[0][2]===logicArray[1][2] && logicArray[1][2]===logicArray[2][2]) {
		winnerFound = true;
		document.getElementsByTagName('h2')[0].innerHTML = document.getElementById('1_3').innerHTML+" is the winner!";
		winCount(xWins, oWins, document.getElementById('1_3').innerHTML);
	} else if (logicArray[0][0]===logicArray[1][1] && logicArray[1][1]===logicArray[2][2]) {
		winnerFound = true;
		document.getElementsByTagName('h2')[0].innerHTML = document.getElementById('1_1').innerHTML+" is the winner!";
		winCount(xWins, oWins, document.getElementById('1_1').innerHTML);
	} else if (logicArray[0][2]===logicArray[1][1] && logicArray[1][1]===logicArray[2][0]) {
		winnerFound = true;
		document.getElementsByTagName('h2')[0].innerHTML = document.getElementById('1_3').innerHTML+" is the winner!";
		winCount(xWins, oWins, document.getElementById('1_3').innerHTML);
	} else if (turnCount === 9){
		document.getElementsByTagName('h2')[0].innerHTML = "Cats game!"
	}
}

function winCount(xWins, oWins, winner) {
	console.log(winner);
	if (winner === 'X') {
		xWins++;
		document.getElementById('xWins').innerHTML = "X: "+xWins+" wins";
	} else {
		oWins++;
		document.getElementById('oWins').innerHTML = "O: "+oWins+" wins";
	}
}