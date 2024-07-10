const arr = [1, 2, 3, 4, 1, 0, 2, 2];

const sum = (arr) => arr.reduce((a, b) => a + b, 0);

const divide = (arr, n) => {
	let result = [];
	let subArray = [];
	arr.forEach((item) => {
		subArray.push(item);
		if(sum(subArray) > n){
			result.push(subArray.slice(0,-1));
			subArray = [item];
		}
	})
	if(subArray.length > 0){ 
		result.push(subArray);
	}
return result;
};
console.log(divide(arr, 5))
// console.log(divide([4, 3, 2, 1], 4));
// const n = prompt("Enter n: ");
// alert(JSON.stringify(divide(arr, n)));
