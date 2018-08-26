var data = sourceData[0].sale

function maxData(data) {
    return Math.max(...data)
}
var max = maxData(data)
console.log('max:' + max)
var canvas = document.querySelector('#canvas')
var context = canvas.getContext('2d')
var width = canvas.width
var height = canvas.height
var offwidth = (width - 40) / (data.length + 1)
// var gup = (width - 40) / sourceData[0].sale.length / 3 
console.log('width:' + width, 'height:' + height)
context.moveTo(20, 20);
context.lineTo(20, 480);
context.lineTo(780, 480)
context.stroke();

function initLine() {
    console.log('initLine')
    context.clearRect(0, 0, width, height)
    data.forEach((e, i) => {
        var offheight = (height - 40) / max * e
        var newHeight = (height - 40) / max * data[i + 1]
        context.beginPath();
        context.arc(offwidth * (i + 1), -20 + height - offheight, 5, Math.PI / 180 * 0, Math.PI / 180 * 360);
        context.fill()
        context.moveTo(offwidth * (i + 1), -20 + height - offheight);
        context.lineTo(offwidth * (i + 2), -20 + height - newHeight);
        // context.lineTo(20 + gup*(i+1) + offwidth*i + offwidth , -20 + height);
        context.stroke();
    });
}

function init() {
    var filter = filter || _filter
    var long = [filter.product.length, filter.region.length]
    sourceData.forEach((e, i) => {
        if (filter.product.includes(e.product) && filter.region.includes(e.region)) {
            var data =e.sale
            var color = randomHexColor()
            e.sale.forEach((e, i) => {
                var max = maxData(data)
                var offheight = (height - 40) / max * e
                var newHeight = (height - 40) / max * data[i + 1]
                context.beginPath();
                context.strokeStyle = color
                context.fillStyle = color
                context.arc(offwidth * (i + 1), -20 + height - offheight, 5, Math.PI / 180 * 0, Math.PI / 180 * 360);
                context.fill()
                context.moveTo(offwidth * (i + 1), -20 + height - offheight);
                context.lineTo(offwidth * (i + 2), -20 + height - newHeight);
                // context.lineTo(20 + gup*(i+1) + offwidth*i + offwidth , -20 + height);
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