//Версія 1.5.6 від 2017/02/08

var abetka= ['0','1','2','3','4','5','6','7','8','9','a','b','c','d','e','f','A','B','C','D','E','F'];
var adresa=''; // початкова адреса, отримана шляхом введення
var adreso=''; // кінцева адреса
var apireq='https://macvendors.co/api/vendorname/';
function getRndmInteger(min, max) {
    return Math.floor(Math.random() * (max - min+1)) + min;
}
var pro=function()
 { // Наступний цикл перевіряє, чи введені символи відповідають тим, що можуть бути в мак-адресі.
  find_error=false;
  for (i=0;i<12;i++)
  {  
     if (abetka.indexOf(adresa[i])<0)    find_error=true;
  }
 
  if (find_error===false) 
  {   //$('.list').append('<div class="item">' + adresa + '</div>'); вивід адреси без розділових знаків
      adreso=adresa.substring(0,4);
      i=4;
      do
      {adreso=adreso+'.'+adresa.substring(i,i+4);
      i+=4;}
      while (i<adresa.length)
      $('.list').append('<div class="item"> show mac add ' + adreso + '</div>'); // команда для перевірки лінку з оптичним терміналом абонента

      $.ajax({
        type: 'GET',
        url: 'http://macvendors.co/api/jsonp/'+adreso,
        dataType: 'jsonp',
        crossDomain: true,
    }).done(function(response){
		if(response.result.error){
            $('.list').append('<div class="item">'+response.result.error+ '</div>');
			
		}else{
			$('.list').append('<div class="item">'+response.result.company+ '</div>');
		
		}
    }).fail(function(error){
    
    });

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
      $('.list').append('<div class="item">sudo vconfig add '+iface+' '+vlan+'</div>');
      $('.list').append('<div class="item">sudo ifconfig    '+iface+'.'+vlan+' inet 192.168.'+ip+'.'+ip_comp+'</div>');
      $('.list').append('<div class="item">sudo arp -s 192.168.'+ip+'.1 '+ adreso+'</div>');
      $('.list').append('<div class="item">arping -I        '+iface+'.'+vlan+' -b 192.168.'+ip+'.1</div>');
      $('.list').append('<div class="item">sudo vconfig rem '+iface+'.'+vlan+'</div>');
    //  $('.list').append('<div class="item"><a href=https://macvendors.co/api/vendorname/'+adreso+' target="_blank"><p class="name" >Дізнатись виробника</p></a><br></div>');
      $('.list').append('<div class="item"><a href=http://192.168.'+ip+'.1 target="_blank"><p class="name"> Перейти до налаштувань роутера</p></a></div>');
   

  }
  else $('.list').append('<div class="item">' + 'Хибна адреса. Спробуй ще раз' + '</div>');
 };

$(document).ready(function ()
    {
    $('#button').click(function ()
        {
        $(".item").remove();
        adreso='';
        ip    =$('input[name=ipadr]').val();
        if (ip==='') 
           {ip=0;}
        vlan  =$('input[name=vlan]').val();
        adresa=$('input[name=checkListItem]').val();
        iface =$('input[name=iface]').val();
        if (iface==='') 
           {iface='eth1';}
        ip_comp=getRndmInteger(10, 99);
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
