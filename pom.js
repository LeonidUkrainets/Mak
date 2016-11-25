//Версія 1.4.4 від 2016/11/25

var port='';
var find_error=false;

var create=function()

  if (find_error===false) 
  {   
      $('.list').append('<div class="item"> show mac address-table int epon ' + port + '</div>'); // команда для перевірки лінку з оптичним терміналом абонента
      $('.list').append('<div class="item">show epon interface epon '+port+' onu ctc opt</div>');
      
  }
  else $('.list').append('<div class="item">' + 'Хибна адреса. Спробуй ще раз' + '</div>');
 };

$(document).ready(function ()
    {
    $('#button').click(function ()
        {
        $(".item").remove();
        adreso='';
        
        port  =$('input[name=port]').val();
        for (i=;i<port.length;i++)
          {if (port[i]!==' ' && adresa.charCodeAt(i)!==9) {port=port+port[i];}}
        }
        create();
        });
    });
