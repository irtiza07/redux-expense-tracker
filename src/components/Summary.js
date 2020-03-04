import React from 'react'
import './Summary.css';
import { Card, CardGroup, CardTitle, CardSubtitle} from 'reactstrap';

export default function Summary({ totalIncome, totalExpense }) {
  return (
    <CardGroup className="Summary">
      <Card className="SummaryItemIncome">
        <CardTitle>Income</CardTitle>
        <CardSubtitle>${ totalIncome.toLocaleString() }.00</CardSubtitle>
      </Card>
      <Card className="SummaryItemExpense">
        <CardTitle>Expense</CardTitle>
        <CardSubtitle>${ totalExpense.toLocaleString() }.00</CardSubtitle>
      </Card>
    </CardGroup>
  );
};