import san from "san";
import { router } from "san-router";
import San from "./app.san";

let body = '123'
console.log(body)

console.log('hello webpack  San')

router.add({rule: '/',Component:San, target: '#app'})

router.start()
