import ArrivalHeader from "./ArrivalHeader";
import ArrivalSlider from "./arrival-slider/ArrivalSlider";

function NewArrival() {
  return (
    <>
      <section className="new-arrivals-section">
        <ArrivalHeader />
        <ArrivalSlider />
      </section>
    </>
  );
}

export default NewArrival;
