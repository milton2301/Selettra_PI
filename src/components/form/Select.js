import styles from './Select.module.css'


export default function Select({text, name, options, handleOnChange, value}){
    return(
        <div className={styles.form_control}>
            <select className={styles.select} name={name} id={name} onChange={handleOnChange} value={value || ''} >
                <option></option>
                  {options && options.map((option) =>(
                    <option value={option.id} key={option.id}>{option.name}</option>
                ))} 
            </select>
            <label className={styles.label}  htmlFor={name}>{text}</label>
        </div>
    )
}