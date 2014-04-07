
(function(){
    
    var data = [
    {
        label : 'March',
        value : '95.48'
    
    },{
        label : 'Feb',
        value : '90.12'
    
    },{
        label : 'Jan',
        value : '84.18'
    },{
        label : 'Dec13',
        value : '93.52'
    }

];

    console.log(data);
var total = 0;
    var max = 0;
data.forEach(function(elem,i){

    total += Math.abs(elem.value);
    max = Math.max(elem.value,max);

});

data.forEach(function(elem,i){
    
   console.log(elem.value/total);
    var height = (elem.value/max)*250;
    var template = '<div class="barCompareContainer"><div class="bCompareBar" style="width:'+height+'px"><span class="elemCompareValue">$ '+elem.value+'</span><span data-label = "'+elem.label+'"class="labelComparePopUp font2">'+elem.label+'</span></div></div>';
    
    
    if(elem.value)
$('.monthCompareViz').append(template);
    
     

});
})();