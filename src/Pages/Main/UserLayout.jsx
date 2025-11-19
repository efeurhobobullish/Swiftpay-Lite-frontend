import { Outlet } from "react-router-dom";

import Panel from "../Components/User/Panel";

const UserLayout = () => {
  return (
    <>
      <div className="main-container">
        <main>
          <section>
            <Outlet />
          </section>
        </main>
        <Panel />
      </div>
    </>
  );
};

export default UserLayout;
