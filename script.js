const students = ["Олександр", "Ігор", "Олена", "Іра", "Олексій", "Світлана"];
const themes = ["Диференційне рівняння", "Теорія автоматів", "Алгоритми і структури даних"];
const marks = [4, 5, 5, 3, 4, 5];

// 1. Розділіть студентів на пари(хлопець + дівчина) для работи над проєктом. У вас повинен вийти вкладений масив з парами студентів: [["Олександр", "Олена"], [..], [...]];
function getPairs(arrStudents) {
    let result = [];
    let girls = [];
    let boys = [];
    for (let i = 0; i < arrStudents.length; i++){
        if (arrStudents[i].endsWith("а") || arrStudents[i].endsWith("я")){
            girls.push(arrStudents[i]);
        } else{
            boys.push(arrStudents[i]);
        }
    }
    for (let j = 0; j < arrStudents.length / 2; j++){
        result.unshift([girls[j], boys[j]]);
    }
    return result
}
const pairs = getPairs(students);
console.log(pairs);

// 2. Зіставте пари з попереднього завдання та теми проєктів, над якими студенти будуть працювати.
function getPairsThemes(pairsArr, pairThemes){
    for (let i = 0; i < pairsArr.length; i++){
        pairsArr[i] = pairsArr[i].join(" і ");
        pairsArr[i] = pairsArr[i].split(",");
        pairsArr[i].push(pairThemes[i]);
    }
    return pairsArr;
}
const pairsThemes = getPairsThemes([...pairs], themes);

console.log(pairsThemes);

// 3. Зіставте оцінки(marks) зі студентом(students)
function getStudentsMarks(students, marks){
    for(let i = 0; i < students.length; i++){
        students[i] = students[i].split(",");
        students[i].push(marks[i])
    }
    return studentsWithMarks = students;
}
const studentsMarks = getStudentsMarks(students, marks);
console.log(studentsMarks);

// 4. Поставте кожній парі випадкову оцінку(від 1 до 5) за проєкт(тут функція буде нечистою, але не повинна мутувати массив)
function getRandomMark(min, max){
    const randomNumber = Math.floor(Math.random() * (++max - min) + min);
    return randomNumber;
}

function getPairsMarks(pairsWithThemes){
    let result = pairsWithThemes;
    for (let i = 0; i < result.length; i++){
        result[i].push(getRandomMark(1, 5));
    }
    return result;
}
// const pairsMarks = getPairsMarks(getPairsThemes([...pairs], themes));
const pairsMarks = getPairsMarks([...pairsThemes]);
console.log(pairsMarks);