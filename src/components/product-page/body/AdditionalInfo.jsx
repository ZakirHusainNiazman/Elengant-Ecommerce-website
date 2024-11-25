import cssClasses from "../ProductPage.module.css";

function AdditionalInfo({ details }) {
  const { width, height, length, weight } = details.packaging;
  return (
    <div className={cssClasses["additional-info-con"]}>
      <h1 className={cssClasses["additional-info-title"]}>Details</h1>
      <div className={cssClasses["additional-info-detaile-con"]}>
        <h5 className={cssClasses["info-title"]}>Details</h5>
        <p className={cssClasses["info-body"]}>{ details.details }</p>
      </div>

      <div className={cssClasses["additional-info-detaile-con"]}>
        <h5 className={cssClasses["info-title"]}>Packaging</h5>
        <p className={cssClasses["info-body"]}>
          <span>Width: {width} &quot; Height: {height} &quot; Length: {length } &quot;</span>
          <span> Weight: 7 lb 8 oz </span>
          <span>Package(s): </span>
        </p>
      </div>
    </div>
  );
}

export default AdditionalInfo;
