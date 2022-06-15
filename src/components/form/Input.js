import styles from './Input.module.css'

export default function Input({type, text, name, placeholder, handleOnChange, value}){
    return(
        <div className={styles.form_control}>
            <input className={styles.input} type={type} name={name} id={name} placeholder={placeholder} onChange={handleOnChange} value={value || ''}/>
            <label className={styles.label} htmlFor={name}>{text}</label>
        </div>
    )
}