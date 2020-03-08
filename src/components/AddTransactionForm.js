import React from 'react'
import { Form, FormGroup, Label, Input, FormFeedback, FormText } from 'reactstrap';

export default function AddTransactionForm() {
  return (
    <Form>
      <FormGroup>
        <Label for="exampleEmail">Valid input</Label>
        <Input valid />
        <FormFeedback valid>Sweet! that name is available</FormFeedback>
        <FormText>Example help text that remains unchanged.</FormText>
      </FormGroup>
      <FormGroup>
        <Label for="examplePassword">Invalid input</Label>
        <Input invalid />
        <FormFeedback>Oh noes! that name is already taken</FormFeedback>
        <FormText>Example help text that remains unchanged.</FormText>
      </FormGroup>
    </Form>
  );
}
