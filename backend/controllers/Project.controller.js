import { EPProject } from "../model/Episode.model.js";
import { Project } from "../model/Project.model.js";

// Create Project
export const createProject = async (req, res) => {
  try {
    const userId = req.params.userId;
    const { projectName } = req.body;

    if (!projectName) {
      return res
        .status(404)
        .json({ message: "Project name is required", status: false });
    }

    const data = await Project.create({
      projectName: projectName,
      user: userId,
    });

    if (data) {
      return res.status(201).json({ status: true, data: data });
    } else {
      return res.status(400).json({ status: false, message: "error" });
    }
  } catch (error) {
    res
      .status(500)
      .json({ status: false, error: error, message: error.message });
  }
};

// Get All Projects

export const getProjects = async (req, res) => {
  try {
    let userId = req.params.userId;
    const projects = await Project.find({ user: userId }).populate("user");

    return res.status(200).json({ status: true, data: projects });
  } catch (error) {
    return res.status(500).json({ message: error.message, status: false });
  }
};

// Post Project Epesode

export const postProjectEpisode = async (req, res) => {
  try {
    const projectId = req.params.projectId;

    if (!projectId) {
      return res.status(404).json({ status: false, message: "id is required" });
    }

    const { title, description } = req.body;

    if (!title && !description) {
      return res
        .status(404)
        .json({ status: false, message: "All Fields Required" });
    }

    const postEp = await EPProject.create({
      title,
      description,
      project: projectId,
    });

    return res
      .status(201)
      .json({ status: true, message: "Epesode Created", data: postEp });
  } catch (error) {
    return res.status(500).json({ status: false, message: error.message });
  }
};

// Get Project Epesode

export const getProjectEpisodes = async (req, res) => {
  try {
    const projectId = req.params.projectId;
    const episodes = await EPProject.find({ project: projectId }).populate(
      "project"
    );

    return res
      .status(200)
      .json({ status: "All Episodes Found Successfully", data: episodes });
  } catch (error) {
    return res.status(500).json({ message: error.message, status: false });
  }
};

// Delete Epesode
export const deleteEp = async (req, res) => {
  try {
    let EPprojectId = req.params.EPprojectId;

    const data = await EPProject.findByIdAndDelete(EPprojectId);
    return res.status(200).json({
      status: true,
      data: data,
      message: "Project deleted successfully",
    });
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};

// Update Epesode

export const updateEd = async (req, res) => {
  try {
    let EPprojectId = req.params.EPprojectId;
    let data = req.body;

    const updateEdProject = await EPProject.findByIdAndUpdate(
      EPprojectId,
      data,
      { new: true }
    );

    return res.status(201).json({ status: true, data: updateEdProject });
  } catch (error) {
    return res.status(500).json({ status: false, message: error.message });
  }
};
