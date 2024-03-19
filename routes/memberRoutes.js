const express = require("express");
const memberController = require("../controllers/memberController");
const router = express.Router();

router
  .route("/")
  .get(memberController.getAllMembers)
  .post(memberController.createMembership);

router
  .route("/:id")
  .get(memberController.getMember)
  .patch(memberController.updateMembership)
  .delete(memberController.deleteMembership);

module.exports = router;
