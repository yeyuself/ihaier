;(function(){
    $.ajax({
        url: '../../../php/lunbo.php',
        type: 'get',
        dataType: "json", 
        success:function(data){
            console.log(data);
        }
    })
})();