;(function(){
    $(function(){
        $('.user input').on('focus',function(){
            $('.user').find('em').hide();
        })
        $('.user input').on('blur',function(){
            if($(this).val()==''){
                $('.user').find('em').show();
            }   
        })
        $('.pass input').on('focus',function(){
            $('.pass').find('em').hide();
        })
        $('.pass input').on('blur',function(){
            if($(this).val()==''){
                $('.pass').find('em').show();
            }   
        })

        $('.sub').on('click', function() {
            $.ajax({
                type: 'post',
                url: 'http://localhost/ihaier/haier/php/login.php',
                data: {
                    phone: $('#phone').val(),
                    pass: $('#password').val()
                },
                success:function(d,status){
                    if (!d) {
                        $('.error').html('用户名或者密码错误');
                    } else {
                        location.href = '../html/index.html';
                        $.cookie('phonenum', $('#phone').val(), { expires: 7 });
                    }
                }
            })
            
        });

        
    })
})();