const db = require('../config/db');

exports.getCaReults = (req, res) => {
    db.query('SELECT * FROM CaReults', (err, results) => {
        if (err) {
            return res.status(500).send(err);
        }
        res.json(results);
    });
};


exports.createCaReult = (req, res) => {
    const { Id, UpdatedAt, SchoolId, SessionId, TermId, StudentId, StudentIdNo, ClassId, ClassAverAge_Age, NoInClass, CA1TotalSCore, CA2TotalSCore, CA1AverAge_SCore, CA2AverAge_SCore, CA1ClassAverAge_SCore, CA2ClassAverAge_SCore, CA1PositionInClass, CA2PositionInClass, NoInYearGroup, CA1PositionOverall, CA2PositionOverall, Age, FormTeacherName, DateGenerated, Deleted, StudentName, CA1OverallAverAge_SCore, CA2OverallAverAge_SCore, StudentLocked } = req.body;
    db.query('INSERT INTO CaReults (Id, UpdatedAt, SchoolId, SessionId, TermId, StudentId, StudentIdNo, ClassId, ClassAverAge_Age, NoInClass, CA1TotalSCore, CA2TotalSCore, CA1AverAge_SCore, CA2AverAge_SCore, CA1ClassAverAge_SCore, CA2ClassAverAge_SCore, CA1PositionInClass, CA2PositionInClass, NoInYearGroup, CA1PositionOverall, CA2PositionOverall, Age, FormTeacherName, DateGenerated, Deleted, StudentName, CA1OverallAverAge_SCore, CA2OverallAverAge_SCore, StudentLocked) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)', [Id, UpdatedAt, SchoolId, SessionId, TermId, StudentId, StudentIdNo, ClassId, ClassAverAge_Age, NoInClass, CA1TotalSCore, CA2TotalSCore, CA1AverAge_SCore, CA2AverAge_SCore, CA1ClassAverAge_SCore, CA2ClassAverAge_SCore, CA1PositionInClass, CA2PositionInClass, NoInYearGroup, CA1PositionOverall, CA2PositionOverall, Age, FormTeacherName, DateGenerated, Deleted, StudentName, CA1OverallAverAge_SCore, CA2OverallAverAge_SCore, StudentLocked], (err, results) => {
        if (err) {
            return res.status(500).send(err);
        }
        res.json({ id: results.insertId, UpdatedAt, SchoolId, SessionId, TermId, StudentId, StudentIdNo, ClassId, ClassAverAge_Age, NoInClass, CA1TotalSCore, CA2TotalSCore, CA1AverAge_SCore, CA2AverAge_SCore, CA1ClassAverAge_SCore, CA2ClassAverAge_SCore, CA1PositionInClass, CA2PositionInClass, NoInYearGroup, CA1PositionOverall, CA2PositionOverall, Age, FormTeacherName, DateGenerated, Deleted, StudentName, CA1OverallAverAge_SCore, CA2OverallAverAge_SCore, StudentLocked });
    });
};

exports.updateCaReult = (req, res) => {
    const { id } = req.params;
    const {UpdatedAt, SchoolId, SessionId, TermId, StudentId, StudentIdNo, ClassId, ClassAverAge_Age, NoInClass, CA1TotalSCore, CA2TotalSCore, CA1AverAge_SCore, CA2AverAge_SCore, CA1ClassAverAge_SCore, CA2ClassAverAge_SCore, CA1PositionInClass, CA2PositionInClass, NoInYearGroup, CA1PositionOverall, CA2PositionOverall, Age, FormTeacherName, DateGenerated, Deleted, StudentName, CA1OverallAverAge_SCore, CA2OverallAverAge_SCore, StudentLocked } = req.body;
    db.query('UPDATE CaReults SET UpdatedAt = ?, SchoolId = ? , SessionId = ?, TermId = ?, StudentId = ?, SchoolId = ?, StudentIdNo = ?, ClassId = ?, ClassAverAge_Age = ?, NoInClass = ?, CA1TotalSCore = ?, SchoolId = ?, SchoolId = ?, SchoolId = ?, SchoolId = ?, SchoolId = ?, SchoolId = ? WHERE id = ?', [UpdatedAt, SchoolId, SessionId, TermId, StudentId, StudentIdNo, ClassId, ClassAverAge_Age, NoInClass, CA1TotalSCore, CA2TotalSCore, CA1AverAge_SCore, CA2AverAge_SCore, CA1ClassAverAge_SCore, CA2ClassAverAge_SCore, CA1PositionInClass, CA2PositionInClass, NoInYearGroup, CA1PositionOverall, CA2PositionOverall, Age, FormTeacherName, DateGenerated, Deleted, StudentName, CA1OverallAverAge_SCore, CA2OverallAverAge_SCore, StudentLocked, id], (err) => {
        if (err) {
            return res.status(500).send(err);
        }
        res.sendStatus(204);
    });
};

exports.deleteCaReult = (req, res) => {
    const { id } = req.params;
    db.query('DELETE FROM CaReults WHERE id = ?', [id], (err) => {
        if (err) {
            return res.status(500).send(err);
        }
        res.sendStatus(204);
    });
};
