import React from "react";
import HomeLogo from "./svg/HomeLogo";
import Breadcrumbs from "./Breadcrumbs";
import {
  Link,
  useLocation,
  useParams,
  useSearchParams,
} from "react-router-dom";

function Nav({ breadcrumbs }) {
  return (
    <div className="flex justify-between ">
      {/* left corner */}
      <div>
        <Breadcrumbs items={breadcrumbs} />
      </div>
    </div>
  );
}

export default Nav;
