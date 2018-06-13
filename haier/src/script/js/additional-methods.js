;
(function () {
    jQuery.validator.addMethod("isMobile", function (value, element) {
        var length = value.length;
        var regPhone = /^1[3|5|7|8]\d{9}$/;
        return this.optional(element) || (length == 11 && regPhone.test(value));
    }, "请正确填写您的手机号码")
})()