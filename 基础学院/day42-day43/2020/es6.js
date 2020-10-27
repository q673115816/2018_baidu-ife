"use strict";
// 餐厅类
// 属性：金钱，座位数量、职员列表
// 方法：招聘职员，解雇职员
// 职员类
// 属性：ID，姓名，工资
// 方法：完成一次工作
// 服务员类，继承自职员
// 完成一次工作：如果参数是个数组，则记录客人点菜，如果参数不是数组则是上菜行为
// 厨师类，继承自职员
// 完成一次工作：烹饪出菜品
// 顾客类
// 方法：点菜，吃
// 菜品类
// 属性：名字、烹饪成本、价格
Object.defineProperty(exports, "__esModule", { value: true });
let menu = [
    {
        name: '鸡腿',
        cost: 10,
        price: 20
    },
    {
        name: '鸡翅',
        cost: 12,
        price: 24
    },
    {
        name: '鸡屁股',
        cost: 20,
        price: 40
    }
];
class Restaurant {
    constructor(props) {
        this.id = 0;
        this.cash = props.cash;
        this.seats = props.seats;
        this.staff = props.staff;
    }
    hire(person) {
        this.id++;
        person.id = this.id;
        this.staff.push(person);
    }
    fire(person) {
        this.staff = this.staff.filter(staff => staff !== person);
        person.id = -1;
    }
    getin(customer) {
        let findWaiter = this.staff.find(staff => staff instanceof Waiter);
        if (!findWaiter) {
            console.log('没有服务员');
            return;
        }
        if (this.seats > 0) {
            this.seats = this.seats - 1;
        }
        findWaiter.work(customer.order());
    }
    getout() {
    }
}
class Staff {
    constructor() {
        this.ID = -1;
    }
    get id() {
        return this.ID;
    }
    set id(id) {
        this.ID = id;
    }
}
class Cook extends Staff {
    constructor(name, salary) {
        super();
        this.name = name;
        this.salary = salary;
    }
    work(foodname) {
        let food = menu.find(item => item.name === foodname);
        if (food !== undefined) {
            return new Food(food.name, food.cost, food.price);
        }
    }
}
class Waiter extends Staff {
    constructor(name, salary) {
        super();
        this.name = name;
        this.salary = salary;
    }
    work(food) {
        if (Array.isArray(food)) {
            console.log('点菜');
            return food;
        }
        else {
            console.log('上菜');
        }
    }
}
class Customer {
    order() {
        let tice = Math.random() * menu.length >> 0;
        let foods = menu.map(food => {
            if (tice > 0 && Math.random() < 0.5) {
                tice--;
                return false;
            }
            return food.name;
        }).filter(food => !!food);
        return foods;
    }
    eat() {
        console.log('吃');
    }
}
class Food {
    constructor(name, cost, price) {
        this.name = name;
        this.cost = cost;
        this.price = price;
    }
}
