const express = require('express');
const { addExpenses, getExpenses, deleteExpenses } = require('../controllers/expenses');
const { addIncome, getIncomes, deleteIncome } = require('../controllers/income');

const router = express.Router();

router.post('/add-income', addIncome);
router.get('/get-incomes', getIncomes);
router.delete('/delete-income/:id', deleteIncome);
router.post('/add-expense', addExpenses);
router.get('/get-expenses', getExpenses);
router.delete('/delete-expense/:id', deleteExpenses);

module.exports = router;
