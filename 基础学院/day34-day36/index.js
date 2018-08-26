$(function(){
    $('#result').on('mouseover','tbody tr',function(e){
        var e = e || window.event
        var tr = e.currentTarget
        data = tr.dataset.data.split(',')
        max = maxData(data)
        initBar()
        initLine()
    })
    $('#result').on('mouseout','tbody tr',function(e){
        init()
    })
})
