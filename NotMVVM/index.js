/*
*	第1题
*/
var url="https://open.wecash.net/#/FE?aa=1&b=2&e&c=wecash&aa=4&d";
var maps=url.match(/\?(.+)/)[1];
var result=[];
maps.replace(/([^&=]*)=([^&=]*)/g,function(match,key,value){
	if(result[key]) {
		result[key]=[...result[key],key];
	}
	else {
		result[key]=value;
	}
})
maps='&'+maps+'&';
maps.replace(/[&]([^&=]*)(&)/g,function(match,flag){
	result[flag]=true;
})
console.log(result)
/*
*	第2题
*/
var data=[
	[1,2,33,5],
	[2,10,15,16],
	[3,1,21,60]
];
function getTable(data){
	var flag=[];
	var row=data.length,
		col=data[0].length;
	for(var i=0;i<col;i++){
		var max=Number.MIN_VALUE;
		for(var j=0;j<row;j++){
			if(data[j][i] > max) {
				max=data[j][i]
				flag[i]=j;
			}
		}
	}
	var result='';
	for(var i=0;i<row;i++){
		result+='<tr>'
		for(var j=0;j<col;j++){
			if(flag[j] === i) {
				result+='<td style="color:red;">'+data[i][j]+'</td>'
			}
			else {
				result+='<td>'+data[i][j]+'</td>'
			}
		}
		result+='</tr>'
	}
	return result;
}
window.onload=function(){
	const table=document.getElementById('table');
	table.innerHTML=getTable(data);
}
/*
*	第3题
*/
const names=['select_one','select_two','select_three'];
var selects={};
function selectChange(value,id){
	selects[id]=value;
	disabeldSeclect();
}
function disabeldSeclect(){
	clearSeclect();
	for(var key in selects) {
		for(var name of names) {
			if(name !== key) {
				const obj=document.getElementById(name);
				const options=obj.querySelectorAll('option');
				for(var index in options) {
					if(index == selects[key]) {
						options[index].disabled=true;
					}
				}
			}
		}
	}
}
function clearSeclect() {
	for(var name of names) {
		const obj=document.getElementById(name);
		const options=obj.querySelectorAll('option');
		for(var index in options) {
			options[index].disabled=false;
		}
	}
}