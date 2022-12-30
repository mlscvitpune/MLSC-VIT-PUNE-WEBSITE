import Project from "../project/Project";
import "./projectss.scss";

const Projectss = () => {
    const projects = [
        {
              index: 0,
              projectTitle: 'MLSC Website',
              projectDesc:
                'Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeatut asperiores minima obcaecati. Molestias tenetur neque itaqueunde assumenda.',
            },
            {
              index: 1,
              projectTitle: 'AI Pathology',
              projectDesc: 'sdfsdfdsfsdfdsfdsfsdf',
            },
            {
              index: 2,
              projectTitle: 'sdfdsf',
              projectDesc: 'sdfsdfdsfsdfdsfdsfsdf',
            },
    ];
    return(
        <div className="projects">
            {projects.map(project=>(
                <Project project = {project} key={project.index}/>
            ))}
        </div>
    )
}
export default Projectss