async function fetchJson(url) {
    return await (await fetch(url)).json()
}
let sourceData
async function getSourceData() {
    if (localStorage.getItem('sourceData')) {
        sourceData = JSON.parse(localStorage.getItem('sourceData'))
        return
    }
    await fetchJson('http://localhost:1111/sourceData')
        .then(res => {
            sourceData = res
            localStorage.setItem('sourceData', JSON.stringify(res))
            console.log(sourceData);
        })
}

function init(data) {
    let app = document.querySelector('#app')
    let table = document.createElement('table')
    let activeTD
    data.forEach((col, x) => {
        let tr = document.createElement('tr')
        let product = document.createElement('th')
        product.textContent = col.product
        tr.append(product)
        let region = document.createElement('th')
        region.textContent = col.region
        tr.append(region)
        col.sale.forEach((row, y) => {
            let td = document.createElement('td')
            // td.textContent = row
            let text = document.createElement('span')
            td.dataset.x = x
            td.dataset.y = y
            text.classList.add('text')
            text.textContent = row
            let edit = document.createElement('span')
            edit.classList.add('edit')
            edit.textContent = '编辑'

            td.append(text)
            td.append(edit)
            tr.append(td)
        })
        table.append(tr)


    })
    document.addEventListener('click', (e) => {
        if (Object.keys(actions).includes(e.target.classList.value)) {
            actions[e.target.classList.value]()
        } else if (activeTD && !activeTD.contains(e.target)) {
            console.log('!==');
            actions['cancel'](activeTD)
        }
    })

    document.addEventListener('keyup', (e) => {
        if (e.target.nodeName === 'INPUT') {
            if (e.keyCode === 13) {
                actions['confirm']()
            }
            if (e.keyCode === 27) {
                actions['cancel']()
            }
        }
    })

    app.append(table)
    let save = document.createElement('button')
    save.textContent = 'save'
    app.append(save)
    save.addEventListener('click', () => {
        localStorage.setItem('sourceData', JSON.stringify(sourceData))
    })

    let actions = {
        query: function query(node) {
            let e = window.event
            let td = e.target.closest('td')
            if (node) {
                td = node
            }
            let edit = td.querySelector('.edit')
            let text = td.querySelector('.text')
            let input = text.querySelector('input')
            let cancel = td.querySelector('.cancel')
            let confirm = td.querySelector('.confirm')
            return {
                td,
                edit,
                text,
                input,
                cancel,
                confirm
            }
        },
        returnEdit({ td, confirm, cancel, input }) {
            activeTD = null
            confirm.remove()
            cancel.remove()
            input.remove()
            let edit = document.createElement('span')
            edit.classList.add('edit')
            edit.textContent = '编辑'
            td.append(edit)
        },

        edit: function (e) {
            let { td, edit, text } = this.query()
            activeTD = td
            let input = document.createElement('input')
            input.value = text.textContent
            input.dataset.default = text.textContent
            text.textContent = ''
            text.append(input)
            input.focus()
            edit.remove()
            let confirm = document.createElement('span')
            confirm.classList.add('confirm')
            confirm.textContent = '确定'
            td.append(confirm)
            let cancel = document.createElement('span')
            cancel.classList.add('cancel')
            cancel.textContent = '取消'
            td.append(cancel)
        },
        confirm: function (e) {
            let { td, text, confirm, cancel, input } = this.query()
            if (!/^\d+$/g.test(input.value)) {
                alert('请输入整数')
                return false
            }
            text.textContent = input.value
            sourceData[td.dataset.x].sale[td.dataset.y] = input.value

            this.returnEdit({ td, confirm, cancel, input })
        },
        cancel: function (node) {
            let { td, text, confirm, cancel, input } = this.query(node)
            text.textContent = input.dataset.default

            this.returnEdit({ td, confirm, cancel, input })
        }
    }
}

(async function () {
    await getSourceData()
    init(sourceData)
})()
