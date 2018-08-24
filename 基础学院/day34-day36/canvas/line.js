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



        var data = sourceData[0].sale

        function maxData(data) {
            return Math.max(...data)
        }
        var max = maxData(data)
        console.log('max:'+max)
        var canvas = document.querySelector('#canvas')
        var context = canvas.getContext('2d')
        var width = canvas.width
        var height = canvas.height
        var offwidth = (width - 40) / (sourceData[0].sale.length + 1)
        // var gup = (width - 40) / sourceData[0].sale.length / 3 
        console.log('width:'+width,'height:'+height)
        context.moveTo(20, 20);
        context.lineTo(20, 480);
        context.lineTo(780, 480)
        context.stroke();
        sourceData[0].sale.forEach((e,i) => {
            var offheight = (height-40) / max * e
            var newHeight= (height-40) / max * sourceData[0].sale[i+1]
            console.log(e)
            context.beginPath();
            context.arc(offwidth*(i+1), -20 + height - offheight, 5, Math.PI / 180 * 0, Math.PI / 180 * 360);
            
            context.moveTo(offwidth*(i+1) , -20 + height - offheight);
            context.lineTo(offwidth*(i+2) , -20 + height - newHeight);
            // context.lineTo(20 + gup*(i+1) + offwidth*i + offwidth , -20 + height);
            context.stroke();
        });