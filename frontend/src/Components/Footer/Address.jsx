import React from "react";

function Address() {
  return (
    <div className="contacts__local">
      <h2>Address</h2>
      <p className="address">
        <a href="https://www.google.com/search?q=telranDE">
          Linkstraße 2, 8 OG, 10785, Berlin, Deutschland
        </a>
      </p>

      <div>
        <p className="hours">Working hours:</p>
        <p className="hours-info">24 hours a day</p>
      </div>
    </div>
  );
}

export default Address;
