window.onscroll = function(){
	
	var header = document.querySelector("header");
	
	
	var t = document.documentElement.scrollTop || document.body.scrollTop;
	console.log(t);
	if(t>0){
		header.style.position = "fixed";
		header.style.marginTop = "0";
		header.style.top = "0";
		header.style.boxShawdow="0 2px 5px red inset";
	}else if(t<50){
		header.style.display="relative";
		header.style.marginTop = "30px";
	}
}


function Banner(bannerele,liele,direle,btnele){
	this.banner = document.getElementById(bannerele);
	this.ali = document.querySelectorAll(liele);
	this.direction = document.querySelectorAll(direle);
	// console.log(this.direction);
	this.btn = document.querySelectorAll(btnele);
	this.inow = 0;
	this.next = 0;
	this.timer = null;
	this.init();
}
Banner.prototype.init = function(){
	this.autoplay();
	this.hover();
	this.over();
	this.click();
}
Banner.prototype.toimg= function(){
	move(this.ali[this.inow],{opacity:0});
	move(this.ali[this.next],{opacity:100})
	this.inow = this.next;
	for(var i =0;i<this.btn.length;i++){
		this.btn[i].className="";
	}
	this.btn[this.next].className = "active";
}
Banner.prototype.autoplay=function(){
	var _this = this;
	this.timer= setInterval(function(){
		if(_this.next==_this.ali.length-1){
			_this.next = 0;
		}else{
			_this.next++;
		}
		_this.toimg();
	},3000)
}
Banner.prototype.hover = function(){
	var _this = this;
	_this.banner.onmouseover = function(){
		clearInterval(_this.timer);
	}
	this.banner.onmouseout = function(){
		_this.autoplay();
	}
}
Banner.prototype.over = function(){
	var _this = this;
	for(var i =0;i<_this.ali.length;i++){
		this.btn[i].index = i;
		this.btn[i].onmouseover = function(){
			for(var j = 0;j<_this.ali.length;j++){
				_this.btn[j].className="";
				move(_this.ali[j],{opacity:0})
			}
			this.className = "active";
			move(_this.ali[this.index],{opacity:100});
			_this.next =this.index;
			_this.inow = _this.next;
		}
	}
}
Banner.prototype.click = function(){
	var _this = this;
	_this.direction[0].onclick = function(){
		if(_this.next ==0){
			_this.next = _this.ali.length-1;

		}else{
			_this.next--;
		}
		_this.toimg();
	}
	_this.direction[1].onclick = function(){
		if(_this.next ==_this.ali.length-1){
			_this.next = 0;
		}else{
			_this.next++;
		}
		_this.toimg();
	}
}
new Banner("banner",".bannerli",".directiona",".btna");

new Banner("fixedBrand",".fixedBrandli",".direct",".step");




