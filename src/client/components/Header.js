import React from "react";
import { MenuLinks } from "../../routes";

function Header() {
  return (
    <div>
      {MenuLinks.map((m, ind) => {
        <a key={ind} href={m.url}>
          {m.menuText}
        </a>;
      })}
    </div>
  );
}

export default Header;
