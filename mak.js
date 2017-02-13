//Версія 1.6.0 від 2017/02/13
var vyrob1= ['Netcore Technology Inc.','ASUSTek COMPUTER INC.'];
var abetka= ['0','1','2','3','4','5','6','7','8','9','a','b','c','d','e','f','A','B','C','D','E','F'];
var adresa=''; // початкова адреса, отримана шляхом введення
var adreso=''; // кінцева адреса
function getRndmInteger(min, max) {
    return Math.floor(Math.random() * (max - min+1)) + min;
};
function perevirkaAdres(makadresa){
  pravylna=true;
  for (i=0;i<makadresa.length;i++)
    {if (abetka.indexOf(makadresa[i])<0) pravylna=false;}
  return pravylna;
};
var zap=function() 
 {
      $.ajax({
        type: 'GET',
        url: 'https://macvendors.co/api/jsonp/'+adresa,
        dataType: 'jsonp',
        crossDomain: true,
    }).done(function(response){
		if(response.result.error){
            $('.list').append('<div class="item">'+response.result.error+ '</div>');
	
		}else{
            //if ((response.result.company) in vyrobn){
            //   ip=1;}
			$('.list').append('<div class="item"><a href=http://192.168.'+ip+'.1 target="_blank"><p class="name">' +response.result.company+'</p></a></div>');
	
		}
    }).fail(function(error){
    
    });
 };
var pro=function()
 { 
  if (perevirkaAdres(adresa)===true) 
  {   zap(); 
      adreso=adresa.substring(0,2);
      i=2;
      do
      {adreso=adreso+'-'+adresa.substring(i,i+2);
      i+=2;}
      while (i<adresa.length)
      $('.list').append('<div class="item">' + adreso + '</div>');
      adreso=adresa.substring(0,2);
      i=2;
      do
      {adreso=adreso+':'+adresa.substring(i,i+2);
      i+=2;}
      while (i<adresa.length)
      $('.list').append('<div class="item">' + adreso + '</div>');
      $('.list').append('<div class="item"><h4>Команди для операційної системи<h4></div>');
      $('.list').append('<div class="item">sudo -s</div>');
      $('.list').append('<div class="item">vconfig add '+iface+' '+vlan+'</div>');
      $('.list').append('<div class="item">ifconfig    '+iface+'.'+vlan+' inet 192.168.'+ip+'.'+ip_comp+'</div>');
      $('.list').append('<div class="item">arp -s 192.168.'+ip+'.1 '+ adreso+'</div>');
      $('.list').append('<div class="item">arping -I        '+iface+'.'+vlan+' -b 192.168.'+ip+'.1</div>');
      $('.list').append('<div class="item">vconfig rem '+iface+'.'+vlan+'</div>');
      adreso=adresa.substring(0,4);
      i=4;
      do
      {adreso=adreso+'.'+adresa.substring(i,i+4);
      i+=4;}
      while (i<adresa.length)
      $('.list').append('<div class="item"><h4>Деякі корисні команди для олта BDCOM<h4></div>');
      $('.list').append('<div class="item"> show mac add ' + adreso + '</div>'); // команда для перевірки лінку з оптичним терміналом абонента
      $('.list').append('<div class="item"> show mac add int epon ' + epom + '</div>');
      $('.list').append('<div class="item">show epon int epon '+epom+' onu ctc opt</div>');
 //     $('.list').append('<div class="item">show mac address-table dynamic vlan '+vlan+'</div>');
//      $('.list').append('<div class="item">show vlan id '+vlan+'</div>');
      $('.list').append('<div class="item">show interface brief</div>');
      $('.list').append('<div class="item">show epon onu-information</div>');
      $('.list').append('<div class="item">show epon active-onu</div>');
      $('.list').append('<div class="item">show epon inactive-onu</div>');

  }
  else $('.list').append('<div class="item">' + 'Хибна адреса. Спробуй ще раз' + '</div>');
 };

$(document).ready(function ()
    {
    $('#button').click(function ()
        {
        $(".item").remove();
        adreso=''
        iface =$('input[name=iface]').val();
        if (iface==='') 
           {iface='eth1';}
        ip_comp=getRndmInteger(10, 99);
        vlan  =$('input[name=vlan]').val();
        adresa=$('input[name=checkListItem]').val();
        ip='0';
        epom=$('input[name=epom]').val();
  
        for (i=0;i<adresa.length;i++)
          {if (adresa[i]!==' ' && adresa.charCodeAt(i)!==9) {adreso=adreso+adresa[i];}}
        adresa=adreso;
        adreso='';
        switch (adresa.length)
          {
          case 12: 
          pro();
          break;
          case 17:
          adresa=adresa.substring(0,2)+adresa.substring(3,5)+adresa.substring(6,8)+adresa.substring(9,11)+adresa.substring(12,14)+adresa.substring(15,17);
          pro();
          break;
          case 14:
          adresa=adresa.substring(0,4)+adresa.substring(5,9)+adresa.substring(10,14);
          pro();
          break;
          default:
          $('.list').append('<div class="item">' + 'Хибна адреса. Спробуй ще раз' + '</div>');
          }
        });
    });
