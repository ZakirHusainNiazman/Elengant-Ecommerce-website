import cssClasses from './OrderComplete.module.css';

function OrderedItem({image,quantity}) {
  return (
      <div className={cssClasses['ordered-item']}>
          <img className={cssClasses['item-image']} src={image} alt="" />
          <span className={cssClasses['item-quantity']}>{quantity}</span>
    </div>
  )
}

export default OrderedItem