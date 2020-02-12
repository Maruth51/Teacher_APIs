const express = require("express");
const teacher = require("../models/data_teachers");
const teacherRoute = express.Router();

teacherRoute.get("/:empId", (req, res) => {
  const id = req.params.empId;
  const requestedTeacher = teacher.find(ele => {
    return id == ele.empNo;
  });
  console.log(req.params);
  if (requestedTeacher) {
    res.status(200).json({ requestedTeacher });
  } else {
    res.status(400).send("bad request");
  }
});

module.exports = teacherRoute;
