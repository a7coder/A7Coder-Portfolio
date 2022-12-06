import styles from "../styles/projects.module.css";
import Card from "../components/card";
export default function Projects() {
  return (
    <>
      <div className={styles.projects}>
        <h1>My Projects </h1>
        <div className={styles.gallery}>
          
          <Card
            title="Dummy"
            img_url="https://thumbs.dreamstime.com/b/spring-flowers-blue-crocuses-drops-water-backgro-background-tracks-rain-113784722.jpg"
            desc_text="Some text hi hello how are your this is test or duimmy text ........................"
            
            repo_url='github.com/a7coder'
          ></Card>
          <Card
            title="Dummy"
            img_url="https://thumbs.dreamstime.com/b/beautiful-summer-spring-meadow-blue-flowers-forget-me-nots-two-flying-butterflies-wild-nature-landscape-beautiful-182636005.jpg"
            desc_text="Some text hi hello how are your this is test or duimmy text ........................"
            
            repo_url='github.com/a7coder'
          ></Card><Card
          title="Dummy"
          img_url="https://thumbs.dreamstime.com/b/beautiful-summer-spring-meadow-blue-flowers-forget-me-nots-two-flying-butterflies-wild-nature-landscape-beautiful-182636005.jpg"
          desc_text="Some text hi hello how are your this is test or duimmy text ........................"
          
          repo_url='github.com/a7coder'
        ></Card><Card
        title="Dummy"
        img_url="https://thumbs.dreamstime.com/b/beautiful-summer-spring-meadow-blue-flowers-forget-me-nots-two-flying-butterflies-wild-nature-landscape-beautiful-182636005.jpg"
        desc_text="Some text hi hello how are your this is test or duimmy text ........................"
        
        repo_url='github.com/a7coder'
      ></Card><Card
      title="Dummy"
      img_url="https://thumbs.dreamstime.com/b/beautiful-summer-spring-meadow-blue-flowers-forget-me-nots-two-flying-butterflies-wild-nature-landscape-beautiful-182636005.jpg"
      desc_text="Some text hi hello how are your this is test or duimmy text ........................"
      
      repo_url='github.com/a7coder'
    ></Card>
         
        </div>
      </div>
    </>
  );
}


