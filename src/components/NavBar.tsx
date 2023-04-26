import Script from 'next/script'
import Image from 'next/image'
import styles from '@/styles/NavBar.module.css'

export default function NavBar() {
	return (
		<div className={styles.darkmode}>
			<Image
				src="/icons/backbutton.svg"
				className={styles.darkmode}
				alt="back button"
				width="50"
				height="50"
				id="backbutton-svg"
			></Image>
			<Script src="/js/backbutton.js"></Script>
		</div>
	);
}