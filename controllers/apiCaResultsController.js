


//const db = require('../config/db');
const { sql } = require('../config/db');

async function getCaResults(req, res) {
  try {
    const result = await sql.query`SELECT * FROM CaReults`;
    res.json(result.recordset);
  } catch (err) {
    res.status(500).send('Error retrieving data from database');
  }
}


async function getCaResultsByTermIdSessionId(req, res) {
  try {
    const { termId, sessionId } = req.params;
    const result = await sql.query`SELECT * FROM CaResults WHERE TermId = ${termId} AND SessionId =${sessionId}`;
    if (result.recordset.length === 0) {
      return res.status(404).send('Caresult not found');
    }
    res.json(result.recordset[0]);
  } catch (err) {
    res.status(500).send('Error retrieving data from database');
  }
}

async function createCaResult(req, res) {
  try {
    const { Id, UpdatedAt, SchoolId, SessionId, TermId, StudentId, StudentIdNo, ClassId, ClassAverAge_Age, NoInClass, CA1TotalSCore, CA2TotalSCore, CA1AverAge_SCore, CA2AverAge_SCore, CA1ClassAverAge_SCore, CA2ClassAverAge_SCore, CA1PositionInClass, CA2PositionInClass, NoInYearGroup, CA1PositionOverall, CA2PositionOverall, Age, FormTeacherName, DateGenerated, Deleted, StudentName, CA1OverallAverAge_SCore, CA2OverallAverAge_SCore, StudentLocked } = req.body;
    await sql.query`INSERT INTO CaReults (Id, UpdatedAt, SchoolId, SessionId, TermId, StudentId, StudentIdNo, ClassId, ClassAverAge_Age, NoInClass, CA1TotalSCore, CA2TotalSCore, CA1AverAge_SCore, CA2AverAge_SCore, CA1ClassAverAge_SCore, CA2ClassAverAge_SCore, CA1PositionInClass, CA2PositionInClass, NoInYearGroup, CA1PositionOverall, CA2PositionOverall, Age, FormTeacherName, DateGenerated, Deleted, StudentName, CA1OverallAverAge_SCore, CA2OverallAverAge_SCore, StudentLocked) VALUES (${Id}, ${UpdatedAt}, ${SchoolId}, ${SessionId}, ${TermId}, ${StudentId}, ${StudentIdNo}, ${ClassId}, ${ClassAverAge_Age}, ${NoInClass}, ${CA1TotalSCore}, ${CA2TotalSCore}, ${CA1AverAge_SCore}, ${CA2AverAge_SCore}, ${CA1ClassAverAge_SCore}, ${CA2ClassAverAge_SCore}, ${CA1PositionInClass}, ${CA2PositionInClass}, ${NoInYearGroup}, ${CA1PositionOverall}, ${CA2PositionOverall}, ${Age}, ${FormTeacherName}, ${DateGenerated}, ${Deleted}, ${StudentName}, ${CA1OverallAverAge_SCore}, ${CA2OverallAverAge_SCore}, ${StudentLocked})`
    res.status(201).send('Caresults created successfully');
  } catch (err) {
    res.status(500).send('Error creating Caresults');
  }
}

async function updateCaResult(req, res) {
  try {
    const { Id} = req.params;
    const { UpdatedAt, SchoolId, SessionId, TermId, StudentId, StudentIdNo, ClassId, ClassAverAge_Age, NoInClass, CA1TotalSCore, CA2TotalSCore, CA1AverAge_SCore, CA2AverAge_SCore, CA1ClassAverAge_SCore, CA2ClassAverAge_SCore, CA1PositionInClass, CA2PositionInClass, NoInYearGroup, CA1PositionOverall, CA2PositionOverall, Age, FormTeacherName, DateGenerated, Deleted, StudentName, CA1OverallAverAge_SCore, CA2OverallAverAge_SCore, StudentLocked } = req.body;
  
   // const result = await sql.query`UPDATE Users SET name = ${name}, email = ${email} WHERE id = ${Id}`;
   const result = await sql.query`UPDATE CaReults SET UpdatedAt = ${UpdatedAt}, SchoolId = ${SchoolId} , SessionId = ${SessionId}, TermId = ${TermId}, StudentId = ${StudentId}, StudentIdNo = ${StudentIdNo},  ClassId = ${ClassId}, ClassAverAge_Age = ${ClassAverAge_Age}, NoInClass = ${NoInClass}, CA1TotalSCore = ${CA1TotalSCore},  CA2TotalSCore = ${CA2TotalSCore},  CA1AverAge_SCore = ${CA1AverAge_SCore}, CA2AverAge_SCore =${CA2AverAge_SCore}, CA1ClassAverAge_SCore = ${CA1ClassAverAge_SCore}, CA2ClassAverAge_SCore =${CA2ClassAverAge_SCore},  CA1PositionInClass = ${CA1PositionInClass}, CA2PositionInClass =${CA2PositionInClass}, NoInYearGroup = ${NoInYearGroup}, CA1PositionOverall = ${CA1PositionOverall}, CA2PositionOverall = ${CA2PositionOverall}, Age = ${Age}, FormTeacherName= ${FormTeacherName},  DateGenerated= ${DateGenerated},Deleted= ${Deleted},StudentName= ${StudentName},CA1OverallAverAge_SCore= ${CA1OverallAverAge_SCore},CA2OverallAverAge_SCore= ${CA2OverallAverAge_SCore},StudentLocked = ${StudentLocked} WHERE Id = ${Id}'`;
    if (result.rowsAffected[0] === 0) {
      return res.status(404).send('CaResults not found');
    }
    res.send('CaResults updated successfully');
  } catch (err) {
    res.status(500).send('Error updating CaResults');
  }
}

