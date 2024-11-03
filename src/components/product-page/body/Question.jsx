import cssClasses from "../ProductPage.module.css";

function Question({question,answer,isActive}) {
  return (
    <div
      className={`${cssClasses["question-wrapper"]} ${
        isActive && cssClasses["question-active"]
      }`}
    >
      <div className={cssClasses["question"]}>
        <p className={cssClasses["question-body"]}>{question}?</p>
        <span className={cssClasses["question-detaile-icon"]}>&#9650;</span>
      </div>
      <div className={cssClasses["answer"]}>
        <p className={cssClasses["answer-body"]}>{answer}</p>
      </div>
    </div>
  );
}

export default Question;
