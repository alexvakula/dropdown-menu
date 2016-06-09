//var container = document.getElementById('menu');
//var menu = document.getElementById('menu-drop');
var menuState = 0;
var menuPosition;
var menuPositionX;
var menuPositionY;
var menuWidth;
var menuHeight;
var windowWidth;
var windowHeight;
var clickCoords;
var clickCoordsX;
var clickCoordsY;

var j=0;
var h=0;
var z;
/*var x=0;
var y=0;     */
////////////////////////////////
 function init() {
    contextListener();
    clickListener();
    keyupListener();
  }
/////////////////
/*function menur (){

function jsondata () {
	var request;
    	var source = [];
    	var items = [];
	var container = document.getElementById('menu');
	if (!container) return;
	var ul = document.createElement('ul');
	ul.id = "menu-drop";
	container.appendChild(ul);

if (window.XMLHttpRequest) {
	request = new XMLHttpRequest();
} else {
	request = new ActiveXObject("Microsoft.XMLHTTP");
}
request.open('GET', 'menu.json');
request.onreadystatechange = function() {
	if ((request.readyState===4) && (request.status===200)) {
		var data = JSON.parse(request.responseText);
var output='';
for (var key in data) {

        var item = data[key];
        var id = data[key].id;
        var label = data[key].name;
        var parentid = data[key].parent_id;
        var url = data[key].url;
        if (items[parentid]) {
            var item = { parentid: parentid, label: label, url: url, item: item };
            if (!items[parentid].items) {
                items[parentid].items = [];
            }
            items[parentid].items[items[parentid].items.length] = item;
            items[id] = item;
	        }
        else {
            items[id] = { parentid: parentid, label: label, url: url, item: item };
            source[id] = items[id];
        }
}
//console.log(source);
buildUL (source);
	}
}
request.send();
}

/////////////////////////////////
function buildUL (parent) {

console.log(parent);
for (var key in parent) {
        var item = parent[key];
        var id = parent[key].id;
        var label = parent[key].name;
        var parentid = parent[key].parent_id;
        var url = parent[key].url;
//   if (parentid > 0) {
	document.write(item);
 	var container = document.getElementById('menu-drop');

	var li = document.createElement("li");
		li.innerHTML = id;
		container.appendChild(li);

//	}



}
}
jsondata ();
}
//////////////////////////////


function menu(){
	var container = document.getElementById('menu');
	if (!container) return;
	var ul = document.createElement('ul');
	ul.id = "menu-drop";
	container.appendChild(ul);
	for (i=0;i<10;i++) {
		var li = document.createElement("li");
		li.innerHTML = "menu"+i;
		ul.appendChild(li);
	}

};
/////////////////////////////

if (window.addEventListener) window.addEventListener("load", menur, false); 
else if (window.attachEvent) window.attachEvent("onload", menur);  */
//////////////////////////////////
function toggleMenuOn() {
menu = document.getElementById('dropdown-menup');
  if ( menuState !== 1 ) {
    menuState = 1;
    menu.id = "menu-down";
menu = document.getElementById('menu-down');
x = menu.childNodes;                                  
var up = document.getElementsByClassName('up');
var d = document.getElementsByClassName('dn');
//console.log(d);
//var x = menu.parentNode.getElementsByTagName("a");
var i;

if (x.length>6) {


for (i = 0; i < 7; i++) {

	if (x[i].className != "up") {
	x[i].id = "active"; 
	
	}
}

for (i = 7; i < x.length; i++) {
    if (x[i].className != "dn") {
    x[i].id = "hidd";
//    d[0].id = "active";
//    x[i].style.display = "none";
	}

}
//d[0].id = "active";
//d[0].style.display = "block";
}

  }
/*for (var menu = document.getElementById("menu-down"),
 uls = menu.getElementsByTagName("ul"), i = 0; i < uls.length; i++) {
    uls[i].style.display = "none";
    var a = uls[i].parentNode.getElementsByTagName("a")[0];
    a.style.backgroundColor = "#00FF7F";
    a.onclick = function (b) {
        return function () {
            uls[b].style.display = uls[b].style.display ? "" : "none";
            var ulss= uls[b].getElementsByTagName('ul')
            for (var k=0; k<ulss.length; k++)  {
            ulss[k].style.display='none'
            }
            return false
        }
    }(i)  

};   */     

}


