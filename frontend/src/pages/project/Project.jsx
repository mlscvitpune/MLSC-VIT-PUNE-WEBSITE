import { useState } from "react";
import "./project.scss";
import { motion, useAnimation } from "framer-motion";
import BasicUsage from "../basicusage/BasicUsage";

const Project = ({project})=>{
    const AnimatedComponent = () => {
        const [isAnimationPlaying, setIsAnimationPlaying] = useState(false);

        const divAnimationControls = useAnimation();
        const divAnimationVariants = {
            anim: {
               scale: 1.3 ,
            },
        }
        return(
            <motion.img src="https://www.bing.com/th?id=OIP.elsFR0nGNovY5ZY1R1q6HQHaHa&w=206&h=206&c=8&rs=1&qlt=90&o=6&dpr=1.3&pid=3.1&rm=2" alt=""
                animate = {divAnimationControls}
                onHoverStart={() => {
                    if(!isAnimationPlaying){
                        setIsAnimationPlaying(true)
                        divAnimationVariants.start(divAnimationVariants.anim)
                    }
                }}
                onAnimationComplete={() => {
                    setIsAnimationPlaying(false)
                }} />
        )
    }
    if(project.index % 2 == 0){
    return(
<div className="container" >
        <div className="project" >
           
                

                <div className="info" >
                   
                <motion.img src="https://www.bing.com/th?id=OIP.elsFR0nGNovY5ZY1R1q6HQHaHa&w=206&h=206&c=8&rs=1&qlt=90&o=6&dpr=1.3&pid=3.1&rm=2" alt="" 
                whileHover={{
                    
                    scale: 1.3,
                }} />
                <div className="projectinfo" style={{marginRight: "30px"}}>
                
                    <p>{project.projectDesc}</p>
                    <BasicUsage />
                </div>
                
                </div>
                    
            </div>
        </div>
    )
}
else{
    return(
        <div className="container" >
        <div className="project" >
           
                

                <div className="info" >
                   
                
                <div className="projectinfo" >
                
                    <p style={{marginLeft: "30px"}}>{project.projectDesc}</p>
                    <BasicUsage/>

                </div>
                
                <motion.img src="https://www.bing.com/th?id=OIP.elsFR0nGNovY5ZY1R1q6HQHaHa&w=206&h=206&c=8&rs=1&qlt=90&o=6&dpr=1.3&pid=3.1&rm=2" alt="" 
                whileHover={{
                    
                    scale: 1.3,
                }}/>
                </div>
                    
            </div>
        </div>
    )
}
}

export default Project