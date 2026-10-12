const products = [
    { id: 1, name: "iPhone 15", category: "phone", price: 900, quantity: 5 },
    { id: 2, name: "Samsung S24", category: "phone", price: 800, quantity: 3 },
    { id: 3, name: "MacBook Air", category: "laptop", price: 1200, quantity: 2 },
    { id: 4, name: "Lenovo ThinkPad", category: "laptop", price: 1000, quantity: 4 },
    { id: 5, name: "AirPods", category: "accessory", price: 200, quantity: 10 }
];

const productMap = new Map(products.map(p => [p.id, p]));
console.log(productMap.get(3));

const categoryCount = new Map();
const categoryValue = new Map();
const categoryProducts = new Map();

for (const p of products) {
    categoryCount.set(p.category, (categoryCount.get(p.category) || 0) + 1);
    categoryValue.set(p.category, (categoryValue.get(p.category) || 0) + p.price * p.quantity);

    if (!categoryProducts.has(p.category)) {
        categoryProducts.set(p.category, []);
    }

    categoryProducts.get(p.category).push(p);
}

console.log(categoryCount);
console.log(categoryValue);

let maxCategory = "";
let maxValue = 0;

for (const [category, value] of categoryValue) {
    if (value > maxValue) {
        maxValue = value;
        maxCategory = category;
    }
}

console.log(maxCategory, maxValue);
console.log(categoryProducts);


const students = [
    { id: 1, name: "Ali", group: "A", score: 85 },
    { id: 2, name: "Vali", group: "B", score: 72 },
    { id: 3, name: "Hasan", group: "A", score: 95 },
    { id: 4, name: "Husan", group: "B", score: 88 },
    { id: 5, name: "Aziz", group: "A", score: 65 },
    { id: 6, name: "Sardor", group: "B", score: 91 }
];

const groupMap = new Map();
const studentMap = new Map(students.map(s => [s.id, s]));

for (const s of students) {
    if (!groupMap.has(s.group)) {
        groupMap.set(s.group, []);
    }

    groupMap.get(s.group).push(s);
}

const groupAverage = new Map();
const groupBest = new Map();

for (const [group, list] of groupMap) {
    let sum = 0;
    let best = list[0];

    for (const s of list) {
        sum += s.score;

        if (s.score > best.score) {
            best = s;
        }
    }

    groupAverage.set(group, sum / list.length);
    groupBest.set(group, best);
}

console.log(groupMap);
console.log(studentMap);
console.log(groupAverage);
console.log(groupBest);

let bestGroup = "";
let bestAverage = -Infinity;

for (const [group, average] of groupAverage) {
    if (average > bestAverage) {
        bestAverage = average;
        bestGroup = group;
    }
}

console.log(bestGroup, bestAverage);


const sales = [
    { userId: 1, productId: 101, amount: 500 },
    { userId: 2, productId: 102, amount: 300 },
    { userId: 1, productId: 103, amount: 700 },
    { userId: 3, productId: 101, amount: 200 },
    { userId: 2, productId: 103, amount: 400 },
    { userId: 1, productId: 101, amount: 600 }
];

const userSpending = new Map();
const productSales = new Map();
const userProductSales = new Map();

for (const sale of sales) {
    userSpending.set(
        sale.userId,
        (userSpending.get(sale.userId) || 0) + sale.amount
    );

    productSales.set(
        sale.productId,
        (productSales.get(sale.productId) || 0) + 1
    );

    if (!userProductSales.has(sale.userId)) {
        userProductSales.set(sale.userId, new Map());
    }

    const innerMap = userProductSales.get(sale.userId);

    innerMap.set(
        sale.productId,
        (innerMap.get(sale.productId) || 0) + sale.amount
    );
}

let topSpender = null;
let highestSpending = -Infinity;

for (const [userId, amount] of userSpending) {
    if (amount > highestSpending) {
        highestSpending = amount;
        topSpender = userId;
    }
}

let bestSeller = null;
let highestSales = 0;

for (const [productId, count] of productSales) {
    if (count > highestSales) {
        highestSales = count;
        bestSeller = productId;
    }
}

console.log(userSpending);
console.log(topSpender, highestSpending);
console.log(productSales);
console.log(bestSeller, highestSales);
console.log(userProductSales);


const users = [
    { id: 1, name: "Ali" },
    { id: 2, name: "Vali" },
    { id: 3, name: "Hasan" }
];

