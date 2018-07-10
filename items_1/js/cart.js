   var oList = document.getElementById("list");
   var str = "";
//如果cookie里面有这个属性的话
if(getCookie("init")){
	//如果数据存在那么将字符串转换为json
	var data = JSON.parse(getCookie("init"));
	for(var key in data){
		for(var i in oul1){
			if(key == oul1[i].id){
				str+=`<tr><td><img src='${oul1[i].img1}' class="smallPic"></td>
				<td>'${oul1[i].newPrice}'</td>
				<td><button class="reduce">-</button><input type="text" value='+data[key]+' class="num">
				<button class="add">+</button></td><td>'+(${oul1[i].newPrice}.slice(1)*data[key])+'</td><td class="del">删除</td></tr>`
			}
		}
	}
	oList.innerHTML += str;


}