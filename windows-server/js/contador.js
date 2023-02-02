var YY = 2019;
var MM = 9;
var DD = 28;
var HH = 23;
var MI = 55;
var SS = 00; 

function atualizaContador() 
{  
var hoje = new Date();  
var futuro = new Date(YY,MM-1,DD,HH,MI,SS);   
var ss = parseInt((futuro - hoje) / 1000);  
var mm = parseInt(ss / 60);  
var hh = parseInt(mm / 60);  
var dd = parseInt(hh / 24);   
ss = ss - (mm * 60);  
mm = mm - (hh * 60);  
hh = hh - (dd * 24);   
var faltam = '';  
faltam += (dd && dd > 1) ? dd+' dias, ' : (dd==1 ? '1 dia(s) ' : '');  
faltam += (toString(hh).length) ? hh+'h, ' : '';  
faltam += (toString(mm).length) ? mm+'m e ' : '';  
faltam += ss+'s';   

 if (dd+hh+mm+ss > 0) 
 {
  document.getElementById('contador').innerHTML = faltam;	
  setTimeout(atualizaContador,1000);  
 }
 else
 {
  document.getElementById('contador').innerHTML = 'CHEGOU!!!!';	
  setTimeout(atualizaContador,1000);  
 }
}