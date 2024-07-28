import React from "react";
import { Link, Outlet } from "react-router-dom";

export default function Projects() {

  

  return (
    <>
      <div className="d-flex">
        <div className="col-md-1">
          <ul>
            <li>
              <Link to={"web"}>Web</Link>
            </li>
            <li>
              <Link to={"mobile"}>mobile</Link>
            </li>
          </ul>
        </div>
        <div className="col-md-9">
          <Outlet/>
        </div>
        <div className="colo-md-2">
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores ea ex consequuntur nesciunt id et debitis, omnis iste sint labore porro dignissimos facere voluptas, doloribus eveniet quam impedit, excepturi architecto.</p>
        </div>
      </div>
    </>
  );
}


// rules to use hooks

