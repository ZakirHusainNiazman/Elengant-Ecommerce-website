import { useState } from 'react';


import cssClasses from "../ProductPage.module.css";
import Question from "./Question";

function MostAskedQuestion({questions}) {
  const [openQuestionId, setOpenQuestionId] = useState('');

  function handleOpenQuestion(id) {
    if (id === openQuestionId) {
      return setOpenQuestionId('');
    }
    setOpenQuestionId(id);
  }
  return (
    <div className={cssClasses["most-asked-question-con"]}>
      <h1 className={cssClasses["questions-main-title"]}>Most Questions</h1>
      <div className={cssClasses["questions-input-con"]}>
        <form action="">
          <input type="text" />
          <button>Submit</button>
        </form>
      </div>
      <div className={cssClasses["questions-container"]}>
        {questions.map((question) => (
          <Question
            key={question.id}
            question={question.question}
            answer={question.answer}
            isActive={question.id === openQuestionId}
            openQuestion={() => handleOpenQuestion(question.id)}
          />
        ))
        }
      </div>
      ;
    </div>
  );
}

export default MostAskedQuestion;
