$(function(){
    $('#result').on('mouseenter','tbody tr',function(e){
        var e = e || window.event
        var tr = e.currentTarget
        data = tr.dataset.data.split(',')
        initBar()
        initLine()
    })
    $('#result').on('mouseleave','tbody tr',function(e){
        init()
    })
})
