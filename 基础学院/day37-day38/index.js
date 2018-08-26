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
    $('button').on('click',function(){
        alert('保存')
        var str = JSON.stringify(sourceData)
        console.log(str)
        localStorage.setItem(`sourceData`, str);
    })
})
