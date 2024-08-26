

import styles from './index.module.css';

const Hero = () => {
  return (
    <div>
      <div >             
        <video className={styles.video} src='https://spiceroad.s3.eu-north-1.amazonaws.com/vid.mp4'
          autoPlay
          muted
          loop
          playsInline
          controls={false}>
                   
        </video>

      </div>
    </div>
  )
}

export default Hero
