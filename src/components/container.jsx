import React from "react";
import BASE from "./base";
import RESULT from "./result";
/* eslint-disable react-refresh/only-export-components */
// eslint-disable-next-line react/display-name, react-refresh/only-export-components
const questions = [
    {
      title: 'JavaScript - это ... ',
      variants: ['язык программирования', 'фреймворк', 'библиотека'],
      correct: 0
    },
    {
      title: 'Что такое HTML?',
      variants: ['Язык разметки', 'Язык программирования', 'Фреймворк'],
      correct: 0
    },
    {
      title: 'Что такое CSS?',
      variants: ['Текстовый редактор', 'Язык программирования', 'Язык таблиц стилей'],
      correct: 2
    },
    {
      title: 'Что такое git?',
      variants: ['Система управления базами данных', 'Система управления версиями кода', 'Интегрированная среда разработки'],
      correct: 1
    },
    {
      title: 'Что такое API?',
      variants: ['Ассоциация программных интерфейсов', 'Приложение программного интерфейса', 'Интерфейс прикладного программирования'],
      correct: 2
    },
    {
      title: 'Что такое AJAX?',
      variants: ['Новая технология разработки веб-приложений', 'Метод обмена данными между браузером и сервером без полной перезагрузки страницы', 'Асинхронная передача данных между сервером и клиентом'],
      correct: 1
    },
    {
      title: 'Что такое responsive web design?',
      variants: ['Дизайн адаптивного интерфейса', 'Дизайн для мобильных устройств', 'Дизайн для печати'],
      correct: 0
    },
    {
      title: 'Что такое MVP в разработке?',
      variants: ['Minimal Viable Product', 'Most Valuable Player', 'Model View Presenter'],
      correct: 0
    },
    {
      title: 'Что такое virtual DOM в React?',
      variants: ['Виртуальное представление DOM-структуры', 'Виртуальная машина для обработки DOM-событий', 'Виртуальная среда для тестирования компонентов'],
      correct: 0
    }
  ]






// eslint-disable-next-line react/display-name
export default function () {
    const [step, setStep] = React.useState(0);
    const [correct, setCorrect] = React.useState(0);
    const question = questions[step];
    const percentage = Math.round(step/questions.length * 100);
    const length = questions.length;
    // eslint-disable-next-line no-unused-vars
    const clickedVariant = (index) => {
        setStep(step+1);
        if (index == question.correct) {
            setCorrect(correct + 1);
        }
        console.log(correct);
    }
    
    return(
        <>
        {
            step != questions.length?(<BASE question={question} clickedVariant={clickedVariant} percentage={percentage}/>):(<RESULT correct={correct} length={length}/>)
        }
        </>
        
        
    )
}