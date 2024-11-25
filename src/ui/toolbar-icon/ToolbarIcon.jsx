import cssClasses from "./ToolbarIcon.module.css";

function ToolbarIcon({iconsNo,isVerticle,isHorizontle,isGrid,isActive}) {
  return (
    <>
      <div
        className={`
            ${cssClasses["toolbar-icons-con1"]}  
            ${isActive && cssClasses["active"]}
            ${isVerticle && cssClasses["verticle"]} 
            ${isHorizontle && cssClasses["horizontle"]} 
            ${isGrid && cssClasses["grid"]} 
        `}
      >
        <div className={`${cssClasses["icon-1"]} ${cssClasses["icon"]}`}></div>
        <div className={`${cssClasses["icon-2"]} ${cssClasses["icon"]}`}></div>
        {iconsNo >= 4 && (
          <>
            <div
              className={`${cssClasses["icon-3"]} ${cssClasses["icon"]}`}
            ></div>
            <div
              className={`${cssClasses["icon-4"]} ${cssClasses["icon"]}`}
            ></div>
          </>
        )}
        {iconsNo >= 6 && (
          <>
            <div
              className={`${cssClasses["icon-5"]} ${cssClasses["icon"]}`}
            ></div>
            <div
              className={`${cssClasses["icon-6"]} ${cssClasses["icon"]}`}
            ></div>
            <div
              className={`${cssClasses["icon-7"]} ${cssClasses["icon"]}`}
            ></div>
            <div
              className={`${cssClasses["icon-8"]} ${cssClasses["icon"]}`}
            ></div>
            <div
              className={`${cssClasses["icon-9"]} ${cssClasses["icon"]}`}
            ></div>
          </>
        )}
      </div>
    </>
  );
}

export default ToolbarIcon