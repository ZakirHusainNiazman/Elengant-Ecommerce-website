import cssClasses from "../ProductPage.module.css";

function AdditionalInfo() {
  return (
    <div className={cssClasses["additional-info-con"]}>
      <h1 className={cssClasses["additional-info-title"]}>Most Questions</h1>
      <div className={cssClasses["additional-info-detaile-con"]}>
        <h5 className={cssClasses["info-title"]}>Details</h5>
        <p className={cssClasses["info-body"]}>
          You can use the removable tray for serving. The design makes it easy
          to put the tray back after use since you place it directly on the
          table frame without having to fit it into any holes. You can use the
          removable tray for serving. The design makes it easy to put the tray
          back after use since you place it directly on the table frame without
          having to fit it into any holes. You can use the removable tray for
          serving. The design makes it easy to put the tray back after use since
          you place it directly on the table frame without having to fit it into
          any holes.
        </p>
      </div>

      <div className={cssClasses["additional-info-detaile-con"]}>
        <h5 className={cssClasses["info-title"]}>Packaging</h5>
        <p className={cssClasses["info-body"]}>
          <span>Width: 20 &quot; Height: 1 ½ &quot; Length: 21 ½ &quot;</span>
          <span> Weight: 7 lb 8 oz </span>
          <span>Package(s): 1</span>
        </p>
      </div>
    </div>
  );
}

export default AdditionalInfo;
