const db = require('../config/db');

exports.getLgas = (req, res) => {
    db.query('SELECT * FROM Lgas', (err, results) => {
        if (err) {
            return res.status(500).send(err);
        }
        res.json(results);
    });
};git

exports.createLga = (req, res) => {
    const { name, description } = req.body;
    db.query('INSERT INTO Lgas (name, description) VALUES (?, ?)', [name, description], (err, results) => {
        if (err) {
            return res.status(500).send(err);
        }
        res.json({ id: results.insertId, name, description });
    });
};

exports.updateLga = (req, res) => {
    const { id } = req.params;
    const { name, description } = req.body;
    db.query('UPDATE Lgas SET name = ?, description = ? WHERE id = ?', [name, description, id], (err) => {
        if (err) {
            return res.status(500).send(err);
        }
        res.sendStatus(204);
    });
};

exports.deleteLga = (req, res) => {
    const { id } = req.params;
    db.query('DELETE FROM Lgas WHERE id = ?', [id], (err) => {
        if (err) {
            return res.status(500).send(err);
        }
        res.sendStatus(204);
    });
};
