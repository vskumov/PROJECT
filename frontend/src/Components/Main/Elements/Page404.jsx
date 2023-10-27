import succulent from "../../../img/succulent3.png";
import "./_page404.scss";

function Page404() {
  return (
    <main className="container no-page wmb">
      <div className="no-page-404">
        <span className="np-4">4</span>
        <img src={succulent} alt="flower" className="np-4" />
        <span className="np-4">4</span>
      </div>
      <div className="no-page-txt">
        <p className="np-txt">Oh no!</p>
        <p className="np-txt">Nothing dwells here except Echeveria...</p>
      </div>
    </main>
  );
}

export default Page404;
