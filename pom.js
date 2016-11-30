//Версія 1.4.4 від 2016/11/30
var abetka= ['0','1','2','3','4','5','6','7','8','9',':','/'];
var adresa=''; // початкова адреса, отримана шляхом введення
var adreso=''; // кінцева адреса
var pro=function()
 {
  for (i=0;i<6;i++)
  {  
     var find_error=true;
     var j=0;
     while (j<abetka.length && find_error)
        {
            if ( adresa[i]===abetka[j] )
              {find_error=false;}
            j++;
        }
  }
  if (find_error===false) 
  {   
      $('.list').append('<div class="item">' + adresa + '</div>');
      
      
      $('.list').append('<div class="item">sudo vconfig add '+iface+' '+vlan+'</div>');
      $('.list').append('<div class="item">sudo ifconfig    '+iface+'.'+vlan+' inet 192.168.'+ip+'.'+ip_comp+'</div>');
      $('.list').append('<div class="item">sudo arp -s 192.168.'+ip+'.1 '+ adreso+'</div>');
      $('.list').append('<div class="item">arping -I        '+iface+'.'+vlan+' -b 192.168.'+ip+'.1</div>');
      $('.list').append('<div class="item">sudo vconfig rem '+iface+'.'+vlan+'</div>');
      

  }
  else $('.list').append('<div class="item">' + 'Хибна адреса. Спробуй ще раз' + '</div>');
 };

$(document).ready(function ()
    {
    $('#button').click(function ()
        {
        $(".item").remove();
        adreso='';
        
        adresa=$('input[name=checkListItem]').val();
        
        for (i=0;i<adresa.length;i++)
          {if (adresa[i]!==' ' && adresa.charCodeAt(i)!==9) {adreso=adreso+adresa[i];}}
        adresa=adreso;
        adreso='';
        $('.list').append('<div class="item"> show mac add int epon ' + adresa + '</div>');
        $('.list').append('<div class="item"> how epon int epon ' + adresa + ' onu ctc opt</div>');
        switch (adresa.length)
          {
          case 6: 
          
          break;
          case 5:
          
          break;
         
          default:
          $('.list').append('<div class="item">' + 'Хибна адреса. Спробуй ще раз' + '</div>');
          }
        });
    });