const orders = [
    { id: 101, userId: 1, amount: 500 },
    { id: 102, userId: 2, amount: 300 },
    { id: 103, userId: 1, amount: 700 },
    { id: 104, userId: 3, amount: 200 },
    { id: 105, userId: 1, amount: 100 }
];

const userLookup = new Map(users.map(u => [u.id, u]));
const userOrders = new Map();

for (const user of users) {
    userOrders.set(user.id, {
        id: user.id,
        name: user.name,
        totalOrders: 0,
        totalAmount: 0
    });
}

for (const order of orders) {
    const user = userLookup.get(order.userId);

    if (user) {
        const data = userOrders.get(order.userId);
        data.totalOrders++;
        data.totalAmount += order.amount;
    }
}

console.log([...userOrders.values()]);


const messages = [
    { userId: 1, text: "Salom" },
    { userId: 2, text: "Hi" },
    { userId: 1, text: "Qalaysan?" },
    { userId: 3, text: "Hello" },
    { userId: 2, text: "Good" },
    { userId: 1, text: "Yaxshi" }
];

const messageMap = new Map();

for (const message of messages) {
    if (!messageMap.has(message.userId)) {
        messageMap.set(message.userId, []);
    }

    messageMap.get(message.userId).push(message.text);
}

let mostMessagesUser = null;
let mostMessagesCount = 0;

for (const [userId, texts] of messageMap) {
    if (texts.length > mostMessagesCount) {
        mostMessagesCount = texts.length;
        mostMessagesUser = userId;
    }
}

const atLeastTwoMessages = [...messageMap]
    .filter(([userId, texts]) => texts.length >= 2);

const messageCounts = [...messageMap].map(([userId, texts]) => ({
    userId,
    messageCount: texts.length
}));

console.log(messageMap);
console.log(mostMessagesUser, mostMessagesCount);
console.log(atLeastTwoMessages);
console.log(messageCounts);


const groupA = ["Ali", "Vali", "Hasan", "Sardor", "Aziz"];
const groupB = ["Vali", "Hasan", "Jasur", "Sardor", "Bekzod"];

const setA = new Set(groupA);
const setB = new Set(groupB);

const commonStudents = [...setA].filter(name => setB.has(name));
const onlyA = [...setA].filter(name => !setB.has(name));
const onlyB = [...setB].filter(name => !setA.has(name));
const allStudents = new Set([...setA, ...setB]);

console.log(commonStudents);
console.log(onlyA);
console.log(onlyB);
console.log(allStudents);


const text = "javascript";
const uniqueChars = new Set(text.toLowerCase());

const seenChars = new Set();
let firstRepeated = null;

for (const char of text.toLowerCase()) {
    if (seenChars.has(char)) {
        firstRepeated = char;
        break;
    }

    seenChars.add(char);
}

console.log(uniqueChars);
console.log(uniqueChars.size);
console.log(firstRepeated);


const text1 = `
javascript is a programming language
and javascript is very popular
`;

const text2 = `
typescript is a programming language
and javascript can run in browser
`;

const words1 = new Set(text1.toLowerCase().match(/[a-z]+/g) || []);
const words2 = new Set(text2.toLowerCase().match(/[a-z]+/g) || []);

const commonWords = [...words1].filter(word => words2.has(word));
const onlyFirstText = [...words1].filter(word => !words2.has(word));
const onlySecondText = [...words2].filter(word => !words1.has(word));

console.log(words1);
console.log(words2);
console.log(commonWords);
console.log(onlyFirstText);
console.log(onlySecondText);


const permissions = [
    "read", "write", "read", "delete",
    "update", "write", "read", "delete"
];

const required = ["read", "write", "update"];
const permissionSet = new Set(permissions);

const hasAllPermissions = required.every(permission =>
    permissionSet.has(permission)
);

const missingPermissions = required.filter(permission =>
    !permissionSet.has(permission)
);

console.log(permissionSet);
console.log(hasAllPermissions);
console.log(missingPermissions);


const visitors = [
    101, 102, 103, 101, 104,
    102, 105, 103, 106, 101
];

const uniqueVisitors = new Set(visitors);
const visitorCounts = new Map();

for (const id of visitors) {
    visitorCounts.set(id, (visitorCounts.get(id) || 0) + 1);
}

const multipleVisits = [...visitorCounts]
    .filter(([id, count]) => count > 1);

const singleVisits = [...visitorCounts]
    .filter(([id, count]) => count === 1);

