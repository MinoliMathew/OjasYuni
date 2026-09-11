const questions = [

    // dosha preguntas

    {
        category: "dosha",

        question: "¿Cómo describirías naturalmente tu estructura corporal?",

        options: [
            {
                text: "Finas y delgadas",
                score: { vata: 1 }
            },
            {
                text: "Proporcionada, definida, estructura mediana",
                score: { pitta: 1 }
            },
            {
                text: "Robusta, ancha o de constitución fuerte",
                score: { kapha: 1 }
            }
        ]
    },

    {
        category: "dosha",

        question: "¿Cómo es tu cabello natural y actual?",

        options: [
            {
                text: "Seco, fino, ligero, tiende al frizz, negro o café oscuro",
                score: { vata: 1 }
            },
            {
                text: "Fino a medio, suave, puede ser grasoso o delicado, con tendencia rojiza o clara",
                score: { pitta: 1 }
            },
            {
                text: "Grueso, grasoso, abundante, pesado y generalmente resistente, con tendencia a canas",
                score: { kapha: 1 }
            }
        ]
    },

    {
        category: "dosha",

        question: "¿Cómo suele ser tu patrón natural de eliminación intestinal?",

        options: [
            {
                text: "Variable o irregular, puede tender a seco",
                score: { vata: 1 }
            },
            {
                text: "Regular y suave, relativamente frecuente",
                score: { pitta: 1 }
            },
            {
                text: "Más lento o espaciado, con tendencia a evacuaciones más pesadas y grasosas",
                score: { kapha: 1 }
            }
        ]
    },

    {
        category: "dosha",

        question: "Sin intentar modificarlo, ¿cómo sientes que son tu pulso y actividad física habitual?",

        options: [
            {
                text: "Pulso frágil y débil; actividad física variable o irregular",
                score: { vata: 1 }
            },
            {
                text: "Pulso firme y marcado; actividad física activa",
                score: { pitta: 1 }
            },
            {
                text: "Pulso lento; actividad física tranquila, estable y pausada",
                score: { kapha: 1 }
            }
        ]
    },

    {
        category: "dosha",

        question: "¿Cómo tiendes a relacionarte con tus creencias o prácticas espirituales?",

        options: [
            {
                text: "Curiosa, cambiante y explorativa. Te interesan diferentes ideas",
                score: { vata: 1 }
            },
            {
                text: "Intensa, analítica y determinada",
                score: { pitta: 1 }
            },
            {
                text: "Constante, firme, tradicional y basada en la confianza",
                score: { kapha: 1 }
            }
        ]
    },


    // biotipo preguntas

    {
        category: "biotipo",

        question: "¿Cómo describirías tu piel de manera natural?",

        options: [
            {
                text: "Temperatura fría, textura seca y áspera. Puede verse pálida, opaca o cetrina.",
                score: { melancolico: 1 }
            },
            {
                text: "Temperatura cálida, textura húmeda o flexible. Suele verse sonrosada, luminosa y saludable.",
                score: { sanguineo: 1 }
            },
            {
                text: "Temperatura fría, textura húmeda, suave y delicada. Puede ser pálida o clara y sensible a irritaciones externas.",
                score: { flematico: 1 }
            },
            {
                text: "Temperatura cálida o caliente, textura seca. Tiende a enrojecerse con facilidad y no tolera bien el exceso de calor.",
                score: { colerico: 1 }
            }
        ]
    },

    {
        category: "biotipo",

        question: "¿Cómo responde normalmente tu cuerpo al movimiento o ejercicio?",

        options: [
            {
                text: "Te cuesta ganar volumen y puedes sentirte rígida",
                score: { melancolico: 1 }
            },
            {
                text: "Respondes con facilidad y tienes energía para moverte",
                score: { sanguineo: 1 }
            },
            {
                text: "Desarrollas fuerza de manera constante y tienes buena resistencia",
                score: { flematico: 1 }
            },
            {
                text: "Tiendes a desarrollar fuerza rápidamente y tienes una respuesta física intensa",
                score: { colerico: 1 }
            }
        ]
    },

    {
        category: "biotipo",

        question: "Cuando surge un problema inesperado, ¿cuál suele ser tu reacción espontánea?",

        options: [
            {
                text: "Analizas mucho antes de actuar",
                score: { melancolico: 1 }
            },
            {
                text: "Hablas con otros y buscas mantener una actitud positiva",
                score: { sanguineo: 1 }
            },
            {
                text: "Mantienes la calma y esperas antes de reaccionar",
                score: { flematico: 1 }
            },
            {
                text: "Tomas el control y buscas resolverlo inmediatamente",
                score: { colerico: 1 }
            }
        ]
    },

    {
        category: "biotipo",

        question: "¿Qué tipo de actividades tienden a atraer más tu atención?",

        options: [
            {
                text: "Arte, análisis, lectura, investigación o actividades profundas",
                score: { melancolico: 1 }
            },
            {
                text: "Socializar, experiencias nuevas, creatividad y entretenimiento",
                score: { sanguineo: 1 }
            },
            {
                text: "Actividades tranquilas, prácticas, familiares o relacionadas con el bienestar",
                score: { flematico: 1 }
            },
            {
                text: "Retos, liderazgo, competencia y alcanzar objetivos",
                score: { colerico: 1 }
            }
        ]
    },

    {
        category: "biotipo",

        question: "¿Cómo describirías tu manera habitual de recordar información?",

        options: [
            {
                text: "Recuerdas detalles, conversaciones y experiencias durante mucho tiempo",
                score: { melancolico: 1 }
            },
            {
                text: "Recuerdas fácilmente experiencias que te emocionaron o interesaron",
                score: { sanguineo: 1 }
            },
            {
                text: "Aprendes de forma gradual pero conservas lo aprendido",
                score: { flematico: 1 }
            },
            {
                text: "Recuerdas especialmente aquello que consideras útil para conseguir un objetivo",
                score: { colerico: 1 }
            }
        ]
    }

];


