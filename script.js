//your JS code here. If required.
function daysOfAYear(input){
if(input>=1 && input <=9999 ){
	if((input%4==0 && input%100!==0)||(input%400==0)){
		console.log(366);
	}
	else{
		console.log(365)
	}
}
else{
	console.log("invLID INPUT")
}}
	
}