const PRODUCT = 'product'
const REGION = 'region'
;(function(window) {
    function app() {
        this.getSource()
        this.init()   
    }
    app.prototype.getSource = function() {
        var source = localStorage.getItem('source') || sourceData
        this.source = source
        this.sort = {}
        this.sort[PRODUCT] = []
        this.sort[REGION] = []
        this.source.forEach(function(e) {
            if (this.sort[PRODUCT].indexOf(e[PRODUCT]) < 0) {
                this.sort[PRODUCT].push(e[PRODUCT])
            }
            if (this.sort[REGION].indexOf(e[REGION]) < 0) {
                this.sort[REGION].push(e[REGION])
            }
        }, this)
    }
    app.prototype.initHeader = function() {
        for (const key in sort) {
            if (sort.hasOwnProperty(key)) {
                const element = sort[key];
                var wrap = document
                element.forEach(function(ele) {

                })
            }
        }
    }
    app.prototype.initMain = function() {

    }
    app.prototype.init = function() {
        this.initHeader()
        this.initMain()
    }
    window.app = app
})(window)

new app()