"use strict";

let money = prompt("Ваш бюджет на месяц?", ""),
    time = prompt("Введите дату в формате YYYY-MM-DD", "");
    
    let appData = {
        budget: money,
        timeData: time,
        expenses: {},
        optionalExpenses: {},
        income: [],
        saving: false
    };

    let  expenseQuestion1 = prompt("Введите обязательную статью расходов в этом месяце", ""),
         expenseAnswer1 = prompt("Во сколько обойдется?", ""),
         expenseQuestion2 = prompt("Введите обязательную статью расходов в этом месяце", ""),
         expenseAnswer2 = prompt("Во сколько обойдется?", "");

appData.expenses.expenseQuestion1 = expenseAnswer1;
appData.expenses.expenseQuestion2 = expenseAnswer2;


alert(appData.budget/30);

