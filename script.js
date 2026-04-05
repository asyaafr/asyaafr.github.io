const questions = [
    {
        question: "Выбери цитату",
        background: "photos/naruto3.jpeg",
        bgColor: "rgb(158, 74, 227)",
        progressColor: "rgb(158, 74, 227)",
        answers: [
            {text: "Если бы мы встретились в другом месте и в другое время - мы бы стали друзьями.", type: "Наруто",  color: "rgb(158, 74, 227)"},
            {text: "В будущем моей мечте места нет. Она осталась в прошлом. И я не буду её воскрешать.", type: "Саске",  color: "rgb(158, 74, 227)"},
            {text: "Ты думаешь, что ты понял это, хотя на самом деле всего лишь думаешь, что ты понял то, о чём ты думаешь.", type: "Какаши",  color: "rgb(158, 74, 227)"},
            {text: "Человеку нужна причина для существования, иначе жизнь ничем не будет отличаться от смерти.", type: "Гаара",  color: "rgb(158, 74, 227)"},
            {text: "Домом можно называть то место, где о тебе кто-то думает.", type: "Джирайя",  color: "rgb(158, 74, 227)"},
            {text: "Меня пугает только жизнь в бездействии.", type: "Сакура",  color: "rgb(158, 74, 227)"},
        ]
    },
       { question: "Твоя роль в групповом проекте?",
        background: "photos/naruto4.jpg",
        bgColor: "rgb(120, 27, 27)",
        progressColor: "rgb(120, 27, 27)",
        answers: [
            {text: "Мотиватор", type: "Наруто", color: "rgb(120, 27, 27)"},
            {text: "Делаю всё сам", type: "Саске", color: "rgb(120, 27, 27)"},
            {text: "Контролирую процесс", type: "Сакура", color: "rgb(120, 27, 27)"},
            {text: "Руководитель (но ленивый)", type: "Какаши", color: "rgb(120, 27, 27)"},
            {text: "Работаю отдельно", type: "Гаара", color: "rgb(120, 27, 27)"},
            {text: "Генерирую странные идеи", type: "Джирайя", color: "rgb(120, 27, 27)"}
        ]
    },
        { question: "Твоя слабость?",
        background: "photos/naruto5.jpg",
        bgColor: "rgb(88, 113, 229)",
        progressColor: "rgb(88, 113, 229)",
        answers: [
            {text: "Опоздания", type: "Какаши", color:"rgb(88, 113, 229)" },
            {text: "Женщины", type: "Джирайя", color:"rgb(88, 113, 229)"},
            {text: "Социальные навыки", type: "Гаара", color:"rgb(88, 113, 229)"},
            {text: "Еда", type: "Наруто", color:"rgb(88, 113, 229)"},
            {text: "Гордость", type: "Саске", color:"rgb(88, 113, 229)"},
            {text: "Эмоции", type: "Сакура", color:"rgb(88, 113, 229)"}
        ]
    },
        { question: "Что для тебя важнее всего?",
        background: "photos/naruto6.png",
        bgColor: "rgb(68, 153, 84)",
        progressColor: "rgb(68, 153, 84)",
        answers: [
            {text: "Забота и поддержка", type: "Сакура", color:"rgb(68, 153, 84)"},
            {text: "Друзья и близкие", type: "Наруто", color:"rgb(68, 153, 84)"},
            {text: "Сила и цель", type: "Саске", color:"rgb(68, 153, 84)"},
            {text: "Свобода и приключения", type: "Джирайя", color:"rgb(68, 153, 84)"},
            {text: "Спокойствие и гармония", type: "Какаши", color:"rgb(68, 153, 84)"},
            {text: "Безопасность и внутренний покой", type: "Гаара", color:"rgb(68, 153, 84)"}
        ]
    },
        { question: "Как ты выражаешь свои чувства?",
        background: "photos/naruto7.jpg",
        bgColor: "rgb(127, 35, 35)",
        progressColor: "rgb(127, 35, 35)",
        answers: [
            {text: "Выражаю редко, но очень глубоко и тяжело", type: "Гаара", color: "rgb(127, 35, 35)"},
            {text: "Сдержанно, иногда скрывая", type: "Какаши", color: "rgb(127, 35, 35)"},
            {text: "Сначала обдумываю, потом говорю прямо и честно", type: "Сакура", color: "rgb(127, 35, 35)"},
            {text: "Не могу держать в себе - сразу говорю, как есть", type: "Наруто", color: "rgb(127, 35, 35)"},
            {text: "Маскирую шутками", type: "Джирайя", color: "rgb(127, 35, 35)"},
            {text: "Почти не показываю - держу всё внутри", type: "Саске", color: "rgb(127, 35, 35)"}
        ]
    },
        { question: "Как ты относишься к своему прошлому?",
        background: "photos/naruto8.jpg",
        bgColor: "rgb(50, 57, 101)",
        progressColor: "rgb(50, 57, 101)",
        answers: [
            {text: "Это часть моей истории, но я не застреваю в ней", type: "Джирайя", color: "rgb(50, 57, 101)"},
            {text: "Оно определяет меня, и я не могу его отпустить", type: "Саске", color: "rgb(50, 57, 101)"},
            {text: "Оно оставило след, который со мной навсегда", type: "Гаара", color: "rgb(50, 57, 101)"},
            {text: "Оно сделало меня тем, кто я есть, и я принимаю его", type: "Наруто", color: "rgb(50, 57, 101)"},
            {text: "Я учусь на нём и стараюсь стать лучше", type: "Сакура", color: "rgb(50, 57, 101)"},
            {text: "Я помню его, но не позволяю ему управлять мной", type: "Какаши", color: "rgb(50, 57, 101)"}
        ]
    },

    { question: "Что тебя вдохновляет?",
        background: "photos/naruto9.jpg",
        bgColor: "rgb(67, 27, 179)",
        progressColor: "rgb(67, 27, 179)",
        answers: [
            {text: "Жизненный опыт", type: "Какаши", color: "rgb(67, 27, 179)"},
            {text: "Возможность помочь", type: "Сакура", color: "rgb(67, 27, 179)"},
            {text: "Люди вокруг меня", type: "Наруто", color: "rgb(67, 27, 179)"},
            {text: "Свобода и новые места", type: "Джирайя", color: "rgb(67, 27, 179)"},
            {text: "Мечта и цель", type: "Саске", color: "rgb(67, 27, 179)"},
            {text: "Тишина и природа", type: "Гаара", color: "rgb(67, 27, 179)"}
        ]
    },

     { question: "Что тебя пугает?",
        background: "photos/naruto10.jpg",
        bgColor: "rgb(127, 35, 35)",
        progressColor: "rgb(127, 35, 35)",
        answers: [
            {text: "Неизвестность", type: "Какаши", color: "rgb(127, 35, 35)"},
            {text: "Потерять близких", type: "Наруто", color: "rgb(127, 35, 35)"},
            {text: "Ограничение свободы", type: "Джирайя", color: "rgb(127, 35, 35)"},
            {text: "Не суметь помочь", type: "Сакура", color: "rgb(127, 35, 35)"},
            {text: "Потеря контроля", type: "Гаара", color: "rgb(127, 35, 35)"},
            {text: "Слабость и провал", type: "Саске", color: "rgb(127, 35, 35)"}
        ]
    },

     { question: "Что ты чувствуешь, когда кто-то важный уходит из твоей жизнии?",
        background: "photos/naruto11.jpg",
        bgColor: "rgb(42, 52, 162)",
        progressColor: "rgb(42, 52, 162)",
        answers: [
            {text: "Переживаю это внутри, но стараюсь двигаться дальше", type: "Какаши", color: "rgb(42, 52, 162)"},
            {text: "Мне очень больно, но я учусь отпускать и жить дальше", type: "Сакура", color: "rgb(42, 52, 162)"},
            {text: "Принимаю это как часть пути и сохраняю тёплые воспоминания", type: "Джирайя", color: "rgb(42, 52, 162)"},
            {text: "Это оставляет глубокую пустоту, которую сложно заполнить", type: "Гаара", color: "rgb(42, 52, 162)"},
            {text: "Закрываюсь в себе и не позволяю больше так привязываться", type: "Саске", color: "rgb(42, 52, 162)"},
            {text: "Не хочу это принимать и стараюсь вернуть человека любой ценой", type: "Наруто", color: "rgb(42, 52, 162)"}
        ]
    },

     { question: "Когда ты чувствуешь себя по-настоящему счастливым(ой)?",
        background: "photos/naruto12.jpg",
        bgColor: "rgb(45, 107, 48)",
        progressColor: "rgb(45, 107, 48)",
        answers: [
            {text: "Когда я свободен(на), могу идти куда хочу и жить так, как чувствую", type: "Джирайя", color: "rgb(45, 107, 48)"},
            {text: "Когда рядом есть люди, которые верят в меня", type: "Наруто", color: "rgb(45, 107, 48)"},
            {text: "Когда я становлюсь сильнее и приближаюсь к своей цели, даже если рядом никого нет", type: "Саске", color: "rgb(45, 107, 48)"},
            {text: "Когда внутри становится тихо и ничего не тревожит", type: "Гаара", color: "rgb(45, 107, 48)"},
            {text: "Когда вокруг спокойно, и нет необходимости что-то доказывать и объяснять", type: "Какаши", color: "rgb(45, 107, 48)"},
            {text: "Когда я понимаю, что смог(ла) кому-то помочь", type: "Сакура", color: "rgb(45, 107, 48)"}
        ]
    }
];

