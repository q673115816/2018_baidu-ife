var canvas = document.querySelector('#canvas')
var context = canvas.getContext('2d')
var width = canvas.width
var height = canvas.height
var offwidth = (width - 40) / (data.length + 1)

function bigin() {
    context.moveTo(20, 20);
    context.lineTo(20, 480);
    context.lineTo(780, 480)
    context.strokeStyle = '#000'
    context.stroke();
}

function initLine() {
    function maxData(data) {
        return Math.max(...data)
    }
    var max = maxData(data)
    context.clearRect(0, 0, width, height)
    bigin()
    var color = randomHexColor()
    data.forEach((e, i) => {
        var offheight = (height - 40) / max * e
        var newHeight = (height - 40) / max * data[i + 1]
        context.beginPath();
        context.strokeStyle = color
        context.fillStyle = color
        context.arc(offwidth * (i + 1), height - offheight - 20, 5, Math.PI / 180 * 0, Math.PI / 180 * 360);
        context.fill()
        context.moveTo(offwidth * (i + 1), height - offheight - 20);
        context.lineTo(offwidth * (i + 2), height - newHeight - 20);
        context.stroke();
    });
}

function init() {
    context.clearRect(0, 0, width, height)
    bigin()
    var filter = filter || _filter
    sourceData.forEach((e, i) => {
        if (filter.product.includes(e.product) && filter.region.includes(e.region)) {
            var data = e.sale
            var color = randomHexColor()
            data.forEach((e, i) => {
                var offheight = (height - 40) / max * e
                var newHeight = (height - 40) / max * data[i + 1]
                context.beginPath();
                context.strokeStyle = color
                context.fillStyle = color
                context.arc(offwidth * (i + 1), height - offheight - 20, 5, Math.PI / 180 * 0, Math.PI / 180 * 360);
                context.fill()
                context.moveTo(offwidth * (i + 1), height - offheight - 20);
                context.lineTo(offwidth * (i + 2), height - newHeight - 20);
                context.stroke();
            })
        }
    })
}

function randomHexColor() { //随机生成十六进制颜色
    var hex = Math.floor(Math.random() * 16777216).toString(16); //生成ffffff以内16进制数
    while (hex.length < 6) { //while循环判断hex位数，少于6位前面加0凑够6位
        hex = '0' + hex;
    }
    return '#' + hex; //返回‘#'开头16进制颜色
}
init()