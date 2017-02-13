var req;
var reqTimeout;

function loadXMLDoc(url) {
    req = null;
    if (window.XMLHttpRequest) {
        try {
            req = new XMLHttpRequest();
        } catch (e){}
    } else if (window.ActiveXObject) {
        try {
            req = new ActiveXObject('Msxml2.XMLHTTP');
        } catch (e){
            try {
                req = new ActiveXObject('Microsoft.XMLHTTP');
            } catch (e){}
        }
    }

    if (req) {
        req.onreadystatechange = processReqChange;
        req.open("GET", url, true);
        req.send(null);
        reqTimeout = setTimeout("req.abort();", 5000);
    } else {
        alert("Браузер не підтримує AJAX");
    }
}

function processReqChange() {
    document.form1.state.value = stat(req.readyState);


    if (req.readyState == 4) {
        clearTimeout(reqTimeout);

        document.form1.statusnum.value = req.status;
        document.form1.status.value = req.statusText;

        // only if "OK"
        if (req.status == 200) {
            document.form1.response.value=req.responseText;
        } else {
            alert("Не вдалося отримати дані:\n" + req.statusText);
        }
    }
}

function stat(n)
{
  switch (n) {
    case 0:
      return "не ініціалізовано";
    break;

    case 1:
      return "Завантаження...";
    break;

    case 2:
      return "Завантажено";
    break;

    case 3:
      return "В процесі...";
    break;

    case 4:
      return "Виконано";
    break;

    default:
      return "Невідомий стан";
  }
}

function requestdata(params)
{
  loadXMLDoc('examples/httpreq.php'+params);
}
