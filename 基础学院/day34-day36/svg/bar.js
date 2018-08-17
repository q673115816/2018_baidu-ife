
let sourceData = [{
    product: "手机",
    region: "华东",
    sale: [120, 100, 140, 160, 180, 185, 190, 210, 230, 245, 255, 270]
}, {
    product: "手机",
    region: "华北",
    sale: [80, 70, 90, 110, 130, 145, 150, 160, 170, 185, 190, 200]
}, {
    product: "手机",
    region: "华南",
    sale: [220, 200, 240, 250, 260, 270, 280, 295, 310, 335, 355, 380]
}, {
    product: "笔记本",
    region: "华东",
    sale: [50, 60, 80, 110, 30, 20, 70, 30, 420, 30, 20, 20]
}, {
    product: "笔记本",
    region: "华北",
    sale: [30, 35, 50, 70, 20, 15, 30, 50, 710, 130, 20, 20]
}, {
    product: "笔记本",
    region: "华南",
    sale: [80, 120, 130, 140, 70, 75, 120, 90, 550, 120, 110, 100]
}, {
    product: "智能音箱",
    region: "华东",
    sale: [10, 30, 4, 5, 6, 5, 4, 5, 6, 5, 5, 25]
}, {
    product: "智能音箱",
    region: "华北",
    sale: [15, 50, 15, 15, 12, 11, 11, 12, 12, 14, 12, 40]
}, {
    product: "智能音箱",
    region: "华南",
    sale: [10, 40, 10, 6, 5, 6, 8, 6, 6, 6, 7, 26]
}]



;(function (){
    var data = sourceData[0].sale
    function maxData(data){
        return Math.max(...data)
    }
    var max = maxData(data)
    var svg = document.createElementNS('http://www.w3.org/2000/svg','svg')
    svg.setAttribute('width','900')
    svg.setAttribute('height','500')
    var rect = document.createElementNS('http://www.w3.org/2000/svg','rect');
    rect.setAttribute('x', 0);
    rect.setAttribute('y', 0);
    rect.setAttribute('width', 900);
    rect.setAttribute('height', 500);
    rect.setAttribute('fill', 'white');
    rect.setAttribute('stroke', 'blue');
    rect.setAttribute('stroke-width', '5');
    svg.appendChild(rect)
    var len = data.length
    var w = 900 / (len *2)
    for (let i = 0; i < data.length; i++) {
        const e = data[i];
        var h = 500 * e / max
        var rectS = document.createElementNS('http://www.w3.org/2000/svg','rect');
        rectS.setAttribute('x', w+ (1.8*w)*i);
        rectS.setAttribute('y', 500-h);
        rectS.setAttribute('width', w);
        rectS.setAttribute('height', h);
        rectS.setAttribute('fill', 'white');
        rectS.setAttribute('stroke', 'red');
        rectS.setAttribute('stroke-width', '3');
        svg.appendChild(rectS)
    }
    document.body.appendChild(svg);
})();
