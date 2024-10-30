import cssClasses from "../Header.module.css";

function HeaderContent() {
  return (
    <div className={cssClasses["header-content"]}>
      <h1 className={cssClasses["header-title"]}>
        Simply Unique/ Simply Better.
      </h1>
      <p className={cssClasses["header-body"]}>
        3legant is a gift & decorations store based in HCMC, Vietnam. Est since
        2019.{" "}
      </p>
    </div>
  );
}

export default HeaderContent;
