const express = require("express");
const router = express.Router();

// Get all tasks
router.get("/", (req, res) => {
  res.json([
    {
      id: 1,
      title: "Complete MERN Project",
      status: "Pending",
    },
  ]);
});

// Add a task
router.post("/", (req, res) => {
  res.json({
    success: true,
    message: "Task Added Successfully",
  });
});

// Update a task
router.put("/:id", (req, res) => {
  res.json({
    success: true,
    message: "Task Updated Successfully",
  });
});

// Delete a task
router.delete("/:id", (req, res) => {
  res.json({
    success: true,
    message: "Task Deleted Successfully",
  });
});

module.exports = router;
