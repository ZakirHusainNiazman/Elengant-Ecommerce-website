import cssClasses from './Checkbox.module.css';

function Checkbox({label}) {
  return (
      <div className={cssClasses['checkbox']}>
          <input type="checkbox" />
          <label htmlFor="">{ label }</label>
    </div>
  )
}

export default Checkbox