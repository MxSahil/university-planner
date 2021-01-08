import React from "react";
import {FormCont, FormTitle, SectionTitle, InputsCont, InputSection, Label, Input, ProgressBar, Progress } from './BuildBudgetElements.js';

const FormPage = () => {
  return (
    <>
    <FormCont>
      <ProgressBar>
        <Progress></Progress>
      </ProgressBar>
      <FormTitle>Build Your Budget</FormTitle>
      <SectionTitle>Income (Sources of Money)</SectionTitle>
      <InputsCont>

        <InputSection>
          <Label>Registered Education Savings Plan</Label>
          <Input type="text" placeholder="Amount($)"></Input>
        </InputSection>

        <InputSection>
          <Label>Part-time work</Label>
          <Input type="text" placeholder="Amount($)"></Input>
        </InputSection>

        <InputSection>
          <Label>Tips</Label>
          <Input type="text" placeholder="Amount($)"></Input>
        </InputSection>

        <InputSection>
          <Label>Scholarships, grants, and bursaries</Label>
          <Input type="text" placeholder="Amount($)"></Input>
        </InputSection>

        <InputSection>
          <Label>Other personal savings</Label>
          <Input type="text" placeholder="Amount($)"></Input>
        </InputSection>

        <InputSection>
          <Label>Family contributions</Label>
          <Input type="text" placeholder="Amount($)"></Input>
        </InputSection>


        <InputSection>
          <Label>Student Loans</Label>
          <Input type="text" placeholder="Amount($)"></Input>
        </InputSection>

        <InputSection>
          <Label>Gifts</Label>
          <Input type="text" placeholder="Amount($)"></Input>
        </InputSection>

        <InputSection>
          <Label>Other</Label>
          <Input type="text" placeholder="Amount($)"></Input>
        </InputSection>

        <InputSection>
          <Label>Total yearly income:</Label>
          <Label>$100,000</Label>
        </InputSection>

      </InputsCont>

    </FormCont>


    </>
  );
};

export default FormPage;
