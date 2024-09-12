function fibonacci(num) {
// your code here
	if(num===1)
	{
		return 0;
	}
	else if(num===2)
	{
		return 1;
	}
	else{
		let var1 = 0;
		let var2 = 1;
		let fibonacci=0;
		for(let i=3;i<=num;i++)
			{
				fibonacci = var2+i;
				var2 = fibonacci;
			}
		return fibonacci;
	}
	
}

module.exports = fibonacci;
