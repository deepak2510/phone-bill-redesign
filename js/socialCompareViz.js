
(function(){
    
    var data = [
    {
        label : 'You',
        value : '95.48'
    
    },{
        label : 'Others',
        value : '134'
    
    }

];

    
    var max = 0;
data.forEach(function(elem,i){

    
    max = Math.max(elem.value,max);

});

data.forEach(function(elem,i){
    
      
    var width = (((elem.value/max)*($('.socialCompareViz').parent().width()-70))/$('.socialCompareViz').parent().width()*100);
    var template = '<div class="barCompareContainer"><div class="bCompareBar" style="width:'+width+'%"><span class="elemCompareValue">$ '+elem.value+'</span><span data-label = "'+elem.label+'"class="labelComparePopUp font2">'+elem.label+'</span></div></div>';
    
    
    if(elem.value)
$('.socialCompareViz').append(template);
    
     

});
})();