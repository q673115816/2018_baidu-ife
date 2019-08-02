var data = sourceData[0].sale
var svg = document.createElementNS('http://www.w3.org/2000/svg', 'svg')
svg.setAttribute('width', '900')
svg.setAttribute('height', '500')
function initBar(){
    var max = maxData(data)
    svg.innerHTML = ''
    var rect = document.createElementNS('http://www.w3.org/2000/svg', 'rect');
    rect.setAttribute('x', 0);
    rect.setAttribute('y', 0);
    rect.setAttribute('width', 900);
    rect.setAttribute('height', 500);
    rect.setAttribute('fill', 'white');
    rect.setAttribute('stroke', 'blue');
    rect.setAttribute('stroke-width', '5');
    svg.appendChild(rect)
    var len = data.length
    var w = 900 / (len * 2)
    for (let i = 0; i < data.length; i++) {
        const e = data[i];
        var h = 500 * e / max
        var rectS = document.createElementNS('http://www.w3.org/2000/svg', 'rect');
        rectS.setAttribute('x', w + (1.8 * w) * i);
        rectS.setAttribute('y', 500 - h);
        rectS.setAttribute('width', w);
        rectS.setAttribute('height', h);
        rectS.setAttribute('fill', 'white');
        rectS.setAttribute('stroke', 'red');
        rectS.setAttribute('stroke-width', '3');
        svg.appendChild(rectS)
    }
}
initBar()
document.querySelector('#svg').appendChild(svg);