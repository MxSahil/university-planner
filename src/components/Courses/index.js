
import React from 'react';
import {CourseTilesCont, CourseTile, CourseTileTitle}
        from './CoursesElements.js';

const Courses = () => {
  return (
      <>
      <CourseTilesCont>
        <CourseTile>
          <CourseTileTitle to="Classes/TodaysClasses">Today's Classes</CourseTileTitle>
        </CourseTile>
        <CourseTile>
          <CourseTileTitle to="Classes/Calendar">Calendar</CourseTileTitle>
        </CourseTile>
        <CourseTile>
          <CourseTileTitle to="Classes/AcademicHistory">Academic History</CourseTileTitle>
        </CourseTile>
        <CourseTile>
          <CourseTileTitle to="Classes/Calculator">Calculator</CourseTileTitle>
        </CourseTile>
      </CourseTilesCont>
      </>
    );
  };

export default Courses;
