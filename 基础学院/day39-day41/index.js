$(function () {
    // 鼠标滑入
    $('#result').on('mouseenter', 'tbody tr', function (e) {
        var e = e || window.event
        var tr = e.currentTarget
        data = tr.dataset.data.split(',')
        initBar()
        initLine()
    })
    // 鼠标滑出
    $('#result').on('mouseleave', 'tbody tr', function (e) {
        init()
    })
    // 输入框
    $('#result').on('keyup', 'tbody input', function (e) {
        var e = e || window.event
        var t = e.target
        if(e.originalEvent.keyCode=='27'){
            $(this).nextAll('.btn-cancel').click()
        }
        if(e.originalEvent.keyCode=='13'){
            $(this).nextAll('.btn-confirm').click()
        }
    // td点击
    }).on('click', 'tbody td', function (e) {
        var e = e || window.event
        var t = e.currentTarget
        $('#result').find('.btn-cancel').click()
        $(t).find('span').hide()
        $(t).find('.input-wrap').show().find('input').focus();
    // 确定点击
    }).on('click', 'tbody .btn-confirm', function (e) {
        var e = e || window.event
        e.stopPropagation()
        var t = e.target
        var val = $(t).prev('input').val()
        var regPos = /^\d+(\.\d+)?$/; //非负浮点数
        var regNeg = /^(-(([0-9]+\.[0-9]*[1-9][0-9]*)|([0-9]*[1-9][0-9]*\.[0-9]+)|([0-9]*[1-9][0-9]*)))$/; //负浮点数
        if (regPos.test(val) || regNeg.test(val)) {
            $(t).parent().prev('span').show().text(val);
            $(t).parent().hide().data('val', val);
            return true;
        } else {
            window.alert('请输入数字')
        }
    // 取消点击
    }).on('click', 'tbody .btn-cancel', function (e) {
        var e = e || window.event
        e.stopPropagation()
        var t = e.target
        var val = $(t).parent()[0].dataset.val
        $(t).prevAll('input').val(val);
        var val = $(t).find('input').val()
        $(t).parent().hide()
        $(t).parent().prev('span').show()
    })
    // 保存按钮
    $('button').on('click', function () {
        var tr = $('tbody tr')
        tr.each(function (i, e) {
            var arr = []
            var input = $(e).find('input')
            input.each(function (i, e) {
                arr.push(e.value)
            })
            sourceData[e.dataset.key].sale = arr
        })
        var str = JSON.stringify(sourceData)
        console.log(str)
        localStorage.setItem(`sourceData`, str);
    })
})