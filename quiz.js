const questions = [

    // dosha preguntas

    {
        category: "dosha",

        question: "¿Cómo describirías naturalmente tu estructura corporal?",

        options: [
            {
                text: "Fina y delgada",
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
                text: "Temperatura cálida o caliente, textura seca. Tiende a enrojecerse con facilidad y no tolera bien el exceso de calor ambiental.",
                score: { colerico: 1 }
            }
        ]
    },

    {
        category: "biotipo",

        question: "¿Que es lo que mas te molesta o te hace perder la paciencia?",

        options: [
            {
                text: "La superficialidad, el desorden, la impuntualidad y que no se respeten las reglas.",
                score: { melancolico: 1 }
            },
            {
                text: "La rutina aburrida, el aislamiento, la crítica hacia mi persona y sentirme ignorado.",
                score: { sanguineo: 1 }
            },
            {
                text: "Las discusiones a gritos, las presiones de tiempo injustificadas y los dramas emocionales.",
                score: { flematico: 1 }
            },
            {
                text: "La incompetencia, la falta de iniciativa y que las cosas no se hagan a mi manera o a mi ritmo.",
                score: { colerico: 1 }
            }
        ]
    },

    {
        category: "biotipo",

        question: "Cuando surge un problema inesperado, ¿cuál suele ser tu reacción espontánea?",

        options: [
            {
                text: "Me detengo a analizar las causas y las posibles consecuencias. Busco la solución perfecta y ordenada, aunque me preocupe de más.",
                score: { melancolico: 1 }
            },
            {
                text: "Lo tomo con entusiasmo o ligereza; improviso una solución creativa sobre la marcha y busco apoyo en grupo.",
                score: { sanguineo: 1 }
            },
            {
                text: "Mantengo la calma absoluta, no me altero. Prefiero observar y esperar a que las cosas se calmen antes de actuar.",
                score: { flematico: 1 }
            },
            {
                text: "Me activo de inmediato, tomo el control de la situación y dirijo a los demás para resolver el problema rápido. Me molesta la lentitud.",
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

    const combinationDescriptions = {

        vata: {

            melancolico:
                "Vata + Melancólico: Representa el desequilibrio clásico de Vata, compartiendo las cualidades de frío y sequedad. Cuidar sus pensamientos",
            sanguineo:
                "Vata + Sanguíneo: Representa la faceta más extrovertida, alegre y creativa de Vata. El elemento aire dota a este biotipo de una tremenda ligereza. Esforzarse en sus metas",

            flematico:
                "Vata + Flemático: Un temperamento flemático aporta la estabilidad de la que Vata carece. Enfocarse en balancear sus pensamientos con la realidad",

            colerico:
                "Vata + Colérico: perfil sumamente rápido, creativo y autoexigente. Tiende a la impaciencia y al estrés cuando las cosas no avanzan a su ritmo."

        },

        pitta: {

            melancolico:
                "Pitta + Melancólico: Comparte la naturaleza analítica, el perfeccionismo y la atención al detalle. Un Pitta perfeccionista. Debe mejorar su aceptación al error o incluso al fracaso.",

            sanguineo:
                "Pitta + Sanguíneo: Se conecta mediante la agudeza mental y el carisma. Es un líder comunicativo. Enfocarse en manejar su competitividad",

            flematico:
                "Pitta + Flemático: Es la combinación menos común por naturaleza, pero representa el estado ideal de equilibrio. Un Pitta que adopta la calma y la estabilidad del flemático se convierte en un líder empático, metódico, paciente y altamente eficiente.",

            colerico:
                "Pitta + Colérico: Se caracteriza por una personalidad intensa y apasionada. Es el líder nato, orientado a la acción. Su digestión y metabolismo son muy fuertes a clave principal es enfriar el cuerpo y calmar la mente."

        },

        kapha: {

            melancolico:
                "Kapha + Melancólico: una persona de naturaleza tranquila, compasiva que destaca por su profunda lealtad y apego al pasado, pero que ante el estrés tiende a manifestar introversión y un estancamiento emocional en forma de nostalgia",

            sanguineo:
                "Kapha + Sanguíneo: Cruza la calma de Kapha con la extroversión y calidez del temperamento sanguíneo. Cuidar las adicciones, estar alerta al control externo.",

            flematico:
                "Kapha + Flemático: Es la expresión más natural y equilibrada de este biotipo, ya que ambos sistemas comparten los elementos agua y tierra. Esforzarse en salir de la zona de confort.",

            colerico:
                "Kapha + Colérico: Es una combinación inusual que roza el biotipo mixto. El impulso colérico empuja la pesadez natural de Kapha hacia la acción. Debe estar siempre alerta a sus emociones."

        }
    };  


    resultDescription.textContent =
       combinationDescriptions[dominantDosha][dominantBiotype];


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