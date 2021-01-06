import React from 'react';
import {CourseTilesCont, CourseTile} from './CoursesElements.js';

const Courses = () => {
  return (

      <>
      <CourseTilesCont>
        <CourseTile>Classes Today</CourseTile>
        <CourseTile>Calendar</CourseTile>
        <CourseTile>GPA Calculator</CourseTile>
        <CourseTile>Grade Calculator</CourseTile>
      </CourseTilesCont>
      </>

  );

};

export default Courses;
