window.onscroll = function(){
	
	var obox = document.querySelector("aside.box");
	var milkMain = document.getElementById("milkMain");
	
	var t = document.documentElement.scrollTop || document.body.scrollTop;
	if(t>173){
		obox.style.display = "block";
	}else{
		obox.style.display="none";
	}
}


function Page(){
	this.active = document.querySelectorAll(".title>a");
	this.milkAll = document.querySelectorAll(".milkAll");
	this.init();
	this.show();
}
Page.prototype.init = function(){
	var _this = this;
	for(var i=0;i<this.active.length;i++){
		this.active[i].index = i;
		
		this.active[i].onmouseover = function(){
			_this.toggletab(this);
		}
	}
}
Page.prototype.show = function(){
	if(this.milkAll[0]){
		var str = "";
		for(var j=0;j<oul1.length;j++){
			
			str += `<li data-id=${oul1[j].id}><a href="##">
	                            <img src="${oul1[j].img1}" alt=""><img src="${oul1[j].img2}" alt="" class="group">
	                            <div class="hiddenjud">
	                                <div>
	                                    <p><span>${oul1[j].zan}</span><i class="iconfont">&#xe8c0;</i><i class="iconfont">&#xe8c0;</i><i class="iconfont">&#xe8c0;</i><i class="iconfont">&#xe8c0;</i><i class="iconfont">&#xe8c0;</i></p>
	                                    <marquee behavior="" direction="left" scrollamount="10s">${oul1[j].talk}</marquee>
	                                </div>
	                                <span>${oul1[j].meg}</span>
	                            </div>
	                        </a>
	                        <div>
	                            <h3>
	                                <a href="##">${oul1[j].title}</a><a href="##">${oul1[j].descr}</a>
	                            </h3>
	                            <p><span>${oul1[j].newPrice}</span><del>>${oul1[j].oldPrice}</del>
	                                </p><a href="detail.html" target="_blank" class="nbt">立即购买</a>
	                        </div></li>`;
	        
		}
		this.milkAll[0].innerHTML = str;
	}
	if(this.milkAll[1]){
		var str = "";
		for(var j=0;j<oul2.length;j++){
			
			str += `<li data-id=${oul2[j].id}><a href="##">
	                            <img src="${oul2[j].img1}" alt=""><img src="${oul2[j].img2}" alt="" class="group">
	                            <div class="hiddenjud">
	                                <div>
	                                    <p><span>${oul2[j].zan}</span><i class="iconfont">&#xe8c0;</i><i class="iconfont">&#xe8c0;</i><i class="iconfont">&#xe8c0;</i><i class="iconfont">&#xe8c0;</i><i class="iconfont">&#xe8c0;</i></p>
	                                    <marquee behavior="" direction="left" scrollamount="10s">${oul2[j].talk}</marquee>
	                                </div>
	                                <span>${oul2[j].meg}</span>
	                            </div>
	                        </a>
	                        <div>
	                            <h3>
	                                <a href="##">${oul2[j].title}</a><a href="##">${oul2[j].descr}</a>
	                            </h3>
	                            <p><span>${oul2[j].newPrice}</span><del>>${oul2[j].oldPrice}</del>
	                                </p><a href="detail.html" target="_blank" class="nbt">立即购买</a>
	                        </div></li>`;
	        
		}
		this.milkAll[1].innerHTML = str;
	}
	if(this.milkAll[2]){
		var str = "";
		for(var j=0;j<oul3.length;j++){
			
			str += `<li data-id=${oul3[j].id}><a href="##">
	                            <img src="${oul3[j].img1}" alt=""><img src="${oul3[j].img2}" alt="" class="group">
	                            <div class="hiddenjud">
	                                <div>
	                                    <p><span>${oul3[j].zan}</span><i class="iconfont">&#xe8c0;</i><i class="iconfont">&#xe8c0;</i><i class="iconfont">&#xe8c0;</i><i class="iconfont">&#xe8c0;</i><i class="iconfont">&#xe8c0;</i></p>
	                                    <marquee behavior="" direction="left" scrollamount="10s">${oul3[j].talk}</marquee>
	                                </div>
	                                <span>${oul3[j].meg}</span>
	                            </div>
	                        </a>
	                        <div>
	                            <h3>
	                                <a href="##">${oul3[j].title}</a><a href="##">${oul3[j].descr}</a>
	                            </h3>
	                            <p><span>${oul3[j].newPrice}</span><del>>${oul3[j].oldPrice}</del>
	                                </p><a href="detail.html" target="_blank" class="nbt">立即购买</a>
	                        </div></li>`;
	        
		}
		this.milkAll[2].innerHTML = str;
	}
	if(this.milkAll[3]){
		var str = "";
		for(var j=0;j<oul4.length;j++){
			
			str += `<li data-id=${oul4[j].id}><a href="##">
	                            <img src="${oul4[j].img1}" alt=""><img src="${oul4[j].img2}" alt="" class="group">
	                            <div class="hiddenjud">
	                                <div>
	                                    <p><span>${oul4[j].zan}</span><i class="iconfont">&#xe8c0;</i><i class="iconfont">&#xe8c0;</i><i class="iconfont">&#xe8c0;</i><i class="iconfont">&#xe8c0;</i><i class="iconfont">&#xe8c0;</i></p>
	                                    <marquee behavior="" direction="left" scrollamount="10s">${oul4[j].talk}</marquee>
	                                </div>
	                                <span>${oul4[j].meg}</span>
	                            </div>
	                        </a>
	                        <div>
	                            <h3>
	                                <a href="##">${oul4[j].title}</a><a href="##">${oul4[j].descr}</a>
	                            </h3>
	                            <p><span>${oul4[j].newPrice}</span><del>>${oul4[j].oldPrice}</del>
	                                </p><a href="detail.html" target="_blank" class="nbt">立即购买</a>
	                        </div></li>`;
	        
		}
		this.milkAll[3].innerHTML = str;
	}
}
Page.prototype.toggletab = function(a){
	for(var j=0;j<this.active.length;j++){
			this.active[j].className="";
			this.milkAll[j].style.display = "none";
			}
			a.className = "hover";
			this.milkAll[a.index].style.display = "block";
}
new Page();



var oList = document.getElementsByClassName("milkAll");
// console.log(oList);
var oNum = {};
for(var i=0;i<oList.length;i++){
	oList[i].onclick = function(e) {
    	 var e = e||event;
    	 var target = e.target || e.srcElement;
    	 if(target.tagName == "A" && target.className =="nbt"){
    	 	var id = target.parentNode.parentNode.getAttribute("data-id");
    	 	var n = oNum[id];
    	 	if(!n){
    	 		oNum[id] = 1;
    	 	}else{

    	 		n++;
    	 		oNum[id] = n;
    	 	}
    	 	// console.log(n);
    	 	
    	 	var data = JSON.stringify(oNum);
			console.log(data);
    	 	setCookie("init",data,7);
    	 }	
    }
}