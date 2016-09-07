
var xhr = new XMLHttpRequest();

xhr.open('GET', 'https://github.com/proxy/macvendors.co/api/vendorname/D4:CA:6D:2A:C3:8F',true);

xhr.send();

if (xhr.status != 200) {
  
  alert( xhr.status + ': ' + xhr.statusText ); // 
} else {
  // результ
  $('.list').append('<div class="item">' + 'xhr.responseText' + '</div>');
   
}
