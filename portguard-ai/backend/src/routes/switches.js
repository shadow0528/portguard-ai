const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
  res.json({ message: 'Get all switches' });
});

router.get('/interfaces', (req, res) => {
  res.json({ message: 'Get switch interfaces' });
});

router.get('/vlan', (req, res) => {
  res.json({ message: 'Get switch VLANs' });
});

module.exports = router;
