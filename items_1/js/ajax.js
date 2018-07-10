function ajax(method,url,json,succCb,errCb){
	var xhr = new XMLHttpRequest()||new ActiveXObject("Microsoft,XMLHTTP");
	var str = "";
	for(var key in json){
		str += "&"+key +"="+json[key];
	}
	str = str.slice(1);
	if(method=="get"){
		url = url+"?"+str;
		xhr.open("get",url,true);
		xhr.send();
	}else{
		xhr.open("post",url,true);
		xhr.setRequestHeader("content-type","application/x-www-form-urlencoded");
		xhr.send(str);	
	}
	xhr.onreadystatechange = function(){
		if(xhr.status==200 && xhr.readyState ==4){
			succCb&&succCb(xhr.responseText);
		}else{
			errCb&errCb(xhr.status);
		}
	}
}