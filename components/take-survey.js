import React from 'react';
import {useSelector} from 'react-redux';
import {Button} from 'reactstrap';
import {Link} from 'react-router-dom';

function TakeSurvey() {
  const surveyIDs = useSelector((globalStore) =>
    globalStore.surveys.filter((s) => s.isPublished).map((s) => s.surveyId)
  );

  return (
    <>
      {surveyIDs.length === 0 && (
        <>
          {' '}
          <p style={{fontSize: '35px'}}>No surveys At the Moment ☹️..</p>{' '}
          <Link to="/">
            <Button className="survey-page-btn "> Back </Button>
          </Link>
        </>
      )}
      {surveyIDs.map((surveyId) => (
        <Button className="btn" key={surveyId}>
          Take Survey {surveyId}
        </Button>
      ))}
    </>
  );
}

export default TakeSurvey;