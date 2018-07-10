function Magnifier(){
	this.small = document.querySelectorAll("#smallImg>img");
	// console.log(this.small);
	this.middle = document.querySelector(".mid");
	this.midimg = document.getElementById("midImg");
	this.big = document.getElementsByClassName("big")[0];
	this.bigimg = document.getElementById("bigImg");
	this.filter = document.getElementById("filter");
	this.init();
}
	Magnifier.prototype.init = function(){	
		var _this = this;
		for(var i=0;i<this.small.length;i++){
			this.small[i].onmouseover = function(){
			_this.tabtoggle(this);
			}
		}
		this.middle.onmouseover = function(){
			_this.over();
		}
		this.middle.onmouseout = function(){
			_this.out();
		}
	}

	Magnifier.prototype.tabtoggle = function(index){
		var src = index.getAttribute("src");
		for(var i=0;i<this.small.length;i++){
			this.small[i].className = "";
		}
		index.className = "active";
		this.midimg.src = src;
		this.bigimg.src = src;
	}
	Magnifier.prototype.over= function(){
		var _this = this;
		this.filter.style.display = "block";
		this.big.style.display = "block";
		document.onmousemove = function(){
			_this.move();
		}
	}
	Magnifier.prototype.out= function(){
		this.filter.style.display = "none";
		this.big.style.display = "none";
	}
	// Magnifier.prototype.offset = function(ele){
	// 	while(ele.offsetParent){
	// 		ele = ele.offsetParent;
	// 		ele.offsetLeft += ele.offsetLeft;
	// 		ele.offsetTop +=ele.offsetTop;
	// 	}
	// }

	Magnifier.prototype.move = function(e){
		// offset(this.middle);
		var e = e||event;
		
		var l = e.clientX-this.middle.offsetLeft-this.filter.offsetWidth/2;
		var t = e.pageY-this.middle.offsetTop-this.filter.offsetHeight/2;
		l = l>this.middle.offsetWidth-this.filter.offsetWidth?this.middle.offsetWidth-this.filter.offsetWidth:(l<0?0:l);
		t = t>this.middle.offsetHeight-this.filter.offsetHeight?this.middle.offsetHeight-this.filter.offsetHeight:(t<0?0:t);
		this.filter.style.left = l+"px";
		this.filter.style.top = t +"px";
		this.bigimg.style.left = -2*l+"px";
		this.bigimg.style.top = -2*t +"px";
	}



new Magnifier();