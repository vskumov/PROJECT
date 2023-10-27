import Address from "./Address";
import NumberAndLinks from "./NumberAndLinks";

import "./_footer.scss";

function Contacts() {
  return (
    <section className="contacts wmb">
      <NumberAndLinks />
      <Address />
    </section>
  );
}

export default Contacts;
