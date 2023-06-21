import styles from './page.module.css'
import Image from 'next/image'
import { notFound } from 'next/navigation'

async function getData(id) {
  const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`, {
    cache: 'no-store',
  })

  if (!res.ok) {
    return notFound()
  }

  return res.json()
}

const BlogPost = async ({ params }) => {
  const data = await getData(params.id)
  return (
    <div className={styles.container}>
      <div className={styles.top}>
        <div className={styles.info}>
          <h1 className={styles.title}>{data.title}</h1>
          <p className={styles.desc}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias
            quasi assumenda labore ut quaerat ratione deserunt officia, esse est
            tenetur dolore sequi delectus ad quae aperiam quam sapiente, quidem
            unde?
          </p>
          <div className={styles.author}>
            <Image
              src='https://images.pexels.com/photos/4926674/pexels-photo-4926674.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
              alt=''
              width={40}
              height={40}
              className={styles.avatar}
            />
            <span className={styles.username}>Anna Tarazevich</span>
          </div>
        </div>
        <div className={styles.imageContainer}>
          <Image
            src='https://images.pexels.com/photos/3194523/pexels-photo-3194523.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
            alt=''
            fill={true}
            className={styles.image}
          />
        </div>
      </div>
      <div className={styles.content}>
        <p className={styles.text}>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nam
          obcaecati quod, praesentium aliquam accusamus laborum excepturi
          placeat voluptatem. Dolores perferendis incidunt minus voluptas ad
          nam. Alias perspiciatis ut temporibus ad sequi, veritatis voluptates
          laboriosam aliquid fugit magni tempora id libero eligendi ab totam.
          <br />
          <br />
          Ipsum magni necessitatibus aliquam natus, sequi dolores fugiat? Rem
          voluptates pariatur exercitationem itaque et amet veritatis, quaerat
          unde ipsum officiis iusto quidem dolorem hic ratione soluta modi esse
          voluptatem quasi. Provident, porro enim labore vel reiciendis et vero?
          Mollitia hic repellat ex dolores modi amet deserunt quo excepturi
          inventore a? Fuga ipsam odit minima fugit. Ea minima placeat animi
          consequatur eveniet velit necessitatibus maiores facere et? <br />
          <br />
          Commodi quod alias soluta necessitatibus, minima dolor voluptates
          accusantium iure pariatur laudantium eius asperiores tenetur unde
          repudiandae nobis iusto nemo reprehenderit magni! Repellat
          exercitationem deleniti corrupti. Perspiciatis, tempora ab doloribus
          magnam reprehenderit fugiat debitis sint alias. <br />
          <br /> Autem harum voluptatum culpa consectetur aliquam explicabo
          nihil quod. Voluptatibus perferendis, quam atque quis molestiae
          officiis enim nam fugit? Voluptas dignissimos sed expedita saepe
          reiciendis. Amet aliquid consectetur explicabo id quos officiis
          repellendus voluptas rem officia, natus quis vero praesentium aut
          fugit nam repellat ducimus, maxime iure! Provident amet, fuga
          doloribus exercitationem optio itaque autem.
        </p>
      </div>
    </div>
  )
}
export default BlogPost
