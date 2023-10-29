import "./Questions.css";

const QuizInterface = () => {
  return (
    <div className="quiz-interface">
    
      <div className="quiz-interface-inner">
        <div className="rectangle-parent">
          <div className="group-child" />
          <div className="submit">SUBMIT</div>
        </div>
      </div>
      <b className="b">04/04</b>
      <div className="your-question-text-comes-here-wrapper">
        <b className="your-question-text">
          Your question text comes here, its a sample text.
        </b>
      </div>
      <b className="s">00:10s</b>
      <div className="group-parent">
        <div className="group-wrapper">
          <div className="group-wrapper">
            <div className="group-item" />
            <div className="option-1">Option 1</div>
          </div>
        </div>
        <div className="group-container">
          <div className="group-wrapper">
            <div className="group-inner" />
            <div className="option-1">Option 1</div>
          </div>
        </div>
        <div className="group-div">
          <div className="group-wrapper">
            <div className="group-item" />
          </div>
          <div className="option-1">Option 1</div>
        </div>
        <div className="group-frame">
          <div className="group-wrapper">
            <div className="group-item" />
            <div className="option-1">Option 1</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default QuizInterface;
