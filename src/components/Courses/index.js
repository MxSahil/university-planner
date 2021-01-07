
import React from 'react';
import {CourseTilesCont, CourseTile, CourseTileTitle, TodaysClassesList, TileInfo,
        ClassListItem, ClassName, ClassInfo, CalendarButton, CalendarButtonCont}
        from './CoursesElements.js';

const Courses = () => {
  return (
      <>
      <CourseTilesCont>
        <CourseTile>
          <CourseTileTitle to="Classes/TodaysClasses">Today's Classes</CourseTileTitle>
          <TodaysClassesList>
            <ClassListItem>
              <ClassName>CSC207H5 F</ClassName>
              <ClassInfo>LEC         5:00PM-7:00PM          MN-1270</ClassInfo>
            </ClassListItem>
            <ClassListItem>
              <ClassName>MAT232H5 F</ClassName>
              <ClassInfo>TUT          12:00PM-1:00PM          DV-1100</ClassInfo>
            </ClassListItem>
            <ClassListItem>
              <ClassName>CSC236H5 F</ClassName>
              <ClassInfo>LEC          3:00PM-4:00PM        MN-2270</ClassInfo>
            </ClassListItem>
          </TodaysClassesList>
          <CalendarButtonCont>
           <CalendarButton>View Calendar</CalendarButton>
          </CalendarButtonCont>
        </CourseTile>
        <CourseTile>
          <CourseTileTitle to="Classes/Calendar">Calendar</CourseTileTitle>
          <TileInfo>View and update your calendar.</TileInfo>
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