async function deleteCaResult(req, res) {
  try {
    const { Id } = req.params;
    const result = await sql.query`DELETE FROM CaReults WHERE id = ${Id}`;
    if (result.rowsAffected[0] === 0) {
      return res.status(404).send('CaReults not found');
    }
    res.send('CaReults deleted successfully');
  } catch (err) {
    res.status(500).send('Error deleting CaReults');
  }
}

module.exports = {
    getCaResults,
    getCaResultsByTermIdSessionId,
    createCaResult,
  updateCaResult,
  deleteCaResult
};



//For MY SQL
/* async function createCaResult(req, res) {
    const { Id, UpdatedAt, SchoolId, SessionId, TermId, StudentId, StudentIdNo, ClassId, ClassAverAge_Age, NoInClass, CA1TotalSCore, CA2TotalSCore, CA1AverAge_SCore, CA2AverAge_SCore, CA1ClassAverAge_SCore, CA2ClassAverAge_SCore, CA1PositionInClass, CA2PositionInClass, NoInYearGroup, CA1PositionOverall, CA2PositionOverall, Age, FormTeacherName, DateGenerated, Deleted, StudentName, CA1OverallAverAge_SCore, CA2OverallAverAge_SCore, StudentLocked } = req.body;
    try {
      const result = await sql.query`INSERT INTO CaReults (Id, UpdatedAt, SchoolId, SessionId, TermId, StudentId, StudentIdNo, ClassId, ClassAverAge_Age, NoInClass, CA1TotalSCore, CA2TotalSCore, CA1AverAge_SCore, CA2AverAge_SCore, CA1ClassAverAge_SCore, CA2ClassAverAge_SCore, CA1PositionInClass, CA2PositionInClass, NoInYearGroup, CA1PositionOverall, CA2PositionOverall, Age, FormTeacherName, DateGenerated, Deleted, StudentName, CA1OverallAverAge_SCore, CA2OverallAverAge_SCore, StudentLocked) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, , ?)', [Id, UpdatedAt, SchoolId, SessionId, TermId, StudentId, StudentIdNo, ClassId, ClassAverAge_Age, NoInClass, CA1TotalSCore, CA2TotalSCore, CA1AverAge_SCore, CA2AverAge_SCore, CA1ClassAverAge_SCore, CA2ClassAverAge_SCore, CA1PositionInClass, CA2PositionInClass, NoInYearGroup, CA1PositionOverall, CA2PositionOverall, Age, FormTeacherName, DateGenerated, Deleted, StudentName, CA1OverallAverAge_SCore, CA2OverallAverAge_SCore, StudentLocked];
      res.json(result.recordset);
    } catch (err) {
      res.status(500).send('Error retrieving data from database');
    }
  }

// exports.getCaReults = (req, res) => {
//     db.query('SELECT * FROM CaReults', (err, results) => {
//         if (err) {
//             return res.status(500).send(err);
//         }
//         res.json(results);

//         //test
//     });
// };

async function getCaReults(req, res) {
    try {
      const result = await sql.querySELECT * FROM CaReults;
      res.json(result.recordset);
    } catch (err) {
      res.status(500).send('Error retrieving data from database');
    }
  }

exports.createCaResult = (req, res) => {
    const { Id, UpdatedAt, SchoolId, SessionId, TermId, StudentId, StudentIdNo, ClassId, ClassAverAge_Age, NoInClass, CA1TotalSCore, CA2TotalSCore, CA1AverAge_SCore, CA2AverAge_SCore, CA1ClassAverAge_SCore, CA2ClassAverAge_SCore, CA1PositionInClass, CA2PositionInClass, NoInYearGroup, CA1PositionOverall, CA2PositionOverall, Age, FormTeacherName, DateGenerated, Deleted, StudentName, CA1OverallAverAge_SCore, CA2OverallAverAge_SCore, StudentLocked } = req.body;
    db.query('INSERT INTO CaReults (Id, UpdatedAt, SchoolId, SessionId, TermId, StudentId, StudentIdNo, ClassId, ClassAverAge_Age, NoInClass, CA1TotalSCore, CA2TotalSCore, CA1AverAge_SCore, CA2AverAge_SCore, CA1ClassAverAge_SCore, CA2ClassAverAge_SCore, CA1PositionInClass, CA2PositionInClass, NoInYearGroup, CA1PositionOverall, CA2PositionOverall, Age, FormTeacherName, DateGenerated, Deleted, StudentName, CA1OverallAverAge_SCore, CA2OverallAverAge_SCore, StudentLocked) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, , ?)', [Id, UpdatedAt, SchoolId, SessionId, TermId, StudentId, StudentIdNo, ClassId, ClassAverAge_Age, NoInClass, CA1TotalSCore, CA2TotalSCore, CA1AverAge_SCore, CA2AverAge_SCore, CA1ClassAverAge_SCore, CA2ClassAverAge_SCore, CA1PositionInClass, CA2PositionInClass, NoInYearGroup, CA1PositionOverall, CA2PositionOverall, Age, FormTeacherName, DateGenerated, Deleted, StudentName, CA1OverallAverAge_SCore, CA2OverallAverAge_SCore, StudentLocked], (err, results) => {
        if (err) {
            return res.status(500).send(err);
        }
        res.json({ id: results.insertId, UpdatedAt, SchoolId, SessionId, TermId, StudentId, StudentIdNo, ClassId, ClassAverAge_Age, NoInClass, CA1TotalSCore, CA2TotalSCore, CA1AverAge_SCore, CA2AverAge_SCore, CA1ClassAverAge_SCore, CA2ClassAverAge_SCore, CA1PositionInClass, CA2PositionInClass, NoInYearGroup, CA1PositionOverall, CA2PositionOverall, Age, FormTeacherName, DateGenerated, Deleted, StudentName, CA1OverallAverAge_SCore, CA2OverallAverAge_SCore, StudentLocked });
    });
};

exports.updateCaReult = (req, res) => {
    const { id } = req.params;
    const {UpdatedAt, SchoolId, SessionId, TermId, StudentId, StudentIdNo, ClassId, ClassAverAge_Age, NoInClass, CA1TotalSCore, CA2TotalSCore, CA1AverAge_SCore, CA2AverAge_SCore, CA1ClassAverAge_SCore, CA2ClassAverAge_SCore, CA1PositionInClass, CA2PositionInClass, NoInYearGroup, CA1PositionOverall, CA2PositionOverall, Age, FormTeacherName, DateGenerated, Deleted, StudentName, CA1OverallAverAge_SCore, CA2OverallAverAge_SCore, StudentLocked } = req.body;
    db.query('UPDATE CaReults SET UpdatedAt = ?, SchoolId = ? , SessionId = ?, TermId = ?, StudentId = ?, StudentIdNo = ?,  ClassId = ?, ClassAverAge_Age = ?, NoInClass = ?, CA1TotalSCore = ?,  CA2TotalSCore = ?,  CA1AverAge_SCore = ?, CA1AverAge_SCore = ?, CA1ClassAverAge_SCore = ?, CA2ClassAverAge_SCore = ?,  CA1PositionInClass = ?, NoInYearGroup = ?, CA1PositionOverall = ?, CA2PositionOverall = ?, Age = ?, FormTeacherName= ?,  DateGenerated= ?,Deleted= ?,StudentName= ?,= ?,CA2OverallAverAge_SCore= ?,StudentLocked = ? WHERE id = ?', [UpdatedAt, SchoolId, SessionId, TermId, StudentId, StudentIdNo, ClassId, ClassAverAge_Age, NoInClass, CA1TotalSCore, CA2TotalSCore, CA1AverAge_SCore, CA2AverAge_SCore, CA1ClassAverAge_SCore, CA2ClassAverAge_SCore, CA1PositionInClass, CA2PositionInClass, NoInYearGroup, CA1PositionOverall, CA2PositionOverall, Age, FormTeacherName, DateGenerated, Deleted, StudentName, CA1OverallAverAge_SCore, CA2OverallAverAge_SCore, StudentLocked, id], (err) => {
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
 */