function onotime(){
	var list = document.querySelector(".notime");
    var str = "";
	for(var i = 0;i<notime.length;i++){
		str += `<li><a href="##"><img src=${notime[i].img} alt=""></a>
						<div>
							<h3><a href="##">${notime[i].name}</a></h3>
							<h3><a href="##">${notime[i].desc}</a></h3>
							<p>${notime[i].new_price} <del>${notime[i].old_price}</del></p>
							<div>${notime[i].limit}</div><a href="##">即将开始</a>
						</div></li>`
	}
	list.innerHTML = str;
}
onotime();
function ocontent2(){
	var list = document.querySelector(".content2");
	var li_end = document.querySelector(".li_end");
	var month = document.querySelector(".month");
	var day = document.querySelector(".day");
	var d = new Date();

	for(var i=0;i<content2.length;i++){
	    var ali = document.createElement("li");

	    ali.setAttribute("className","good");
		ali.innerHTML =  `
						<a href="##" class="thing"><img src=${content2[i].img} alt=""></a>
						<a href="##" class="expre">${content2[i].title}</a>
						<p>${content2[i].new_price}<del>${content2[i].old_price}</del></p>
					`
        list.insertBefore(ali,li_end);
        if(d.getMonth()<9){
        	month.innerHTML = "0"+(d.getMonth()+1);
        }else{
        	month.innerHTML = d.getMonth()+1;
        }
		if(d.getDate()<10){
			day.innerHTML = "0"+d.getDate();
		}else{
			day.innerHTML = d.getDate();
		}
        
	}

}
ocontent2();
function ocontent3(){
    var list = document.querySelector(".content3_ul");

    var count = 0;
	var str = "";
	for(var i=0;i<content3.length;i++){
		str += `<li class="famous">
						<div class="eve">
							<img src=${content3[i].img} class="img"><p>${content3[i].p}</p>
						</div>
						<div class="mask">
						</div>
						<div class="actions"><a href="##" class="follows">+关注</a>
						<p class="followers">${count} 人关注该品牌</p>
						<a href="##" class="enter">进入品牌></a></div>
					</li>`
	}
	list.innerHTML = str;
	var famous = document.querySelectorAll(".famous");
	var eve = document.querySelectorAll(".eve");
    var mask = document.querySelectorAll(".mask");
    var actions = document.querySelectorAll(".actions");
    var followers = document.querySelectorAll(".actions>p");
    var follows = document.querySelectorAll(".actions>.follows")
    for(var i=0;i<famous.length;i++){

        famous[i].index = i;
        // console.log(mask,actions,follows,followers,eve);
        famous[i].onmouseover = function(){

            for(var j= 0;j<famous.length;j++){
                mask[j].style.opacity = 0;
                actions[j].style.opacity = 0;
            }
            mask[this.index].style.opacity = 0.5;
            mask[this.index].style.transition="all 0.3s ease";
            actions[this.index].style.opacity = 1;
            follows[this.index].onmouseover = function(){
                this.style.background = "#fff";
                this.style.color = "#000";

            }
            follows[this.index].onmouseout = function(){
                this.style.background = "";
                this.style.color = "#fff";
            }
            follows[this.index].onclick = function(){
                count++;

                // console.log(count);
            }
            followers[this.index].innerHTML = count +"人关注该品牌";
			
			this.onmouseout = function(){
        		mask[this.index].style.opacity = 0;
            	actions[this.index].style.opacity = 0;
        	}
        }
        

    }

}
ocontent3();
function ocontent4(){
	var content = document.querySelector(".content");
	var placeholder = document.querySelector(".spaceholder");
	for(var i=0;i<content4.length;i++){
		var article = document.createElement("article");
		article.innerHTML = `
			<h2 class="hhead">
				<span>${content4[i].region}</span>
				<ul>
					<li>热搜词：</li>
					<li><a href="##">${content4[i].hot1}</a><span>|</span></li>
					<li><a href="##">${content4[i].hot2}</a><span>|</span></li>
					<li><a href="##">${content4[i].hot3}</a><span>|</span></li>
					<li><a href="##">${content4[i].hot4}</a><span>|</span></li>
					<li><a href="##">${content4[i].hot5}</a><span>|</span></li>
					<li><a href="##">${content4[i].hot6}</a><span>|</span></li>
					<li><a href="##">${content4[i].hot7}</a></li>
				</ul>
				<a href="##">更多好货></a>
			</h2>
			<section class="content4">
				<div class="cont_top">
					<div class="enter">
						<a href="##">
							<img src="${content4[i].imgLeft}">
						</a>
						<ul>
							<li><a href="##">${content4[i].mainLeft1}</a></li>
							<li><a href="##">${content4[i].mainLeft2}</a></li>
							<li><a href="##">${content4[i].mainLeft3}</a></li>
							<li><a href="##">${content4[i].mainLeft4}</a></li>
							<li><a href="##">${content4[i].mainLeft5}</a></li>
							<li><a href="##">${content4[i].mainLeft6}</a></li>
						</ul>
					</div>
					<ul class="goods">
						<li><a href=""><h3>${content4[i].mainC1}</h3><p>${content4[i].desC1}</p><img src="${content4[i].imgC1}" alt=""></a></li>
						<li><a href=""><h3>${content4[i].mainC2}</h3><p>${content4[i].desC2}</p><img src="${content4[i].imgC2}" alt=""></a></li>
						<li><a href=""><h3>${content4[i].mainC3}</h3><p>${content4[i].desC3}</p><img src="${content4[i].imgC3}" alt=""></a></li>
						<li><a href=""><h3>${content4[i].mainC4}</h3><p>${content4[i].desC4}</p><img src="${content4[i].imgC4}" alt=""></a></li>
					</ul>
					<div class="change">
						<h3>最新热卖</h3>
						<div id="changediv">
							<ul class="changeli">
								<li>
									<a href="##"><img src="${content4[i].imgR1_1}" alt=""></a>
									<a href="##"><h3>${content4[i].desR1_1}</h3></a>
									<p>${content4[i].price1_1}<del>${content4[i].del1_1}</del></p>
								</li>
								<li>
									<a href="##"><img src="${content4[i].imgR1_2}" alt=""></a>
									<a href="##"><h3>${content4[i].desR1_2}</h3></a>
									<p>${content4[i].price1_2}<del>${content4[i].del1_2}</del></p>
								</li>
								<li>
									<a href="##"><img src="${content4[i].imgR1_3}" alt=""></a>
									<a href="##"><h3>${content4[i].desR1_3}</h3></a>
									<p>${content4[i].price1_3}<del>${content4[i].del1_3}</del></p>
								</li>
								<li>
									<a href="##"><img src="${content4[i].imgR1_4}" alt=""></a>
									<a href="##"><h3>${content4[i].desR1_4}</h3></a>
									<p>${content4[i].price1_4}<del>${content4[i].del1_4}</del></p>
								</li>
							</ul>
							<ul class="changeli">
								<li>
									<a href="##"><img src="${content4[i].imgR2_1}" alt=""></a>
									<a href="##"><h3>${content4[i].desR2_1}</h3></a>
									<p>${content4[i].price2_1}<del>${content4[i].del2_1}</del></p>
								</li>
								<li>
									<a href="##"><img src="${content4[i].imgR2_2}" alt=""></a>
									<a href="##"><h3>${content4[i].desR2_2}</h3></a>
									<p>${content4[i].price2_2}<del>${content4[i].del2_2}</del></p>
								</li>
								<li>
									<a href="##"><img src="${content4[i].imgR2_3}" alt=""></a>
									<a href="##"><h3>${content4[i].desR2_3}</h3></a>
									<p>${content4[i].price2_3}<del>${content4[i].del2_3}</del></p>
								</li>
								<li>
									<a href="##"><img src="${content4[i].imgR2_4}" alt=""></a>
									<a href="##"><h3>${content4[i].desR2_4}</h3></a>
									<p>${content4[i].price2_4}<del>${content4[i].del2_4}</del></p>
								</li>
							</ul>		
							<ul class="changeli">
								<li>
									<a href="##"><img src="${content4[i].imgR3_1}" alt=""></a>
									<a href="##"><h3>${content4[i].desR3_1}</h3></a>
									<p>${content4[i].price3_1}<del>${content4[i].del3_1}</del></p>
								</li>
								<li>
									<a href="##"><img src="${content4[i].imgR3_2}" alt=""></a>
									<a href="##"><h3>${content4[i].desR3_2}</h3></a>
									<p>${content4[i].price3_2}<del>${content4[i].del3_2}</del></p>
								</li>
								<li>
									<a href="##"><img src="${content4[i].imgR3_3}" alt=""></a>
									<a href="##"><h3>${content4[i].desR3_3}</h3></a>
									<p>${content4[i].price3_3}<del>${content4[i].del3_3}</del></p>
								</li>
								<li>
									<a href="##"><img src="${content4[i].imgR3_4}" alt=""></a>
									<a href="##"><h3>${content4[i].desR3_4}</h3></a>
									<p>${content4[i].price3_4}<del>${content4[i].del3_4}</del></p>
								</li>
							</ul>
							<div class="btn">
								<a herf="##" class="btna3 active"></a>
								<a herf="##" class="btna3"></a>
								<a herf="##" class="btna3"></a>
							</div>
							<div>
								<a href="##" class="directer"></a>
								<a href="##" class="directer"></a>
							</div>
						</div>
					</div>
				</div>
				<div class="cont_bottom">
					<span>热卖品牌</span>
					<a href="##"><img src="${content4[i].imgBott1}" alt=""><span class="follow"></span><span class="toast">已关注</span></a>
					<a href="##"><img src="${content4[i].imgBott2}" alt=""><span class="follow"></span><span class="toast">已关注</span></a>
					<a href="##"><img src="${content4[i].imgBott3}" alt=""><span class="follow"></span><span class="toast">已关注</span></a>
					<a href="##"><img src="${content4[i].imgBott4}" alt=""><span class="follow"></span><span class="toast">已关注</span></a>
					<a href="##"><img src="${content4[i].imgBott5}" alt=""><span class="follow"></span><span class="toast">已关注</span></a>
					<a href="##"><img src="${content4[i].imgBott6}" alt=""><span class="follow"></span><span class="toast">已关注</span></a>
					<a href="##"><img src="${content4[i].imgBott7}" alt=""><span class="follow"></span><span class="toast">已关注</span></a>
					<a href="##"><img src="${content4[i].imgBott8}" alt=""><span class="follow"></span><span class="toast">已关注</span></a>
				</div>
			</section>`;
		content.insertBefore(article,placeholder);
	}
}
ocontent4();

new Banner("changediv",".changeli",".directer",".btn>.btna3");

function ocontent5(){
	var oUl = document.querySelector(".likeUl");
	var str = "";
	for(var i=0;i<content5.length;i++){
		str += `<li class="likeLi">
					<a href="##" class="imgA">
						<img src="${content5[i].img}" alt="">
					</a>
					<p>
						<a href="##" class="decA">
							${content5[i].title}
						</a>
					</p>
					<div class="price">
						<p>
							<span>${content5[i].newPrice}</span>
							<del>${content5[i].oldPrice}</del>
						</p>
						<a href="##">${content5[i].judge}</a>
					</div>
				</li>
		`;
	}
oUl.innerHTML = str;
}
ocontent5();