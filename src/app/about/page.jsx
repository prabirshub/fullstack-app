import styles from './page.module.css'
import Image from 'next/image'
import Button from '@/components/Button/Button'

const About = () => {
  return (
    <div className={styles.container}>
      <div className={styles.imgContainer}>
        <Image
          src='https://images.pexels.com/photos/3194521/pexels-photo-3194521.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
          alt=''
          fill={true}
          className={styles.img}
        />
        <div className={styles.imgText}>
          <h1 className={styles.imgTitle}>Digital Storytellers</h1>
          <h2 className={styles.imgDesc}>
            Handcrafting award winning digital experiences
          </h2>
        </div>
      </div>
      <div className={styles.textContainer}>
        <div className={styles.item}>
          <h2 className={styles.title}>Who are We?</h2>
          <p className={styles.desc}>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit.
            Perspiciatis esse ab eaque voluptatem labore et, consequatur
            repellendus expedita a rem voluptatum dicta modi debitis quisquam ex
            eum numquam id?
            <br />
            <br />
            Accusantium quasi ipsa nostrum? Reprehenderit dolores, perspiciatis,
            numquam nihil cupiditate, maxime quos esse officiis fugiat ut
            explicabo voluptatum tenetur? Amet eos, eligendi aspernatur dolores
            necessitatibus provident soluta in incidunt. Delectus, sint
            molestiae culpa iste nesciunt doloremque! Ducimus, totam.
          </p>
        </div>
        <div className={styles.item}>
          <h2 className={styles.title}>What We Do?</h2>
          <p className={styles.desc}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim
            accusamus ab odit minima laudantium possimus, sunt recusandae, quia
            repellendus quam et aut deserunt architecto veritatis explicabo
            exercitationem veniam impedit cum?
            <br />
            <br />- Creative Illustration <br />
            <br />
            -Dynamic Websites <br />
            <br />
            -Fast and Handy Mobile Apps
          </p>
          <Button url='/contact' text='Contact' />
        </div>
      </div>
    </div>
  )
}
export default About
