import Project from "../models/project.model.js";

const getProjects = async (req, res) => {
  try {
    const projects = await Project.find();
    res.status(200).json({message: "Fetched all projects", data: projects});
  } catch (error) {
    res.status(404).json({ message: "Failed to fetch projects", data: error.message });
  }
};

const getProject = async (req, res) => {
  const { id } = req.params;
  try {
    const project = await Project.findOne({_id: id});
    if (!project)
        return res.status(400).json({ message: "Failed to fetch project", data: "Bad Request" });
    res.status(200).json({message: "Fetched project successfully", data: project});
  } catch(error) {
    res.status(404).json({ message: "Failed to fetch projects", data: error.message });
  }
};

const createProject = async (req, res) => {
  const project = req.body;
  if (!project)
    res.status(400).json({ message: "Failed to fetch project", data: error.message });
  try {
    const { name, description, thumbnail, images, liveLink, githubRepo } = project
    const newProject = new Project({
      name: name,
      description: description,
      thumbnail: thumbnail,
      images: images,
      liveLink: liveLink,
      githubRepo: githubRepo ? githubRepo : "",
    });
    await newProject.save();
    res.status(200).json({ message: "200", data: newProject });
  } catch (error) {
    res.status(404).json({ message: "Failed to fetch project", data: error.message });
  }
};

const updateProject = async (req, res) => {
  const project = req.body;
  if (!project)
    return res.status(400).json({ message: "Failed to update request" });
  try {
    const { name, description, thumbnail, images, liveLink, githubRepo } = project
    const updatedProject = await Project.findByIdAndUpdate(
      project._id,
      {
        name: name,
        description: description,
        thumbnail: thumbnail,
        images: images,
        liveLink: liveLink,
        githubRepo: githubRepo ? githubRepo : "",
      },
      { new: true }
    );
    if (!updatedProject)
        return res.status(400).json({ message: "Failed to update project" });
    res.status(200).json({ message: "Updated project successfully", updatedProject });
  } catch (error) {
    res.status(404).json({ message: "Failed to update project", data: error.message });
  }
};

const deleteProject = async (req, res) => {
  const project = req.body;
  if (!project)
    return res.status(400).json({ message: "Failed to delete project" });
  try {
    const deletedProject = await Project.findByIdAndDelete(project._id);
    res.status(200).json({ message: "Deleted project successfully", data: deletedProject });
  } catch (error) {
    res.status(404).json({ message: "Failed to delete project", data: error.message });
  }
};

export { getProjects, getProject, createProject, updateProject, deleteProject };
