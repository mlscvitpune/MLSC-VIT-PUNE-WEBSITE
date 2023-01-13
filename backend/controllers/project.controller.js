import Project from "../models/project.model.js";

const getProjects = async (req, res) => {
  try {
    const projects = await Project.find();
    if (projects)
      res.status(200).json({ message: "Fetched all projects", data: projects });
    else res.status(400).json({ message: "Failed to fetch projects" });
  } catch (error) {
    res
      .status(400)
      .json({ message: "Failed to fetch projects", error: error.message });
  }
};

const getProject = async (req, res) => {
  const { id } = req.params;
  try {
    const project = await Project.findOne({ _id: id });
    if (!project)
      return res.status(400).json({ message: "Failed to fetch project" });
    res
      .status(200)
      .json({ message: "Fetched project successfully", data: project });
  } catch (error) {
    res
      .status(400)
      .json({ message: "Failed to fetch projects", error: error.message });
  }
};

const createProject = async (req, res) => {
  const { name, description, thumbnail, images, liveLink, githubRepo } =
    req.body;
  try {
    const exist = await Project.findOne({ name });
    if (exist) res.status(400).json({ message: "Project Already Exists" });
    else {
      const newProject = new Project({
        name,
        description,
        thumbnail,
        images,
        liveLink,
        githubRepo,
      });
      const check = await newProject.save();
      if (check)
        res
          .status(200)
          .json({ message: "New Project Created", data: newProject });
      else res.status(400).json({ message: "Failed to Create project" });
    }
  } catch (error) {
    res
      .status(400)
      .json({ message: "Failed to fetch project", data: error.message });
  }
};

const updateProject = async (req, res) => {
  const { id, name, description, thumbnail, images, liveLink, githubRepo } =
    req.body;
  try {
    const updatedProject = await Project.findByIdAndUpdate(
      id,
      {
        name,
        description,
        thumbnail,
        images,
        liveLink,
        githubRepo,
      },
      { new: true }
    );
    if (!updatedProject)
      return res.status(400).json({ message: "Failed to update project" });
    res
      .status(200)
      .json({ message: "Updated project successfully", updatedProject });
  } catch (error) {
    res
      .status(400)
      .json({ message: "Failed to update project", data: error.message });
  }
};

const deleteProject = async (req, res) => {
  const { id } = req.body;
  try {
    const deletedProject = await Project.findByIdAndDelete(id);
    if (deletedProject)
      res.status(200).json({ message: "Deleted project successfully" });
    else res.status(400).json({ message: "Failed to delete project" });
  } catch (error) {
    res
      .status(400)
      .json({ message: "Failed to delete project", data: error.message });
  }
};

export { getProjects, getProject, createProject, updateProject, deleteProject };
