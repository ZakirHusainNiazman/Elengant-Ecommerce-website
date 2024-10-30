import cssClasses from "./ArrivalHeader.module.css";
function ArrivalHeader() {
  return (
    <div className={`${cssClasses['new-arrivals-header']} container`}>
          <h2 className={cssClasses['new-arrivals-title']}>New Arrivals</h2>
      </div>
      
  );
}

export default ArrivalHeader