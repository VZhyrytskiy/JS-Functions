console.log('Topic: Functions');

// Task 1. FDS
// RU: Создайте функцию conc, которая должна конкатенировать значения
//     двух параметров a и b и возвращать строку.
//     Используйте Function Declaration Statement (FDS).
//     Вызовите функцию до ее объявления.
//     Тестовые данные:
//     a = '1', b = '1', result = '11'
//     a = 1, b = 1, result = '11'
// EN: Create a function conc, which should concatenate the values
//     of two parameters a and b and return a string.
//     Use Function Declaration Statement (FDS).
//     Call a function before it declaration.
//     Test data:
//     a = '1', b = '1', result = '11'
//     a = 1, b = 1, result = '11'

    console.log("Task 1");

    function conc(a, b) {
        return a.toString() + b.toString()
    }

    console.log(conc('1', '1'));
    console.log(conc(1, 1));


// Task 2. FDE
// RU: Создайте функцию comp, которая должна сравнивать значения
//     двух параметров a и b и возвращать 1, если они равны и -1, если они не равны.
//     Используйте Function Definition Expression (FDE).
//     Вызовите функцию до ее объявления.
//     Тестовые данные:
//     a = 'abc', b = 'abc', result = 1
//     a = 'abC', b = 'abc', result = -1
// EN: Create a function comp, which should compare the values
//     of two parameters a and b, and return 1, when they equal and return -1,
//     when they are not equal.
//     UseFunction Definition Expression (FDE).
//     Call a function before it declaration.
//     Test data:
//     a = 'abc', b = 'abc', result = 1
//     a = 'abC', b = 'abc', result = -1
    console.log("Task 2");
    let comp = (a, b) => a == b ? 1 : -1; 
    console.log(comp('abc', 'abc'));
    console.log(comp('abC', 'abc'));

// Task 3. AF
// RU: Создайте анонимную функцию, которая должна
//     выводить сообщение 'message in console' в коноль.
//     Используйте ее как обработчик события click для кнопки.
// EN: Create an anonymous function, which should display
//     message 'message in console' in console.
//     Use it as an event handler of event click of the button.
    console.log("Task 3");
    (function(){document.addEventListener('click', function() {
        console.log('message in console')
    })})()

// Task 4. NFE
// RU: Создайте функцию fibo, которая должна вычислять числа Фибоначчи по формуле
//     F0 = 0, F1 = 1, Fn = Fn-1 + Fn-2.
//     Создайте функцию factorial, которая должна вычислять факториал числа по формуле
//     Fn = 1 * 2 *..*n.
//     Используйте Named Function Expression (NFE).
// EN: Create a function fibo should calculate Fibonacci numbers according to the formula
//     F0 = 0, F1 = 1, Fn = Fn-1 + Fn-2.
//     Create a function factorial which should calculate factorial of a number n
//     according to the formula Fn = 1 * 2 *..*n.
//     Use Named Function Expression (NFE).

    console.log("Task 4");
    console.log("Fibonacci");
    let fiboFunc = function fibo(n) {
        return n <= 1 ? n : fibo(n - 1) + fibo(n - 2);
    }
    console.log(fiboFunc(8));

    console.log("Factorial");
    let factorialFunc = function(n) {
        let val = 1;
        for(let i = 1; i <= n; i++) {
            val = val*i;
        }
        return val;
    }
    console.log(factorialFunc(5));

// Task 5. FC
// RU: Объявите две строчные переменные: params и body и проинициализируйте
//     их строчными значениями, которые представляют список параметров и тело будущей функции.
//     Создайте функцию, используя эту информацию с помощью Function Constructor (FC).
//     Вызовите эту функцию.
// EN: Declare two string variables: params and body and initialize them with string values,
//     which represent the list of parameters and the body of future function.
//     Create function using these variables with help of Function Constructor (FC).
//     Call this function.

    console.log("Task 5");

    let params = ['a','b'];
    let body = 'return a * b; ';
    let newfunc = new Function(params,body);
    console.log(newfunc(2,6));

// Task 6. ArF
// RU: Объявите массив arr = [1, 8, 3, 5, 12, 7, 9, 11]
//     Используя стрелочные функции создайте новый массив из элементов elem * elem,
//     которые меньше 100 и отсортируйте его по возрастанию.
//     Выведите результат в консоль.
// EN: Declare an array arr = [1, 8, 3, 5, 12, 7, 9, 11]
//     Using arrow functions create new array which contains elem * elem.
//     These elements should be less than 100, sort it in ascending order.
//     Display the result in the console.
    console.log("Task 6");

    let arr = [1, 8, 3, 5, 12, 7, 9, 11];
    let newArr = arr.map(elem => elem * elem).filter(elem => elem < 100).sort((a,b) => a - b);
    console.log(newArr);


// Task 7. IIFE
// RU: Создайте конструкцию, с помощью которой выполниться выше реализованная
//     функция conc.
// EN: Create a construction which allows to run the above function conc.

    console.log("Task 7");

    (function conc(a, b) {
        console.log(a.toString() + b.toString());
    })(1, 1)


