const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
  res.json({ message: 'Get all devices' });
});

router.get('/:id', (req, res) => {
  res.json({ message: `Get device ${req.params.id}` });
});

router.post('/approve', (req, res) => {
  res.json({ message: 'Approve device' });
});

router.post('/quarantine', (req, res) => {
  res.json({ message: 'Quarantine device' });
});

router.post('/reassign-vlan', (req, res) => {
  res.json({ message: 'Reassign VLAN' });
});

module.exports = router;
