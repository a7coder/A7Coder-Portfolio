import styles from "../styles/contact.module.css";


export async function getStaticProps(){
  const token=process.env.token
  // console.log('contact tooken ',token)
  return {
    props: {
      token,
    }
  }
}

export default function Contact(props) {


function createHtml(msg,color){

  const notify_area=document.getElementById('notification')
  // console.log(notify_area)
  // console.log('msg,color' ,msg,color)
  notify_area.classList.remove('close')
  notify_area.classList.add('notification')
  notify_area.classList.add(color)
  notify_area.innerHTML=`<h2>${msg}</h2>`
  notify_area.classList.add('anim')
  setTimeout(() => {

    
    notify_area.classList.add('close')
    notify_area.classList.remove('success')
    notify_area.classList.remove('danger')
  
    
  }, 10000);

}



  async function submitHandler(event) {
    let x = document.getElementById("loader");
    x.classList.remove('close')
      x.classList.add('loading')
    event.preventDefault();
    // console.log("Submitted", event);
    // console.log(process.env.token)
    const data = {
      name: event.target.name.value,
      email: event.target.email.value,
      msg: event.target.msg.value,
    }
    // console.log(data)
    const JSONdata = JSON.stringify(data)
  // console.log(JSONdata)
    const options = {
      // The method is POST because we are sending data.
      method: 'POST',
      // Tell the server we're sending JSON.
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
        'Authorization': `Bearer ${props.token}`
      },
      // Body of the request is the JSON data we created above.
      body: JSONdata,
    }

    const response = await fetch('https://a7coder.cyclic.app/contact', options)
    const result = await response.json()
    event.target.name.value=''
    event.target.email.value=''
    event.target.msg.value=''
     x.classList.add('close')
      x.classList.remove('loading')
    
    // console.log('result',result)
    if(!response.ok){

createHtml(result,'danger')
    }
    else{
      
      createHtml(result,'success')
     

    }
  
  }


  return (
    <>
     {/* <Notification msg='hi'/> */}
      <div className={styles.contact}>
        <h1>
          Thanks for taking the time to reach <br /> out. How can I help you
          today?
        </h1>
        
        <div className={styles.html_form}>
          <form action="#" method="post" onSubmit={submitHandler} className={styles.innerform}>
            <div className={styles.per_info}>
              <div className={styles.name}>
                {" "}
                <label htmlFor="name">Name</label>
                <input type="text" name="name" id="name" required min='3' />
              </div>
              <div className={styles.email}>
                <label htmlFor="email">Email</label>
                <input type="email" name="email" id="email" required min='5'/>
              </div>
            </div>
            <div className={styles.msg}>
              <label htmlFor="msg">Message</label>
              <textarea name="msg" id="msg" rows="5" required min='10'></textarea>
            </div>

            <input type="submit" value="Submit" className={styles.my_btn} />
          </form>
        </div>
      </div>
    </>
  );
}