// Task 8. Arguments Object, Rest
// RU: Создайте функцию parts, которая принимает неизвестное количество параметров.
//     Каждый параметр – это группа предложений.
//     Функция должна вырезать из параметра подстроку, начиная с символа двоеточие (:)
//     и заканчивая символом точка (.).
//     Функция должна возвращать массив подстрок.
//     Используйте Function Definition Expression (FDE).
//     Тестовые данные:
//     param1 = "This is the first sentence. This is a sentence with a list of items:
//               cherries, oranges, apples, bananas."
//     param2 = "This is the second sentence. This is a sentence with a list of items:
//               red, blue, yellow, black."
//     result = ["cherries, oranges, apples, bananas", "red, blue, yellow, black"].
// EN: Create a function parts, which takes unknown quantity of parameters.
//     Each parameter is a group of sentances.
//     The function should cut out the substring from the parameter, starting with the colon (:)
//     and ending with a period (.) character.
//     The function should return an array of substrings.
//     Use Function Definition Expression (FDE).
//     Test Data:
//     param1 = "This is the first sentence. This is a sentence with a list of items:
//               cherries, oranges, apples, bananas."
//     param2 = "This is the second sentence. This is a sentence with a list of items:
//               red, blue, yellow, black."
//     result = ["cherries, oranges, apples, bananas", "red, blue, yellow, black"].
    console.log("Task 8");
    let param1 = "This is the first sentence. This is a sentence with a list of items: cherries, oranges, apples, bananas."
    let param2 = "This is the second sentence. This is a sentence with a list of items:red, blue, yellow, black."
    
    function parts(...rest) {
        console.log(rest);
        return rest.map(param => {
            let first = param.indexOf(':');
            let second = param.indexOf(first, param.indexOf('.'))
            return param.substring(first, second);
        });
    }
    console.log(parts(param1, param2));

// Task 9. Optional Arguments
// RU: Создайте функцию find(testString, test), которая должна возвращать позицию
//     строки test в строке testString. 
//     Если второй параметр не задан, используйте test = testString. 
//     Используйте Function Definition Expression (FDE).
//     Тестовые данные:
//     testString = 'abc', test ='b', result = 1
//     testString = 'abc', result = 0
//     testString = 'abc', test = 'd', result = -1
//     testString = 'abc', test='a', test2='b', result = 0
// EN: Create a function find(testString, test), which should return the position 
//     of test string within testString.
//     If the second parameter is omitted, use default value  test = testString.
//     Use Function Definition Expression (FDE).
//     Test Data:
//     testString = 'abc', test ='b', result = 1
//     testString = 'abc', result = 0
//     testString = 'abc', test = 'd', result = -1
//     testString = 'abc', test='a', test2='b', result = 0
    console.log("Task 9");

    let find = function (testString, test = testString) {
        return testString.indexOf(test);
    }
    console.log(find('abc', 'b'));
    console.log(find('abc'));
    console.log(find('abc', 'd'));
    console.log(find('abc', 'a', 'b'));

// Task 10. Function as an Object
// RU: Создайте функцию str(), которая принимает один строчный параметр и
//     выводит в консоль 'String is non empty', если параметр - непустая строка и
//     'String is empty', если параметр – пустая строка.
//     Создайте функцию str.isNonEmptyStr(), как свойство функции str. Эта функция должна
//     принимать один параметр и возвращать true, если параметр непустая строка,
//     иначе false. Используйте эту функцию для реализации условия в основной функции.
//     Тестовые данные:
//     str.isNonEmptyStr(), result = false
//     str.isNonEmptyStr(''), result = false
//     str.isNonEmptyStr('a'), result = true
//     str.isNonEmptyStr(1), result = false
//     str(), console.log('String is empty')
//     str('a'), console.log('String is non empty')

// EN: Create a function str(), which takes one string parameter and display in the console 
//     string 'String is non empty' if the paramer is not empty string, otherwise it 
//     should display 'String is empty'.
//     Create a function str.isNonEmptyStr() as a property of function str. This function
//     should take one parameter and return true, when the value of parameter is not empty 
//     string, otherwise it should return false. Use this function to implement if statement
//     in the str() funtion.
//     Test Data:
//     str.isNonEmptyStr(), result = false
//     str.isNonEmptyStr(''), result = false
//     str.isNonEmptyStr('a'), result = true
//     str.isNonEmptyStr(1), result = false
//     str(), console.log('String is empty')
//     str('a'), console.log('String is non empty')

    console.log("Task 10");

    function str(name) {
        let str1 = 'String is non empty';
        let str2  = 'String is empty';
        console.log(name ? str1 : str2);
    }
    str.isNonEmptyStr = function(param) {
        console.log(typeof param == 'string' && param.length !== 0); 
    }
    str();
    str('a');
    str.isNonEmptyStr()
    str.isNonEmptyStr('')
    str.isNonEmptyStr('a')
    str.isNonEmptyStr(1)

