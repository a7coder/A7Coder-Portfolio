import styles from '../styles/error.module.css'
import Button from '../components/Button'
export default function Error_Page(){
    return (<div className={styles.error}>
        <h1>💥 !! YOU HAVE LOST !! 💥</h1>
        <Button url='/'>Go to Home</Button>
    </div>) 
}