function dn (){
menu = document.getElementById('menu-down');
//x = menu.childNodes;                                  
var up = document.getElementsByClassName('up');
var dn = document.getElementsByClassName('dn');
var li = document.getElementsByClassName('js-menu');
//act = li.getElementById('active');
//var hidd = document.getElementById('hidd');
//console.log(d);
//var x = menu.parentNode.getElementsByTagName("a");
var i;
var a;
if (dn[0].id == 'vis'){
var activ = [];
var hidden = [];


for (i = 0; i < li.length; i++) {

//console.log(i);
//console.log(li);
	if (li[i].id == 'active'){ activ.push(li[i]);}
	if (li[i].id == 'hidd'){ hidden.push(li[i]);}
var lil=li[i];
//act[6].id = 'active';
//act[0].id = 'hidd';		
//dh[0].id = 'active';		
//	}
};
//document.write(hidden[h]);
j=activ.length;
activ[length].id = 'hidd';
hidden[h].id = 'active';
hidden.unshift();
activ.pop();
//j=hidden.length;


activ.push(hidden[h]);
hidden.shift();
h++;
j=activ.length-1;
z=h+1;
var acl=activ[j];
up[0].id = 'vis';
if (lil == acl){dn[0].id = 'hid';
};
//console.log(activ);
//console.log(hidden);
//console.log(z);
//console.log(hidden);
}
}
//////////////////////
function up (){

menu = document.getElementById('menu-down');
var up = document.getElementsByClassName('up');
var dn = document.getElementsByClassName('dn');
var li = document.getElementsByClassName('js-menu');
if (up[0].id == 'vis'){
//x = menu.childNodes;                                  
//act = li.getElementById('active');
//var hidd = document.getElementById('hidd');
//console.log(d);
//var x = menu.parentNode.getElementsByTagName("a");
var i;
var a;

var activ = [];
var hidden = [];


for (i = 0; i < li.length; i++) {

//console.log(i);
//console.log(li);
	if (li[i].id == 'active'){ activ.push(li[i]);}
	if (li[i].id == 'hidd'){ hidden.push(li[i]);}
var lil=li[i];
//act[6].id = 'active';
//act[0].id = 'hidd';		
//dh[0].id = 'active';		
//	}
};
//document.write(hidden[h]);
j=activ.length;
activ[4].id = 'hidd';
hidden[h-1].id = 'active';
activ.unshift(hidden[h-1]);
activ.pop();
delete hidden[h-1];

//j=hidden.length;
h--;
dn[0].id = 'vis'
/*activ.push(hidden[h]);
hidden.shift();
h++;
j=activ.length-1;*/
var upl=activ[0];
//up[0].id = 'active'
if (li[0] == upl){
	up[0].id = 'hid';
}; 	
//console.log(activ);
//console.log(li);
//console.log(acl);
//console.log(hidden);
}
}  

//////////////////////



/////////////////////////////
function toggleMenuOff() {
menu = document.getElementById('menu-down');
  if ( menuState !== 0 ) {
    menuState = 0;
var up = document.getElementsByClassName('up');
    up[0].id = 'hid';
    j=0;
    h=0;
    menu.id = "dropdown-menup";
  }
}
////////////////////////////

/* if (document.addEventListener) {
  document.addEventListener( "click", function(e) {

      toggleMenuOff();

  });
}  */    
////////////////////
function getPosition(e) {
  var posx = 0;
  var posy = 0;
 
  if (!e) var e = window.event;
 
  if (e.pageX || e.pageY) {
    posx = e.pageX;
    posy = e.pageY;
  } else if (e.clientX || e.clientY) {
    posx = e.clientX + document.body.scrollLeft + 
                       document.documentElement.scrollLeft;
    posy = e.clientY + document.body.scrollTop + 
                       document.documentElement.scrollTop;
  }
 
  return {
    x: posx,
    y: posy
  }
}
//////////////////////
 if (document.addEventListener) {
        document.addEventListener('contextmenu', function (evt){
      if(document.getElementById('dropdown-menu')){
		evt.preventDefault();
		toggleMenuOn();
		positionMenu(evt);}
	else if(document.getElementById('menu-down')){
		evt.preventDefault();
		toggleMenuOff();
	}   

	});
 }

//////////////////////
function positionMenu(e) {
clickCoords = getPosition(e);
  clickCoordsX = clickCoords.x;
  clickCoordsY = clickCoords.y;

  menuWidth = menu.offsetWidth + 4;
  menuHeight = menu.offsetHeight + 4;
 
  windowWidth = window.innerWidth;
  windowHeight = window.innerHeight;
 
  if ( (windowWidth - clickCoordsX) < menuWidth ) {
    menu.style.left = windowWidth - menuWidth + "px";
  } else {
//temp = clickCoordsX + "px";
//alert(temp);
    menu.style.left = clickCoordsX + "px";

  }
 
  if ( (windowHeight - clickCoordsY) < menuHeight ) {
    menu.style.top = windowHeight - menuHeight + "px";
  } else {
    menu.style.top = clickCoordsY + "px";
  }

}  
