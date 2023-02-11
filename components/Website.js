import React from "react";
import Link from "next/link";

const Website = ({ list }) => {
  return (
    <div>
      {list.length > 1 ? (
        list.map((item) => {
          return (
            <div key={item.site} className="m-3">
              <p className="text-white m-0 font-weight-light">
                {item.name}
              </p>
              <Link href={item.site} target="_blank">
                Click here to visit the site.
              </Link>
            </div>
          );
        })
      ) : (
        <Link href={list[0]} target="_blank" >Click here to visit the site.</Link>
      )}
    </div>
  );
};

export default Website;
