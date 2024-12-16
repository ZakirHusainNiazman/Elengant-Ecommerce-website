import cssClasses from './Textarea.module.css'

function Textarea({label,name,placeholder}) {
  return (
      <div className={cssClasses['textarea-wrapper']}>
          <label className={cssClasses['label']} htmlFor="">{label}</label>
          <textarea className={cssClasses['textarea']} name={name} id="" placeholder={placeholder}></textarea>
    </div>
  )
}

export default Textarea