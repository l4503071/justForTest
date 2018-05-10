var data=[
	[1,2,33,5],
	[2,10,15,16],
	[3,1,21,60]
];
new Vue({
	el:'#app',
	data:{
		data:data,
		selects:[1,2,3,4,5,6,7,8,9,10],
		selctOne:'',
		selctTwo:'',
		selctThree:''
	},
	methods:{
		isMax(col,colIndex){
			for(var i=0;i<this.data.length;i++) {
				if(this.data[i][colIndex] > col) {
					return false;
				}
			}
			return true;
		}
	}
});