// Task 11. Function as a Parameter
// RU: Создайте функцию toConsole с одним параметром. Функция должна выводить 
//     значение параметра в консоль.
//     Создайте функцию toAlert с одним параметром. Функция должна выводить значение
//     параметра используя alert().
//     Создайте функцию splitToWords с двумя параметрами: msg и callback.
//     Функция должна разделять строку на слова и использовать колбек для отображения слов. 
//     Если второй параметр не задан, функция должна возвращать массив слов.
// EN: Create a function toConsole with one parameter. The function should display 
//     the value of the parameter in the console.
//     Create a function toAlert with one parameter. The function should display 
//     the value of the parameter using alert.
//     Create a function splitToWords, which takes two parameters: msg и callback.
//     The function should split the value of parameter msg by the words and use callback
//     to display these words.
//     If the second parameter is omitted, the function should return array of words.
//     Test Data:
//     splitToWords("My very long text msg", toConsole);
//     result:
//     My
//     very
//     long
//     text
//     msg
//     splitToWords("My very long text msg", toAlert);
//     result = alert(My), ….
//     console.log( splitToWords("My very long text msg") );
//     result = ['My', 'very', 'long', 'text', 'msg']

console.log("Task 11");

function toConsole(params) {
    params.forEach(param => console.log(param));
}

function toAlert(param) {
    alert(param)
}

function splitToWords(msg, callback) {
    if(callback) callback(msg.split(" "))
    return msg.split(" ");
}
splitToWords("My very long text msg", toConsole);
//splitToWords("My very long text msg", toAlert);
console.log(splitToWords("My very long text msg"));

// Task 12. Function as a Result
// RU: Создайте функцию copyright, которая должна возвращать другую функцию с
//     одним параметром. Возращаемая функция должна прибавлять знак © ('\u00A9')
//     вначале своего параметра и возвращать результат. Объявите этот знак в функции copyright.
//     Тестовые данные:
//     console.log( copyright()('EPAM') ); result = © EPAM.
// EN: Create a function copyright, which ahould return anther function with one parameter.
//     This returned function should prepend sign © ('\u00A9') to its parameter and
//     return the result. Declare the sign © ('\u00A9') inside copyright function.
//     Test Data:
//     console.log( copyright()('EPAM') ); result = © EPAM.

console.log("Task 12");

function copyright() {
    let sign = '\u00A9'
    return function(param) {
        return sign + param;
    }
}

console.log(copyright()('EPAM'));

// Task 13. Function as a Result
// RU: Задание аналогично предыдущему, но в этот раз функция copyright получает знак
//     как свой параметр.
// EN: This task is similar to the previous one, but in this case the function copyright takes 
//     one parameter - sign (© ('\u00A9')).

console.log("Task 13");

function copyrightNew(sign) {
    return function(param) {
        return sign + param;
    }
}

console.log(copyrightNew('\u00A9')('EPAM'));

// Task 14. Function as a Method
// RU: Создайте литерал объекта employee со следующими свойствами:
//     name: 'Ann', 
//     work – функция, которая выводит в консоль сообщение "I am Ann. I am working..."
//     Тестовые данные
//     employee.work()  результат в консоле "I am Ann. I am working..."
// EN: Create an object literal employee with the following properties:
//     name: 'Ann', 
//     work – function, which display in the console the following string 
//     "I am Ann. I am working..."
//     Test Data:
//     employee.work()  result in the console "I am Ann. I am working..."

console.log("Task 14");

let employee = {
    name: 'Ann',
    work: function() {
        return () => console.log("I am " + this.name + ". I am working...")
    }
}
let workingEmp = employee.work();

// Task 15. Borrow Method
// RU: Создайте литерал объекта person со свойством name. 
//     Вызовите метод work объекта employee из предыдущего задания.
// EN: Create an object literal person with property name.
//     Call the method work of the object employee from the previous task.

console.log("Task 15");

let person = {
    name: "Tom",
};
workingEmp();

// Task 16. Memoization
// RU: Создать функцию fiboMemo для вычисления чисел Фибоначчи по формуле 
//     F0 = 0, F1 = 1, Fn = Fn-1 + Fn-2. Функция должна хранить те значения,
//     которые она уже вычисляла. Используя методы console.time(), console.timeEnd()
//     определите время вычисления функции fibo и функции fiboMemo.
// EN: Create a function fiboMemo for calculating Fibonacci numbers according to the formula
//     F0 = 0, F1 = 1, Fn = Fn-1 + Fn-2. The function should store the values computed earlier.
//     Using methods console.time(), console.timeEnd() calculate the time for function fibo 
//     and fiboMemo.
console.log("Task 16");

function fiboMemo(n) {
    let a = 1;
    let b = 1;
    for (let i = 3; i <= n; i++) {
      let c = a + b;
      a = b;
      b = c;
    }
    return b;
  }
  console.log('fiboFunc');
  console.time();
  fiboFunc(33);
  console.timeEnd();
  console.log('fiboMemo');
  console.time();
  fiboMemo(33);
  console.timeEnd();