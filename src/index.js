
// You should implement your task here.

module.exports = function towelSort (matrix) {
	if(arguments.length == 0 || matrix.length==0){
		return [];
	}else{
		let result = [];
		matrix.forEach(function(array, i) {
			if(i == 0 || i%2==0 ){
				array.forEach(function(item) {
					result.push(item);
				});
			}else{
				let a = [];
				array.forEach(function(item) {
					a.unshift(item);
				});
				a.forEach(function(item) {
					result.push(item);
				});
			}
		});
		return result;
	}
}

