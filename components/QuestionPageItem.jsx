const React = require('react')

function QuestionPageItem({question}) {
    return (
        <div className="row">
        <div className="col s12 m7">
          <div className="card">
            <div className="card-image">
              <span className="card-title"></span>
            </div>
            <div className="card-content">
              <p>{question.title}</p>
            </div>
            <div className="card-action">
              <button data-id={question.id} className='new-question' href="#">This is a link</button>
            </div>
          </div>
        </div>
      </div>
    )
    
}

module.exports = QuestionPageItem