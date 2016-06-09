//load JSON file
$.getJSON('menu.json', function(data) {
//build menu
var builddata = function () {
    var source = [];
    var items = [];
    for (i = 0; i < data.length; i++) {
        var item = data[i];
        var label = item["name"];
        var parentid = item["parent_id"];
        var id = item["id"];
        var url = item["url"];

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
    return source;
}

var buildUL = function (parent, items) {
    $.each(items, function () {
        if (this.label) {
            var li = $("<li class='js-menu'>" + "<a href='"+ this.url +"'>" + this.label + "</a></li>");
            li.appendTo(parent);
            if (this.items && this.items.length > 0) {
                var ul = $("<ul id='dropdown-menu'></ul>");
                ul.appendTo(li);
                buildUL(ul, this.items);
            }



        }
    });
}
$("#dropdown-menup").prepend("<div class='up' id='hid'  align='center'><img onclick='up()' src=images/1.gif alt></div>");

var source = builddata();
var ul = $("#dropdown-menup");
ul.appendTo("#dropdown-menu");
buildUL(ul, source);
$("<div class='dn' id='vis' align='center' onclick='dn()'><img src=images/0.gif alt></div>").appendTo($("#dropdown-menup"));
if ($("#dropdown-menu>li:has(ul.js-menu)"))
{
    $("#dropdown-menu>li.js-menu").addClass('dropdown-submenu');
}
if ($("#dropdown-menu>li>ul.js-menu>li:has(> ul.js-menu)"))
{
    $("#dropdown-menu>li>ul.js-menu li ").addClass('dropdown-submenu');
}
$("ul.js-menu").find("li:not(:has(> ul.js-menu))").removeClass("dropdown-submenu");
});




