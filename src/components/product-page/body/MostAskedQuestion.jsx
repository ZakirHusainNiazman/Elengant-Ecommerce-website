import cssClasses from "../ProductPage.module.css";
import Question from "./Question";

function MostAskedQuestion() {
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
        <Question
          question="Can you this in different color"
          answer="Yes we can But your will have to pay in advance in order to get your
          product ready."
          isActive={true}
        />
        <Question
          question="Can you this in different color"
          answer="Yes we can But your will have to pay in advance in order to get your
          product ready."
        />
        <Question
          question="Can you this in different color"
          answer="Yes we can But your will have to pay in advance in order to get your
          product ready."
        />
        <Question
          question="Can you this in different color"
          answer="Yes we can But your will have to pay in advance in order to get your
          product ready."
        />
        <Question
          question="Can you this in different color"
          answer="Yes we can But your will have to pay in advance in order to get your
          product ready."
        />
      </div>
      ;
    </div>
  );
}

export default MostAskedQuestion;
