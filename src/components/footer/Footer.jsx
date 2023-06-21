import styles from './footer.module.css'
import Image from 'next/image'

const Footer = () => {
  return (
    <div className={styles.container}>
      <div>©2023 Prabir. All rights reserved.</div>
      <div className={styles.social}>
        <Image
          src='/1.png'
          alt=' prabir facebook link'
          height={15}
          width={15}
          className={styles.icon}
        />
        <Image
          src='/2.png'
          alt='prabir instagram link'
          height={15}
          width={15}
          className={styles.icon}
        />
        <Image
          src='/3.png'
          alt='prabir twitter link'
          height={15}
          width={15}
          className={styles.icon}
        />
        <Image
          src='/4.png'
          alt='prabir youtube link'
          height={15}
          width={15}
          className={styles.icon}
        />
      </div>
    </div>
  )
}
export default Footer
