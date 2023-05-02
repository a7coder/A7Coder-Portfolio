import styles from "../styles/projects.module.css";
import Card from "../components/card";

export async function getStaticProps() {
const options={
  method: 'GET',
  headers: {
      'Content-type': 'application/json',
      'Authorization': `Bearer ${process.env.token}`, 
  },
}
// console.log('Fetching start')
    const res = await fetch('https://a7coder.cyclic.app/projects',options)
  const projects = await res.json()
  // console.log('pro',projects)
    
  
  
  return {
    props: {
      projects,
    },
    
     revalidate: 10, 
  }
}



export default function Projects(props) {
  const projects=props.projects
  
  return (
    <>
      <div className={styles.projects}>
        <h1>My Projects </h1>
        <div className={styles.gallery}>
         { projects.map((project)=>{
            return <Card key={project._id} title={project.title} img_url={project.img_url} desc_text={project.desc_text} repo_url={project.repo_url}></Card>
          })}
          
         
         
        </div>
      </div>
    </>
  );
}


