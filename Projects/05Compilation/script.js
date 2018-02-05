var isActive = true;




$(document).ready(function(){
  console.log('started');

  $('#dice').click(function(){
    if(isActive){
      isActive = false;
      $('#dice').removeClass('rotate');
    }else{
      isActive = true;
    }
  })

  $('#block').mouseenter(function(){
    console.log('hovered');
    if(isActive){
      $('#dice').removeClass('rotate');

      // radom color
      var red = Math.floor(Math.random() * 255);
      var green = Math.floor(Math.random() * 255);
      var blue = Math.floor(Math.random() * 255);
      console.log(red + ',' + green +','+ blue);
      $('#dice').css({'background-color': 'rgb('+ red + ',' + green  + ',' + blue + ')' });

      // radom index
      var index = Math.floor(Math.random() * 5) + 1;
      console.log(index);

      $('#dice div:nth-child(' + index +')').show();

      $('#titlesHolder div:nth-child(' + index +')').show();

    }
  })

  $('#block').mouseout(function(){
    console.log('mouseout');
    $('#dice').addClass('rotate');
    $('#dice').css({'background-color': 'rgb(50,50,50)'})
    for(var i=1; i<6; i++){
      $('#dice div:nth-child(' + i +')').hide();
      $('#titlesHolder div:nth-child(' + i +')').hide();
    }
  })

  $('#dice div:first-child').click(function(){
    window.open ('works/01Lyrics/index.html');
  })

});
