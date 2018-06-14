;
(function () {

    $('.phone input').on('focus',function(){
        $('.phone').find('em').hide();
    })
    $('.phone input').on('blur',function(){
        if($(this).val()==''){
            $('.phone').find('em').show();
        }   
    })
    $('.pass input').on('focus',function(){
        $('.pass').find('em').hide();
        $('.pass i').show();
    })
    $('.pass input').on('blur',function(){
        if($(this).val()==''){
            $('.pass').find('em').show();
        } 
        $('.pass i').hide(); 
    })
    $('.repass input').on('focus',function(){
        $('.repass').find('em').hide();
    })
    $('.repass input').on('blur',function(){
        if($(this).val()==''){
            $('.repass').find('em').show();
        }   
    })



    $(function () {

        jQuery.validator.addMethod("isMobile", function(value, element) {  
            var length = value.length;  
            var regPhone = /^1[3|5|7|8]\d{9}$/;  
            return this.optional(element) || ( length == 11 && regPhone.test( value ) )    
        }, "请正确填写您的手机号码");
        

        

        $("form").validate({
            
            errorElement: 'span',
            errorPlacement: function (error, element) {
                element.next('span').html(error);
            },

            success: function (span) {
                span.html('&nbsp;&nbsp;').css({'background':'url(../img/inputState-icon.png) no-repeat 0 -30px','padding':'6px'}).addClass("checked").removeClass('error');
            },

            rules: {
                phone: {
                    required: true,
                    minlength: 11,
                    maxlength: 11,
                    isMobile: true,
                    remote: {
                        type: "POST",
                        url: "../../php/reg.php",   
                    }
                },
                password: {
                    required: true,
                    minlength: 6,
                    maxlength: 20
                },
                repassword: {
                    required: true,
                    minlength: 6,
                    maxlength: 20,
                    equalTo: "#password"
                },
                checkbox:{
                    required: true,
                }
            },
            messages: {
                phone: {
                    required: "请输入手机号",
                    minlength: "请输入11位手机号",
                    maxlength: "请输入11位手机号",
                    isMobile:"请输入正确的手机号",
                    remote: "手机号已存在"
                },
                password: {
                    required: "请输入密码",
                    minlength: "密码长度不能小于 6 个字符",
                    maxlength: "密码长度不能大于于 20 个字符"
                },
                repassword: {
                    required: "请输入密码",
                    minlength: "密码长度不能小于  6 个字符",
                    maxlength: "密码长度不能大于于 20 个字符",
                    equalTo: "两次密码输入不一致"
                }
            },
           

        })
    });
})();