/* state */

let currentQuestion = 0;

let answers = [];

let scores = {
    dosha: {
        vata: 0,
        pitta: 0,
        kapha: 0
    },

    biotipo: {
        melancolico: 0,
        sanguineo: 0,
        flematico: 0,
        colerico: 0
    }
};


/*elements*/

const questionElement =
    document.getElementById("question");

const answersElement =
    document.getElementById("answers");

const questionNumberElement =
    document.getElementById("questionNumber");

const totalQuestionsElement =
    document.getElementById("totalQuestions");

const progressFill =
    document.getElementById("progressFill");

const backButton =
    document.getElementById("backButton");

const quizContent =
    document.getElementById("quizContent");

const resultContent =
    document.getElementById("resultContent");

const resultDoshaSvg =
    document.getElementById("resultDoshaSvg");

const resultBiotypeSvg =
    document.getElementById("resultBiotypeSvg");

const resultDescription =
    document.getElementById("resultDescription");

const restartButton =
    document.getElementById("restartButton");



totalQuestionsElement.textContent =
    `/ ${questions.length}`;

renderQuestion();


/* render question */

function renderQuestion() {

    const question =
        questions[currentQuestion];


    questionElement.textContent =
        question.question;


    questionNumberElement.textContent =
        String(currentQuestion + 1).padStart(2, "0");


    const progress =
        ((currentQuestion + 1) / questions.length) * 100;


    progressFill.style.width =
        `${progress}%`;


    answersElement.innerHTML = "";


    question.options.forEach((option, index) => {

        const button =
            document.createElement("button");


        button.classList.add("answer-card");

        button.type = "button";

        button.textContent =
            option.text;


        if (answers[currentQuestion] === index) {
            button.classList.add("selected");
        }


        button.addEventListener("click", () => {

            selectAnswer(index);

        });


        answersElement.appendChild(button);

    });


    backButton.disabled =
        currentQuestion === 0;
}


/* selected answer*/

function selectAnswer(index) {

    const question =
        questions[currentQuestion];

    if (answers[currentQuestion] !== undefined) {

        const previousIndex =
            answers[currentQuestion];

        const previousScore =
            question.options[previousIndex].score;


        Object.entries(previousScore).forEach(
            ([type, value]) => {

                scores[question.category][type] -= value;

            }
        );
    }


    /*save answer*/

    answers[currentQuestion] = index;


    /*add score*/

    const selectedScore =
        question.options[index].score;


    Object.entries(selectedScore).forEach(
        ([type, value]) => {

            scores[question.category][type] += value;

        }
    );


    /*selected answer*/

    const cards =
        document.querySelectorAll(".answer-card");


    cards[index].classList.add("selected");


    /*next question*/

    setTimeout(() => {

        if (currentQuestion < questions.length - 1) {

            currentQuestion++;

            renderQuestion();

        } else {

            showResults();

        }

    }, 300);
}


/* back button*/

backButton.addEventListener("click", () => {

    if (currentQuestion === 0) {
        return;
    }


    currentQuestion--;

    renderQuestion();

});


/*get type*/

function getDominant(category) {

    const categoryScores =
        scores[category];


    return Object.keys(categoryScores).reduce(
        (highest, current) => {

            if (
                categoryScores[current] >
                categoryScores[highest]
            ) {
                return current;
            }

            return highest;

        }
    );
}


/*Show results*/

function showResults() {

    const dominantDosha =
        getDominant("dosha");


    const dominantBiotype =
        getDominant("biotipo");


    /*SVG files*/

    const doshaSvgs = {

        vata: "./images/VATA.svg",

        pitta: "./images/PITA.svg",

        kapha: "./images/KAPHA.svg"

    };


    const biotypeSvgs = {

        melancolico: "./images/MELANCOLICO.svg",

        sanguineo: "./images/SANGUINEO.svg",

        flematico: "./images/FLEMATICO.svg",

        colerico: "./images/COLERICO.svg"

    };


    /*set SVG */

    resultDoshaSvg.src =
        doshaSvgs[dominantDosha];


    resultBiotypeSvg.src =
        biotypeSvgs[dominantBiotype];


    resultDoshaSvg.alt =
        `${dominantDosha} dosha`;


    resultBiotypeSvg.alt =
        `${dominantBiotype} biotipo`;


    /*Result descriptions*/

    const doshaDescriptions = {

        vata:
            "Vata descripcion",

        pitta:
            "Pitta descripcion",

        kapha:
            "Kapha descripcion"

    };


    const biotypeDescriptions = {

        melancolico:
            "Melancolico descripcion",

        sanguineo:
            "Sanguineo descripcion",

        flematico:
            "Flematico descripcion",

        colerico:
            "Colerico descripcion"

    };


    resultDescription.textContent =
        `${doshaDescriptions[dominantDosha]} ${biotypeDescriptions[dominantBiotype]}`;


    /*Show result*/

    quizContent.classList.add("hidden");

    resultContent.classList.remove("hidden");

}


/* Restart */

restartButton.addEventListener("click", () => {

    currentQuestion = 0;

    answers = [];


    scores = {

        dosha: {
            vata: 0,
            pitta: 0,
            kapha: 0
        },

        biotype: {
            melancolico: 0,
            sanguineo: 0,
            flematico: 0,
            colerico: 0
        }

    };


    resultContent.classList.add("hidden");

    quizContent.classList.remove("hidden");


    /*result images*/

    resultDoshaSvg.src = "";

    resultBiotypeSvg.src = "";


    renderQuestion();

});