let mostVisited = null;
let mostVisits = 0;

for (const [id, count] of visitorCounts) {
    if (count > mostVisits) {
        mostVisited = id;
        mostVisits = count;
    }
}

console.log(uniqueVisitors);
console.log(uniqueVisitors.size);
console.log(visitorCounts);
console.log(multipleVisits);
console.log(singleVisits);
console.log(mostVisited, mostVisits);


const lessons = [
    { studentId: 1, courseId: 101, lessonId: 1 },
    { studentId: 1, courseId: 101, lessonId: 2 },
    { studentId: 1, courseId: 101, lessonId: 1 },
    { studentId: 2, courseId: 101, lessonId: 1 },
    { studentId: 2, courseId: 102, lessonId: 5 },
    { studentId: 1, courseId: 102, lessonId: 5 }
];

const studentCourses = new Map();

for (const lesson of lessons) {
    if (!studentCourses.has(lesson.studentId)) {
        studentCourses.set(lesson.studentId, new Map());
    }

    const courses = studentCourses.get(lesson.studentId);

    if (!courses.has(lesson.courseId)) {
        courses.set(lesson.courseId, new Set());
    }

    courses.get(lesson.courseId).add(lesson.lessonId);
}

const studentLessonCounts = new Map();

for (const [studentId, courses] of studentCourses) {
    let total = 0;

    for (const lessonSet of courses.values()) {
        total += lessonSet.size;
    }

    studentLessonCounts.set(studentId, total);
}

console.log(studentCourses);
console.log(studentLessonCounts);


const commands = [
    { userId: 1, command: "/start" },
    { userId: 1, command: "/help" },
    { userId: 1, command: "/start" },
    { userId: 2, command: "/start" },
    { userId: 2, command: "/stats" },
    { userId: 2, command: "/stats" },
    { userId: 3, command: "/help" }
];

const userCommands = new Map();
const commandCounts = new Map();

for (const item of commands) {
    if (!userCommands.has(item.userId)) {
        userCommands.set(item.userId, new Set());
        commandCounts.set(item.userId, 0);
    }

    userCommands.get(item.userId).add(item.command);
    commandCounts.set(
        item.userId,
        commandCounts.get(item.userId) + 1
    );
}

const commandStats = new Map();

for (const [userId, commandSet] of userCommands) {
    commandStats.set(userId, {
        totalCommands: commandCounts.get(userId),
        uniqueCommands: commandSet.size
    });
}

let maxCommands = 0;
let mostActiveUsers = [];

for (const [userId, count] of commandCounts) {
    if (count > maxCommands) {
        maxCommands = count;
        mostActiveUsers = [userId];
    } else if (count === maxCommands) {
        mostActiveUsers.push(userId);
    }
}

console.log(userCommands);
console.log(commandCounts);
console.log(commandStats);
console.log(mostActiveUsers);


const purchases = [
    { userId: 1, productId: 101, category: "phone", amount: 900 },
    { userId: 1, productId: 102, category: "accessory", amount: 200 },
    { userId: 1, productId: 101, category: "phone", amount: 900 },
    { userId: 2, productId: 103, category: "laptop", amount: 1200 },
    { userId: 2, productId: 104, category: "accessory", amount: 100 }
];

const userProducts = new Map();
const userExpenses = new Map();
const userCategories = new Map();

for (const purchase of purchases) {
    if (!userProducts.has(purchase.userId)) {
        userProducts.set(purchase.userId, new Set());
        userExpenses.set(purchase.userId, 0);
        userCategories.set(purchase.userId, new Set());
    }

    userProducts.get(purchase.userId).add(purchase.productId);

    userExpenses.set(
        purchase.userId,
        userExpenses.get(purchase.userId) + purchase.amount
    );

    userCategories.get(purchase.userId).add(purchase.category);
}

let biggestBuyer = null;
let biggestExpense = -Infinity;

for (const [userId, expense] of userExpenses) {
    if (expense > biggestExpense) {
        biggestExpense = expense;
        biggestBuyer = userId;
    }
}

const purchaseStats = new Map();

for (const [userId, productSet] of userProducts) {
    purchaseStats.set(userId, {
        uniqueProducts: [...productSet],
        totalExpense: userExpenses.get(userId),
        categoryCount: userCategories.get(userId).size
    });
}

console.log(purchaseStats);
console.log(biggestBuyer, biggestExpense);