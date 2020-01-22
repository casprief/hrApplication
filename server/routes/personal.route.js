const express= require('express');
const router = express.Router();
const emplCtrl = require('../controllers/employee.controller');

router.get('/', emplCtrl.getEmployees);
router.post('/', emplCtrl.createEmployees);
router.get('/:id', emplCtrl.getEmployee);
router.put('/:id', emplCtrl.editEmployee); //Edit
router.delete('/:id', emplCtrl.deleteEmployee);

module.exports = router;