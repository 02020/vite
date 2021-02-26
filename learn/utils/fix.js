var ssnews = (function() { var p; var l = "#divNewsList"; var t = 0;

  function m() { $.getJSON("dataconfig/sysconfig.json", function(a) { t = a
        .news.showRange }) }

  function n() { $.ajax({ type: "get", contentType: "application/json; charset=utf-8",
      url: "news.aspx/GetNewsAllData", dataType: "json", success: function(
        b) { var a = jQuery.parseJSON(b.d); return q(a) }, error: function(
        c, b, a) { if (typeof console == "object") { console.log(c.status +
            "," + c.responseText + "," + b + "," + a) } } }) }

  function q(f) { var c = "<ul style='margin-top: 0px;'>"; var d; for (var e =
        0, g = f.length; e < g; e++) { var b = f[e].PublisherDate; var a =
        f[e];
      a.Id = a[0];
      a.Url = a[3];
      a.NewsName = a[2];
      a.Type = a[1]; if (a.Type == "公告") { d = "<span></span>" } else { d =
          "<span class='new'></span>" } if (a.Url) { c += "<li>" + d +
          "<a href='javascript:openPostWindow('"+a.Url+"');'>" + a.NewsName +
          "</a></li>" } else { c += "<li>" + d +
          "<a target='_blank' title='' href='news.aspx?opt=news&id= " + a.Id +
          "'>" + a.NewsName + "</a></li>" } } c +=
      "<li><span class='new'></span><a target='_blank' title='' href='../newslist.html'>更多...</a></li>";
    c += "</ul>";
    $(l).empty().append(c) }

  function s() { var a = $(l).find("ul:first"); var b = a.find("li:first").height();
    a.animate({ "margin-top": -b + "px" }, 600, function() { a.css({ "margin-top": "0px" })
        .find("li:first").appendTo(a) }) }

  function r() { $(l).hover(function() { clearInterval(ssnews.scrollTimer) },
      function() { ssnews.scrollTimer = setInterval(s, 1600) }).trigger(
      "mouseout") }

  function k(e) { var d = /-?\d+/; var b = d.exec(e); var a = new Date(
      parseInt(b[0])); var c = new Date; return (c - a) / (1000 * 60 * 60 *
      24) }

  function o() { n();
    r(); return { scrollTimer: 1 } } return { entry: function() { if (!p) { p
          = o() } return p } } })();



function parseQueryString(url) {
  var reg_url = /^[^\?]+\?([\w\W]+)$/,
    reg_para = /([^&=]+)=([\w\W]*?)(&|$)/g, //g is very important
    arr_url = reg_url.exec(url),
    ret = {};
  if (arr_url && arr_url[1]) {
    var str_para = arr_url[1],
      result;
    while ((result = reg_para.exec(str_para)) != null) {
      ret[result[1]] = result[2];
    }
  }
  return ret;
}

function openPostWindow(url, params) {

  var obj = parseQueryString(url);
  params = obj.relevancyMenu;
  url = url.split("?")[0];
  var newWin = window.open(),
    formStr = '';
  //设置样式为隐藏，打开新标签再跳转页面前，如果有可现实的表单选项，用户会看到表单内容数据
  formStr = '<form style="visibility:hidden;" method="POST" action="' + url +
    '">' +
    '<input type="hidden" name="relevancyMenu" value="' + params + '" />' +
    '</form>';

  newWin.document.body.innerHTML = formStr;
  newWin.document.forms[0].submit();

  return newWin;
}