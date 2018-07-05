import san from "san";
import './scss/style.scss'
import main from "./template/main.san";
import {
    Gender
} from './js/base.js'
var MyApp = san.defineComponent({
    template: `
    <div>
        <p>Hello {{name}}!</p>
        <ul>
            <li s-for="item in list">{{item}}</li>
        </ul>
        <div>
            <input value="{= name =}" placeholdeer="please input">
            <span>{{name}}</span>
        </div>
    </div>`,
    initData: function () {
        return {
            name: 'San'
        }
    },
    attached: function () {
        this.data.set('list', ['san', 'er', 'esui', 'etpl', 'esl'])
    }
    
})

const rose = new Gender('rose', 'male')
rose.sayGender()
console.log(rose)
var myApp = new MyApp()
myApp.attach(document.body)