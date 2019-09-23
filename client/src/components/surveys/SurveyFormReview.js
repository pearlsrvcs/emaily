import _ from 'lodash'
import React from 'react'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'

import * as actions from '../../actions'
import FIELDS from './formFields'

const SurveyFormReview = ({onCancel, formValues, submitSurvey, history}) => {
  const reviewFields = _.map(FIELDS, ({ name, label }) => {
    return (
      <div key = {name}>
        <label>{label}</label>      
        <div>
          {formValues[name]}
        </div>
      </div>
    )
  })

  return (
    <div>
      <h3>Please confirm your entries!</h3>

      {reviewFields}
      <div style={{margin: '20px 0'}}>
        <button className='green btn-flat right white-text' type="submit" onClick={() => submitSurvey(formValues, history)}>Send Survey<i className="material-icons right">email</i></button>
        <button className='orange darken-3 white-text btn-flat left' onClick={onCancel}>Back<i className="material-icons right">delete_forever</i></button>
      </div>
    </div>
  )
}

function mapStateToProps (state) {
  return {
    formValues: state.form.surveyForm.values
  }
}

export default connect(mapStateToProps, actions)(withRouter(SurveyFormReview))