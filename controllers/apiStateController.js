const db = require('../config/db');

exports.getStates = (req, res) => {
    db.query('SELECT * FROM States', (err, results) => {
        if (err) {
            return res.status(500).send(err);
        }
        res.json(results);
    });
};

exports.createState = (req, res) => {
    const { name, description } = req.body;
    db.query('INSERT INTO States (name, description) VALUES (?, ?)', [name, description], (err, results) => {
        if (err) {
            return res.status(500).send(err);
        }
        res.json({ id: results.insertId, name, description });
    });
};

exports.updateState = (req, res) => {
    const { id } = req.params;
    const { name, description } = req.body;
    db.query('UPDATE States SET name = ?, description = ? WHERE id = ?', [name, description, id], (err) => {
        if (err) {
            return res.status(500).send(err);
        }
        res.sendStatus(204);
    });
};

exports.deleteState = (req, res) => {
    const { id } = req.params;
    db.query('DELETE FROM States WHERE id = ?', [id], (err) => {
        if (err) {
            return res.status(500).send(err);
        }
        res.sendStatus(204);
    });
};