questions.forEach(q => {
    const img = new Image();
    img.src = q.background;
});

const resultsData = {
    Наруто: {
        title: "Ты Наруто! 🧡",
        description: "Ты человек, который живёт сердцем. Для тебя невероятно важны связи с другими — дружба, поддержка, ощущение, что ты не один. Ты умеешь верить в людей даже тогда, когда они сами в себя не верят.<br>Иногда ты можешь действовать импульсивно, говорить раньше, чем подумал(а), но в этом и есть твоя сила — в искренности. Ты не боишься чувствовать и не боишься быть собой.<br>Твоя энергия — это тепло, которое ты даёшь другим. И именно это делает тебя по-настоящему сильным человеком.",
        background: "photos/naruto13.jpg",
        textColor: "rgb(207, 94, 33)" ,
    },

     Саске: {
        title: "Ты Саске! 🖤",
        description: "Ты глубоко внутри себя несёшь сильные эмоции, но не показываешь их окружающим. Ты привык(ла) справляться в одиночку и не полагаться на других.<br>Тебе важно идти к своей цели, даже если путь сложный и требует жертв. Ты не из тех, кто сдаётся — ты из тех, кто идёт до конца.<br>Иногда тебе может быть трудно открыться или довериться, но за этой закрытостью скрывается очень сильная и чувствительная личность.",
        background: "photos/sasuke.jpg",
        textColor: "rgb(93, 29, 188)" ,
    },
    
     Сакура: {
        title: "Ты Сакура! 🌸",
        description: "Ты человек, который растёт через усилия и осознанность. Для тебя важно не просто чувствовать, но и понимать — себя, других, ситуацию.<br>Ты умеешь быть сильным(ой) ради других, брать ответственность и не сдаваться, даже когда тяжело.<br>В тебе есть сочетание мягкости и внутреннего стержня. Ты не всегда идеален(а), но ты постоянно работаешь над собой — и это делает тебя по-настоящему сильным человеком.",
        background: "photos/sakura.png",
        textColor: "rgb(231, 114, 238)" ,
    },

     Какаши: {
        title: "Ты Какаши! 🌫",
        description: "Ты человек, который многое понял о жизни. Ты умеешь сохранять спокойствие даже в сложных ситуациях и не терять голову, когда всё вокруг выходит из-под контроля.<br>Ты не всегда открываешься другим, предпочитая наблюдать и анализировать. В тебе есть внутренняя глубина и тихая мудрость. Иногда ты можешь казаться отстранённым, но на самом деле ты просто умеешь держать баланс между чувствами и разумом.",
        background: "photos/kakashi.jpg",
        textColor: "rgb(131, 16, 16)" ,
    },

    Джирайя: {
        title: "Ты Джирайя! 🍶",
        description: "Ты человек свободы. Для тебя важно жить так, как ты чувствуешь, не загоняя себя в рамки. Ты умеешь видеть жизнь шире, чем многие, и находить смысл даже в простых вещах.<br>Снаружи ты можешь казаться лёгким и шутливым, но внутри у тебя есть глубокое понимание людей и мира.<br>Ты умеешь отпускать, двигаться дальше и принимать жизнь такой, какая она есть — и в этом твоя особая мудрость.",
        background: "photos/jiraiya.jpg",
        textColor: "rgb(57, 118, 19)" ,
    },

    Гаара: {
        title: "Ты Гаара! 🏜",
        description: "Ты человек с очень глубоким внутренним миром. Ты ценишь тишину, спокойствие и безопасность — как внешнюю, так и внутреннюю.<br>Тебе может быть сложно открываться людям, но если кто-то становится тебе близок, это по-настоящему важно.<br>Ты умеешь чувствовать глубже, чем многие, даже если не показываешь этого. И твоя сила — в умении находить покой внутри себя.",
        background: "photos/gaara.jpg",
        textColor: "rgb(127, 35, 35)" ,
    }
    
};

