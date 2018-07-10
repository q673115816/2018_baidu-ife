import _ from 'lodash'
import './style.css'
import Icon from './icon.png'

const a = 111;
console.log(a);

function component(){
    let element = document.createElement('div')
    element.innerHTML = _.join(['Hello','Webpack'],' ')
    element.classList.add('hello')

    var MyIcon = new Image()
    MyIcon.src = Icon
    element.appendChild(MyIcon)
    return element
}

document.body.appendChild(component())