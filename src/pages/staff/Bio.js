import styles from '@/styles/staff/Bio.module.css'
// import homeStyles from '@/styles/staff/Home.module.css'
import Image from 'next/image'

export default function Bio(props) {
  return (
    <>
      <Image src={`/staff/img/${props.img}.webp`} width="69" height="69" className={styles.img}></Image>
      <p><b>{props.name}</b></p>
      <p>{props.children}</p>
      <br />
    </>
  );
}