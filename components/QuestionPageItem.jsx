const React = require('react')

function QuestionPageItem({question, theme}) {
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
            <div className="card-action">
              
            </div>
            <div class="row">
    <form class="col s12 questionForm" data-id={question.id} >
      <div class="row">
        <div class="input-field col s12">
          <input id="email" type="text" name='answer' class="validate" placeholder='Ваш ответ'/>
          <button type='submit' class="waves-effect waves-light btn">Ответить</button>
        </div>
      </div>
    </form>
    <div className='text-answer'></div>
  </div>
            
          </div>
        </div>
      </div>
      <a href={`/themes/${theme.id}/${question.id + 1}`}> Next </a>
      </>
    )
    
}

module.exports = QuestionPageItem