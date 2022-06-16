import loading from '../imagens/loading.svg'

import styles from './Loading.module.css'

export default function Loading(){
    return(
        <div className={styles.loading_container}>
            <img className={styles.loading} src={loading} alt="Loading"></img>
        </div>
    )
}