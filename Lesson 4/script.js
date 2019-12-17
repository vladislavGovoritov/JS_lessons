"use strict";
let money, time;

function start() {
    money = +prompt("Ваш бюджет на месяц?", "");
    time = prompt("Введите дату в формате YYYY-MM-DD", "");

    while (isNaN(money) || money == "" || money == null) {
        money = +prompt("Ваш бюджет на месяц?", "");
    }
}

start();

let appData = {
    budget: money,
    timeData: time,
    expenses: {},
    optionalExpenses: {},
    income: [],
    saving: true,
    chooseExpenses: function() {
        for (let i = 0; i < 2; i++) {
            let a = prompt("Введите обязательную статью расходов в этом месяце", ""),
                b = prompt("Во сколько обойдется?", "");
    
            if ((typeof (a)) === 'string' && (typeof (a)) != null && (typeof (b)) != null &&
                a != '' && b != '' && a.length < 50) {
                console.log("done");
                appData.expenses[a] = b;
            } else {
                console.log("bad result");
                i--;
            }
        }
    },
    detectDayBudget: function() {
        appData.moneyPerDay = (appData.budget / 30).toFixed();
        alert("Ежедневный бюджет" + appData.moneyPerDay);
    },
    detectLevel: function() {
        if (appData.moneyPerDay < 100) {
            console.log("Минимальный уровень достатка");
        } else if (appData.moneyPerDay > 100 && appData.moneyPerDay < 2000) {
            console.log("Средний уровень достатка");
        } else if (appData.moneyPerDay > 2000) {
            console.log("Высокий уровень достатка");
        } else {
            console.log("Произошла ошибка");
        }
    },
    checkSavings: function() {
        if (appData.saving == true) {
            let save = +prompt("Какова сумма накоплений?"),
                percent = +prompt("Под какой процент?");
    
            appData.monthIncome = Math.round(save / 100 / 12 * percent);
            alert("Доход в месяц с вашего депозита :" + appData.monthIncome);
        }
    },
    chooseOptExpenses: function() {
        for(let i = 1; i <= 3; i++) {
            let questionOptExpenses = prompt("Статья необязательных расходов?", "");
            appData.optionalExpenses[i] = questionOptExpenses;
        }
    },
    chooseIncome: function() {
        let items = prompt("Что приносит дполнительный доход (Перечислите через запятую)", "");

        if(typeof(items) != 'string' || items == "" || typeof(items) == null) {
            items = prompt("Что приносит дполнительный доход (Перечислите через запятую)", "");
        }
        appData.income = items.split(",");
        appData.income.push(prompt("Может что-то ещё?", ""));
        appData.income.sort();
        appData.income.forEach((item, i ) => {
            alert("Способы дополнительного заработка: " + (i+1) + "-" + item);
        });

    }
};

for(let key in appData) {
    console.log("Наша программа включает в себя данные: " + key + " Со значением: " + appData[key]);
}
