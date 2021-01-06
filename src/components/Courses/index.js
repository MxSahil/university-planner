
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

export default Courses;
