
// swap in arrow function

let a=parseInt(prompt("Enter a A value"));

let b=parseInt(prompt("Enter a B value"));


let ans=()=>{
	
	let temp;
	
	temp=a;
	
	a=b;
	
	b=temp;
	
	return [a,b]
	
}
document.write(ans());