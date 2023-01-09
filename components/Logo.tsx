import styles from './Logo.module.scss'
import logo from '@/assets/images/logo.svg'
import Image from 'next/image'

export default function Logo() {
  return (
    <div className={styles.logo}>
      <Image
        src={logo}
        alt=""
      />
    </div>
  )
}
