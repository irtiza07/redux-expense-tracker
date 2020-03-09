import React, { useState } from 'react'
import { Form, FormGroup, Label, Input, Button } from 'reactstrap';
import './AddTransactionForm.css';

export default function AddTransactionForm({ addTransaction }) {
  const [description, setDescription] = useState("")
  const [amount, setAmount] = useState("")

  const onDescriptionChange = event => {
    setDescription(event.target.value)
  }
  const onAmountChange = event => {
    setAmount(event.target.value)
  }
  const submitForm = event => {
    const type = amount.substring(0,1) === '+'? 'income' : 'expense';
    addTransaction({ name : description, amount : amount.substring(1), type: type})
    setDescription("")
    setAmount("")
    event.preventDefault()
  }

  return (
    <Form className="form-outer" onSubmit={e => submitForm(e)}>
      <FormGroup className="form-group">
        <Label for="description">Description</Label>
        <Input autoFocus type="text" name="description" id="description" onChange={onDescriptionChange} value={description} />
      </FormGroup>
      <FormGroup>
        <Label for="amount">Amount</Label>
        <Input type="text" name="amount" id="amount" onChange={onAmountChange} value={amount} />
      </FormGroup>
      <Button>Submit</Button>
    </Form>
  );
}
