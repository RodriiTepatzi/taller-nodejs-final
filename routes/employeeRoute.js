const express = require('express');
const { createEmployee, getEmployees, getEmployeeById, updateEmployee, deleteEmployee, searchEmployee } = require('../controllers/employeeController');
const authMiddleware = require('../middlewares/authMiddleware');

const router = express.Router();

router.post('/', authMiddleware, createEmployee);
router.get('/search', authMiddleware, searchEmployee);
router.get('/', authMiddleware, getEmployees);
router.get('/:id', authMiddleware, getEmployeeById);
router.put('/:id', authMiddleware, updateEmployee);
router.delete('/:id', authMiddleware, deleteEmployee);

module.exports = router;