let currentQuestion = 0;

let userAnswers = [];

const score = {
    Наруто: 0,
    Саске: 0,
    Сакура: 0,
    Какаши: 0,
    Джирайя: 0,
    Гаара: 0,
};

const startBtn = document.getElementById("start-btn");
const startScreen = document.getElementById("start-screen");
const quizScreen = document.getElementById("quiz-screen");
const resultScreen = document.getElementById("result-screen");

const questionE1 = document.getElementById("question");
const answersE1 = document.getElementById("answers");
const progressE1 = document.getElementById("progress");

startBtn.onclick = () => {
    startScreen.classList.add("hidden");
    quizScreen.classList.remove("hidden");

    document.body.classList.remove("start");
    document.body.classList.add("quiz");

    const quizTitle = document.getElementById("quiz-title");
    if (quizTitle) {
        quizTitle.style.display = "none";
    }
    showQuestion();
};

function showQuestion() {
    const q = questions[currentQuestion];

    questionE1.style.backgroundColor = q.bgColor;
    progressE1.style.backgroundColor = q.progressColor;
    
    document.body.style.backgroundImage = `url(${q.background})`;

    questionE1.textContent = q.question;
    answersE1.innerHTML = "";

    backBtn.style.backgroundColor = q.bgColor;

    q.answers.forEach(answer => {
        const btn = document.createElement("button");
        btn.textContent = answer.text;

        btn.onclick = () => selectAnswer(answer.type);

        btn.style.color = answer.color;

        answersE1.appendChild(btn);
    });

    progressE1.textContent = `${currentQuestion + 1} / ${questions.length}`;

    if (currentQuestion === 0) {

        backBtn.style.display = "none";
    } else {
        backBtn.style.display = "block";
    }
}

