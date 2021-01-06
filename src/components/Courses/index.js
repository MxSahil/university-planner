
import React from 'react';
import {CourseTilesCont, CourseTile, CourseTileTitle}
        from './CoursesElements.js';

const Courses = () => {
  return (
      <>
      <CourseTilesCont>
        <CourseTile>
          <CourseTileTitle to="/Classes/TodaysClasses">Today's Classes</CourseTileTitle>
        </CourseTile>

        <CourseTile>
          <CourseTileTitle to="/Classes/Calendar">Calendar</CourseTileTitle>
        </CourseTile>

        <CourseTile>
          <CourseTileTitle to="/Classes/GPACalculator">GPA Calculator</CourseTileTitle>
        </CourseTile>

        <CourseTile>
          <CourseTileTitle to="/Classes/GradeCalculator">Grade Calculator</CourseTileTitle>
        </CourseTile>
      </CourseTilesCont>
      </>
  );

};

export default Courses;
