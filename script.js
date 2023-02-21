var questions = ["Program rozwiązujący konkretny problem", "Przedstawienie programu za pomocą schematu blokowego", "Algorytm służący do znajdywania pierwiastka danej liczby", "Translator tłumaczący cały kod na raz", "Jezyk programowania używający interpretera", "Skrót źrodowiska programistycznego",  "Jezyk programowania niewymagający zakończenia linii znakiem ';'", "Język niewymagający podania typu zmiennej podczas jej tworzenia", "Funkcja zmieniająca string na int w języku Python", "Typ danych przechowujące dodanie liczby całkowite", "Instrukcja warunkowa w języku Python pomiędzy if i else", "Sposób zapisywania liczb przy pomocy 0 i 1", "Znak symbolizujący potęgowanie w języku Python", "Ilość rodzajów pętli w języku Python", "Funkcja która wywołuje sama siebie", "Sposób ustanawiania hierarchii kodu w języku Python", "Rozrzeszenie plików z kodem w języku Python", "Sprawdzanie czy zmienna jest równa lub większa od innej zmiennej", "Funkcja input w języku Python zwraca zmienną o typie", "Zapisywanie zmiennych w ten sposób 'mojaZmienna' nazywa się"]
var answers = [["rekurencja", "algorytm", "metoda", "funkcja"], ["diagram", "szyfr", "logarytm", "interpretacja"], ["Aleksandra", "Euklidesa", "Herona", "Juliusza"], ["kompilator", "interpreter", "instruktor", "kod wykonywalny"], ["C++", "Java", "C#", "Python"], ["IPE", "IDE", "DPE", "EPI"], ["Java", "JavaScript", "C++", "PHP"], ["C", "Java", "Python", "C#"], ["int", "parseInt", "intval", "stoi"], ["signed float", "unsigned char", "signed string", "unsigned int"], ["default", "else if", "case", "elif"], ["zerowy", "rekurencyjny", "binarny", "źródłowy"], ["**", "%", "&&", "||"], ["1", "3", "2", "4"], ["interpretacja", "zagnieżdżanie", "incepcja", "rekurencja"], ["tabulatory", "klamry", "spacje", "brak"], ["bat", "p", "py", "exe"], [">", "=>", ">>", ">="], ["char", "string", "array", "signed char"], ["snake case", "pascal case", "rabbit case", "camel case"]]
var answerIndex = ['\x01', '\x00', '\x04', '\x00', '\t', '\x01', '\x01', '\x04', '\x00', '\t', '\t', '\x04', '\x00', '\x04', '\t', '\x00', '\x04', '\t', '\x01', '\t'] //Powodzenia w odgadywani tego
var level = 0
var score = 0

var button = document.getElementsByClassName("answer")
var question = document.getElementById("question")
var levelText = document.getElementById("level")


function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

function showData(index){
    levelText.textContent = level+1 + "/" + answerIndex.length
    question.textContent = questions[index] + ":"
    for (var i = 0; i < 4; i++){
        button[i].textContent = answers[index][i]
    }
}

for (var i = 0; i < answerIndex.length; i++){
    answerIndex[i] = Math.sqrt(parseInt(answerIndex[i].charCodeAt(0)))
}

var xas = false

async function checkData(index){
    if (index == answerIndex[level]){
        score++
        if (xas) button[index].style.background = "rgb(51, 112, 64)"
    }
    else{
        if (xas) button[index].style.background = "rgb(136, 64, 64)"
    }
    level++

    for (var i = 0; i < 4; i++){
        button[i].style["pointer-events"] = "none"
    }
    await sleep(1000)

    if (level == answerIndex.length){
        question.textContent = "Wynik: " + score.toString() + "/" + level.toString()
        for (var i = 0; i < 4; i++){
            if (xas) button[i].style.background = "rgb(46, 46, 46)"
            button[i].textContent = ""
        }
    }
    
    else{
        for (var i = 0; i < 4; i++){
            button[i].style["pointer-events"] = "auto"
            if (xas) button[i].style.background = "rgb(46, 46, 46)"
        }
        showData(level)
    }
}

showData(level)
for (var i = 0; i < 4; i++){
    button[i].addEventListener("click", checkData.bind(this, i), false);
}