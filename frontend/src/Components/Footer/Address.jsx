import React from "react";

function Address() {
  return (
    <>
      <h2 className="a-h2">Address</h2>
      <p className="address">
        <a href="https://www.google.com/search?q=telranDE">
          Linkstraße 2, 8 OG, 10785, Berlin, Deutschland
        </a>
      </p>

      <div className="working-hours">
        <p className="hours">Working hours:</p>
        <p className="hours-info">24 hours a day</p>
      </div>
    </>
  );
}

export default Address;
