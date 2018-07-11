import san from "san";
import { router } from "san-router";
import San from "./app.san";

console.log('hello webpack  San')

router.add({rule: '/',Component:San, target: '#app'})

router.start()

var MyApp = san.defineComponent()

var myApp = new MyApp()

myApp.attach(document.body)