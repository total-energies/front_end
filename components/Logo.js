import Image from "next/image";
import styles from '../styles/Logo.module.css';
import logo from '../public/totalenergies.png';



function Logo () {

    return(
        <div className={styles.logoMain}>
            <Image className={styles.imgLogo}
            src={logo}
            alt="Logo image"
            width={100}
            height={100}
            />
        </div>
    );
}




export default Logo