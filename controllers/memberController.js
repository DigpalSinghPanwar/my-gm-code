const Member = require("../models/memberModel");

exports.getAllMembers = async (req, res) => {
  try {
    const members = await Member.find();

    res.status(200).json({
      status: "Success",
      result: members.length,
      data: {
        members,
      },
    });
  } catch (error) {
    res.status(404).json({
      status: "failed",
      message: error,
    });
  }
};

exports.createMembership = async (req, res) => {
  try {
    console.log(req.body);
    const member = await Member.create(req.body);

    res.status(201).json({
      status: "Success",
      data: {
        member,
      },
    });
  } catch (error) {
    res.status(404).json({
      status: "failed",
      message: error,
    });
  }
};

exports.getMember = async (req, res) => {
  try {
    console.log(req.params, req.body);
    const member = await Member.findById(req.params.id);
    res.status(200).json({
      status: "Success",
      data: {
        member,
      },
    });
  } catch (error) {
    res.status(404).json({
      status: "failed",
      message: error,
    });
  }
};

exports.updateMembership = async (req, res) => {
  try {
    console.log(req.params);
    const member = await Member.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true,
    });
    res.status(200).json({
      status: "Success",
      data: {
        member,
      },
    });
  } catch (error) {
    res.status(404).json({
      status: "failed",
      message: error,
    });
  }
};
exports.deleteMembership = async (req, res) => {
  try {
    console.log(req.params);
    const member = await Member.findByIdAndDelete(req.params.id);
    res.status(204).json({
      status: "Success",
    });
  } catch (error) {
    res.status(404).json({
      status: "failed",
      message: error,
    });
  }
};
