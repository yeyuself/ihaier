;
(function () {
    var $phone = $('#phone');
    var $password = $('#password');
    var $repassword = $('#repassword');
    $('.phone input').on('focus',function(){
        $('.phone').find('em').hide();
    })
    $('.phone input').on('focusout',function(){
        if($(this).val()==''){
            $('.phone').find('em').show();
        }   
    })
    $('.pass input').on('focus',function(){
        $('.pass').find('em').hide();
    })
    $('.pass input').on('focusout',function(){
        if($(this).val()==''){
            $('.pass').find('em').show();
        }   
    })
    $('.repass input').on('focus',function(){
        $('.repass').find('em').hide();
    })
    $('.repass input').on('focusout',function(){
        if($(this).val()==''){
            $('.repass').find('em').show();
        }   
    })

    $().ready(function () {

        jQuery.validator.addMethod("isMobile", function(value, element) {  
            var length = value.length;  
            var regPhone = /^1[3|5|7|8]\d{9}$/;  
            /* if(value!=''){if(!regPhone.test(value)){return false;}};  
        return true;    */
            return this.optional(element) || ( length == 11 && regPhone.test( value ) );    
        }, "请正确填写您的手机号码");

        $.extend($.validator.messages, {
            required: "必选字段",
            remote: "请修正该字段",
            email: "请输入正确格式的电子邮件",
            url: "请输入合法的网址",
            date: "请输入合法的日期",
            dateISO: "请输入合法的日期 (ISO).",
            number: "请输入合法的数字",
            digits: "只能输入整数",
            creditcard: "请输入合法的信用卡号",
            equalTo: "请再次输入相同的值",
            accept: "请输入拥有合法后缀名的字符串",
            maxlength: $.validator.format("请输入一个长度最多是 {0} 的字符串"),
            minlength: $.validator.format("请输入一个长度最少是 {0} 的字符串"),
            rangelength: $.validator.format("请输入一个长度介于 {0} 和 {1} 之间的字符串"),
            range: $.validator.format("请输入一个介于 {0} 和 {1} 之间的值"),
            max: $.validator.format("请输入一个最大为 {0} 的值"),
            min: $.validator.format("请输入一个最小为 {0} 的值")
        });

        $("form").validate({
            
            errorElement: 'span',
            errorPlacement: function (error, element) {

                element.after(error).next().next().remove('span');
            },
            success: function (span) {
                //span.parent().removeClass('false').addClass('right');
                span.html('√');
            },

            rules: {
                phone: {
                    required: true,
                    minlength: 11,
                    maxlength: 11,
                    isMobile: true
                    /* remote: {
                        type: "POST",
                        url: "php/reg.php", //请求地址  
                    } */
                },
                password: {
                    required: true,
                    minlength: 6
                },
                repassword: {
                    required: true,
                    minlength: 6,
                    equalTo: "#password"
                },
            },
            messages: {
                phone: {
                    required: "请输入手机号",
                    minlength: "请输入11位手机号",
                    maxlength: "请输入11位手机号",
                    isMobile:"请输入正确的手机号",
                    //remote: "手机号已存在"
                },
                password: {
                    required: "请输入密码",
                    minlength: "密码长度不能小于 6 个字符"
                },
                repassword: {
                    required: "请输入密码",
                    minlength: "密码长度不能小于  6 个字符",
                    equalTo: "两次密码输入不一致"
                }
            }
        })
    });
})();