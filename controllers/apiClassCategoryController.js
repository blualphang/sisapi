const db = require('../config/db');

async function getClassCategorys(req, res) {
    try {
      const result = await sql.query`SELECT * FROM ClassCategorys`;
      res.json(result.recordset);
    } catch (err) {
      res.status(500).send('Error retrieving data from database');
    }
  }
  async function getCaReultsByClassCategoryCode(req, res) {
    try {
      const { classCategoryCode } = req.params;
      const result = await sql.query`SELECT * FROM ClassCategorys WHERE ClassCategoryCode = ${classCategoryCode}`;
      if (result.recordset.length === 0) {
        return res.status(404).send('ClassCategory not found');
      }
      res.json(result.recordset[0]);
    } catch (err) {
      res.status(500).send('Error retrieving data from database');
    }
  }
  
  
  
  async function createClassCategory(req, res) {
    try {
        const { Id, UpdatedAt, ClassCategoryName,Deleted, ClassCategoryCode  } = req.body;
      await sql.query`INSERT INTO ClassCategorys (Id, UpdatedAt, ClassCategoryName,Deleted, ClassCategoryCode ) VALUES (${Id}, ${UpdatedAt},${ClassCategoryName}, ${Deleted}, ${ClassCategoryCode})`
      res.status(201).send('ClassCategory created successfully');
    } catch (err) {
      res.status(500).send('Error creating ClassCategory');
    }
  }
  
  async function updateClassCategory(req, res) {
    try {
      const { Id} = req.params;
    
      const { UpdatedAt, ClassCategoryName,Deleted, ClassCategoryCode  } = req.body;

     const result = await sql.query`UPDATE ClassCategorys SET UpdatedAt =${UpdatedAt}, ClassCategoryName = ${ClassCategoryName}, Deleted = ${Deleted}, ClassCategoryCode =${ClassCategoryCode}   WHERE id = ${Id}`;
      if (result.rowsAffected[0] === 0) {
        return res.status(404).send('ClassCategory not found');
      }
      res.send('ClassCategory updated successfully');
    } catch (err) {
      res.status(500).send('Error updating ClassCategory');
    }
  }
  
  async function deleteClassCategory(req, res) {
    try {
      const { Id } = req.params;
      const result = await sql.query`DELETE FROM CaReults WHERE id = ${Id}`;
      if (result.rowsAffected[0] === 0) {
        return res.status(404).send('CaReults not found');
      }
      res.send('ClassCategory deleted successfully');
    } catch (err) {
      res.status(500).send('Error deleting ClassCategory');
    }
  }
  
  module.exports = {
    getClassCategorys,
    getCaReultsByClassCategoryCode,
      createClassCategory,
      updateClassCategory,
    deleteClassCategory
  };


