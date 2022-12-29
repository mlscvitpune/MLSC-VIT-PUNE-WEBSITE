import Project from "../models/project.model.js";

const getProjects = async (req, res) => {
  try {
    const projects = await Project.find();
    res.status(200).json(projects);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

const createProject = async (req, res) => {
  const project = req.body;
  try {
    const newProject = new Project({
        name: project.name,
        description: project.description,
        thumbnail: project.thumbnail,
        images: project.images,
        liveLink: project.liveLink,
        githubRepo: project.githubRepo ? project.githubRepo : "",
    });
    await newProject.save();
    res.status(200).json(newProject);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

const updateProject = async (req, res) => {
    const project = req.body;
    try {
        const updatedProject = await Project.findByIdAndUpdate(project._id, {
            name: project.name,
            description: project.description,
            thumbnail: project.thumbnail,
            images: project.images,
            liveLink: project.liveLink,
            githubRepo: project.githubRepo ? project.githubRepo : "",
        }, { new: true });
        res.status(200).json(updatedProject);
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
};

const deleteProject = async (req, res) => {
    const project = req.body;
    try {
        const deletedProject = await Project.findByIdAndDelete(project._id);
        res.status(200).json(deletedProject);
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
};

export { getProjects, createProject, updateProject, deleteProject };


