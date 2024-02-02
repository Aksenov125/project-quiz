const React = require("react");


function QuestionPageItem({ question, theme }) {
  return (
    <>
      <div className="row">
        <div className="col s12 m7">
          <div className="card">
            <div className="card-image">
              <span className="card-title"></span>
            </div>
            <div className="card-content">
              <p>{question.title}</p>
            </div>
            <div className="card-action"></div>
            <div className="row">
              <form className="col s12 questionForm" data-id={question.id}>
                <div className="row">
                  <div className="input-field col s12">
                    <input
                      id="email"
                      type="text"
                      name="answer"
                      className="validate"
                      placeholder="Ваш ответ"
                    />
                    <button type="submit" className="btn waves-effect waves-teal">
                      Ответить
                    </button>
                  </div>
                </div>
              </form>
              <div className="text-answer"></div>
            </div>
          </div>
        </div>
      </div>
      <a class="beautiful-button" href={`/themes/${theme.id}/${question.id + 1}`}>Следущий вопрос<i class="material-icons right"></i> </a>
    </>
  );
}



module.exports = QuestionPageItem;