function selectAnswer(type) {
    score[type]++;
    currentQuestion++;

    if (currentQuestion < questions.length) {
        showQuestion();
    } else {
        showResult();
    }
}

function getResult() {
    return Object.keys(score).reduce((a,b) => 
    score[a] > score[b] ? a:b
    );
}

function showResult() {
    quizScreen.classList.add("hidden");
    resultScreen.classList.remove("hidden");

    const result = getResult();
    const data = resultsData [result];

    document.getElementById("result-title").textContent = resultsData[result].title;
    document.getElementById("result-description").textContent = resultsData[result].description;

    document.body.style.backgroundImage = `url(${data.background})`;
    resultScreen.style.color = data.textColor; 
    document.getElementById("result-description").innerHTML = data.description;

    const restartBtn = resultScreen.querySelector("button");
    restartBtn.style.backgroundColor = data.textColor;

}

function selectAnswer(type) {

    userAnswers.push(type);
    score[type]++;
    currentQuestion++;

    if (currentQuestion < questions.length) {
        showQuestion();
    } else {
        showResult();
    }
}

const backBtn = document.getElementById("back-btn");

backBtn.onclick = () => {

    if (currentQuestion === 0) return;

    currentQuestion--;

    const lastAnswer = userAnswers.pop();
    score [lastAnswer]--;

    showQuestion();
}
  
function restartQuiz() {

    userAnswers = [];

    currentQuestion = 0;

    for (let key in score) {
        score[key] = 0;
    }

    resultScreen.classList.add("hidden");
    quizScreen.classList.add("hidden");
    startScreen.classList.remove("hidden");

    questionE1.textContent="";
    answersE1.textContent="";
    progressE1.textContent="";

    document.body.classList.remove("quiz");
    document.body.classList.add("start");
    document.body.style.backgroundImage = "";


    const quizTitle = document.getElementById("quiz-title");
    if (quizTitle) {
        quizTitle.style.display = "";
    }
}