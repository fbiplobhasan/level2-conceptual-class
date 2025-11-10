const students = [
    { id: 1, name: "Rafi" },
    { id: 2, name: "Sadia" },
    { id: 3, name: "Noman" },
];

// Snacks List
const snacks = [
    { id: 201, studentId: 1, title: "chocolate" },
    { id: 202, studentId: 2, title: "chips" },
    { id: 203, studentId: 1, title: "cooies" },
    { id: 204, studentId: 3, title: "juice" },
    { id: 205, studentId: 2, title: "nuts" },
];

const mainBasket = snacks.reduce((basket, snack) => {
    // console.log(basket);
    // console.log(snack);
    const { studentId } = snack;

    if (!basket[studentId]) {
        basket[studentId] = [];
    }
    basket[studentId].push(snack);
    return basket;
}, {})
// console.log(mainBasket);

const studenWithSnaks = students.map(student => ({
    ...student,
    basket: mainBasket[student.id] || []
}))

console.log(JSON.stringify(studenWithSnaks));

