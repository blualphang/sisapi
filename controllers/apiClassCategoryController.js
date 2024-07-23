const db = require('../config/db');
// [Id] [uniqueidentifier] NOT NULL,
// 	[Version] [timestamp] NULL,
// 	[UpdatedAt] [datetimeoffset](7) NOT NULL,
// 	[ClassCategoryName] [nvarchar](50) NULL,
// 	[Deleted] [bit] NULL,
// 	[ClassCategoryCode] [nvarchar](50) NULL,
exports.getClassCategorys = (req, res) => {
    db.query('SELECT * FROM ClassCategorys', (err, results) => {
        if (err) {
            return res.status(500).send(err);
        }
        res.json(results);
    });
};git

exports.createClassCategorys = (req, res) => {
    const { Id, UpdatedAt, ClassCategoryName,Deleted, ClassCategoryCode  } = req.body;
    db.query('INSERT INTO ClassCategorys (Id, UpdatedAt, ClassCategoryName,Deleted, ClassCategoryCode ) VALUES (?, ?)', [Id, UpdatedAt, ClassCategoryName,Deleted, ClassCategoryCode ], (err, results) => {
        if (err) {
            return res.status(500).send(err);
        }
        res.json({ id: results.insertId, name, description });
    });
};

exports.updateClassCategorys = (req, res) => {
    const { id } = req.params;
    const { UpdatedAt, ClassCategoryName,Deleted, ClassCategoryCode  } = req.body;
    db.query('UPDATE ClassCategorys SET UpdatedAt = ?, ClassCategoryName = ?, Deleted = ?, ClassCategoryCode =?    WHERE id = ?', [ UpdatedAt, ClassCategoryName,Deleted, ClassCategoryCode , id], (err) => {
        if (err) {
            return res.status(500).send(err);
        }
        res.sendStatus(204);
    });
};

exports.deleteClassCategorys = (req, res) => {
    const { id } = req.params;
    db.query('DELETE FROM ClassCategorys WHERE id = ?', [id], (err) => {
        if (err) {
            return res.status(500).send(err);
        }
        res.sendStatus(204);
    });
};
