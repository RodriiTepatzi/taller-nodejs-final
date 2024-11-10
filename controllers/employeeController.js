const db = require('../config/db');

exports.createEmployee = (req, res) => {
  const { name, lastName, phone, email, address } = req.body;
  const query = 'INSERT INTO employees (name, lastName, phone, email, address) VALUES (?, ?, ?, ?, ?)';
  
  db.query(query, [name, lastName, phone, email, address], (err, result) => {
    if (err) return res.status(500).json({ message: 'Database error', error: err });

    res.status(201).json({ id: result.insertId, name, lastName, phone, email, address });
  });
};

exports.getEmployees = (req, res) => {
  const query = 'SELECT * FROM employees';

  db.query(query, (err, results) => {
    if (err) return res.status(500).json({ message: 'Database error', error: err });

    res.json(results);
  });
};

exports.getEmployeeById = (req, res) => {
  const query = 'SELECT * FROM employees WHERE id = ?';

  db.query(query, [req.params.id], (err, results) => {
    if (err) return res.status(500).json({ message: 'Database error', error: err });

    if (results.length === 0) {
      return res.status(404).json({ message: 'Employee not found' });
    }

    res.json(results[0]);
  });
};

exports.updateEmployee = (req, res) => {
  const { name, lastName, phone, email, address } = req.body;
  const query = 'UPDATE employees SET name = ?, lastName = ?, phone = ?, email = ?, address = ? WHERE id = ?';

  db.query(query, [name, lastName, phone, email, address, req.params.id], (err, result) => {
    if (err) return res.status(500).json({ message: 'Database error', error: err });

    res.json({ message: 'Employee updated successfully' });
  });
};

exports.deleteEmployee = (req, res) => {
  const query = 'DELETE FROM employees WHERE id = ?';

  db.query(query, [req.params.id], (err, result) => {
    if (err) return res.status(500).json({ message: 'Database error', error: err });

    res.status(204).end();
  });
};

exports.searchEmployee = (req, res) => {
  const { name } = req.query;
  const query = 'SELECT * FROM employees WHERE name LIKE ?';

  db.query(query, [`%${name}%`], (err, results) => {
    if (err) return res.status(500).json({ message: 'Database error', error: err });

    res.json(results);
  });
};