import React from 'react'

export default function About(props) {
  document.title='Textutils-About';
  return (
    <>
    <h1 className={`set-${props.mode} my-3`}>About us</h1>
    <div className="accordion" id="accordionExample">
      <div className={`accordion-item set-${props.mode}-b set-${props.mode}`}>
        <h2 className="accordion-header">
          <button className={`accordion-button set-${props.mode}-b set-${props.mode}`} type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
          Analyze Your text
          </button>
        </h2>
        <div id="collapseOne" className="accordion-collapse collapse show" data-bs-parent="#accordionExample">
          <div className="accordion-body">
            <strong>Textutils gives you a way to analyze your text quickly and efficiently.</strong> Be it word count, character count or  any of the function
          </div>
        </div>
      </div>
      <div className={`accordion-item set-${props.mode}-b set-${props.mode}`}>
        <h2 className="accordion-header">
          <button className={`accordion-button set-${props.mode}-b set-${props.mode} collapsed`} type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseTwo" aria-expanded="false" aria-controls="panelsStayOpen-collapseTwo">
          Free to use
          </button>
        </h2>
        <div id="panelsStayOpen-collapseTwo" className="accordion-collapse collapse"data-bs-parent="#accordionExample">
          <div className="accordion-body">
            <strong>TextUtils is a free character counter tool that provides instant character count & word count statistics for a given text. TextUtils reports the number of words and characters. Thus it is suitable for writing text with word/ character limit.</strong>TextUtils reports the number of words and characters. Thus it is suitable for writing text with word/ character limit.
          </div>
        </div>
      </div>
      <div className={`accordion-item set-${props.mode}-b set-${props.mode}`}>
        <h2 className="accordion-header">
          <button className={`accordion-button set-${props.mode}-b set-${props.mode} collapsed`} type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseThree" aria-expanded="false" aria-controls="panelsStayOpen-collapseThree">
          Browser Compatible
          </button>
        </h2>
        <div id="panelsStayOpen-collapseThree" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
          <div className="accordion-body">
            <strong>This word counter software works in any web browsers such as Chrome, Firefox, Internet Explorer, Safari, Opera.</strong>  It suits to count characters in facebook, blog, books, excel document, pdf document, essays, etc.
          </div>
        </div>
      </div>
      <div className={`accordion-item set-${props.mode}-b set-${props.mode}`}>
        <h2 className="accordion-header">
          <button className={`accordion-button set-${props.mode}-b set-${props.mode} collapsed`} type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseFour" aria-expanded="false" aria-controls="panelsStayOpen-collapseFour">
          Made By
          </button>
        </h2>
        <div id="panelsStayOpen-collapseFour" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
          <div className="accordion-body">
            <strong>-Bhavya Dhanwani</strong>
          </div>
        </div>
      </div>
    </div>
  </>
  )
}
