import React from "react";
import { NavLink } from "react-router-dom";

const MenNavbar = () => {
  

  return (
    <div>
      <div>
        <div>
          <div>Heading</div>
          <div>
            <div>
              <NavLink>
                <span>Product 1</span>
              </NavLink>
            </div>
            <div>
              <NavLink>
                <span>Product 2</span>
              </NavLink>
            </div>
            <div>
              <NavLink>
                <span>Product 3</span>
              </NavLink>
            </div>
            <div>
              <NavLink>
                <span>Product 4</span>
              </NavLink>
            </div>
            <div>
              <NavLink>
                <span>Product 5</span>
              </NavLink>
            </div>
            <div>
              <NavLink>
                <span>Product 6</span>
              </NavLink>
            </div>
            <div>
              <NavLink>
                <span>Product 7</span>
              </NavLink>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MenNavbar;
