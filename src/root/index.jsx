import { Navigate, Route, Routes } from "react-router-dom";
import Sidebar from "../components/Sidebar";
import Checkin from "../components/Guruhlar/Guruhlar/Checkin";
import UmumiySidebar from "../components/Sozlamalar/Umumiy/Sidebar";
import sidebar from "../utils/sidebar";
import { umumiy } from "../utils/sozlamalar";

const Root = () => {
  return (
    <Routes>
      {/* MAIN */}
      <Route element={<Sidebar />}>
        {/* SOZLAMALAR */}
        <Route element={<UmumiySidebar />}>
          {umumiy.map((item) => {
            const { element: Element, path, id } = item;
            return (
              <Route
                key={id}
                element={<Element />}
                path={`sozlamalar/umumiy/${path}`}
              />
            );
          })}
        </Route>

        {/* SIDEBAR*/}
        <Route path={"/guruhlar/guruhlar/checkin"} element={<Checkin />} />
        {sidebar.map((parent) => {
          const ParentElement = parent.element;
          if (parent?.children) {
            return parent.children.map((child) => {
              const ChildElement = child.element;
              return (
                <Route
                  key={child.id}
                  path={child.path}
                  element={<ChildElement />}
                />
              );
            });
          } else
            return (
              !parent?.hidden && (
                <Route
                  key={parent.id}
                  path={parent.path}
                  element={<ParentElement />}
                />
              )
            );
        })}
      </Route>

      {sidebar.map((parent) => {
        const ParentElement = parent.element;
        return (
          parent?.hidden && (
            <Route
              key={parent.id}
              path={parent.path}
              element={<ParentElement />}
            />
          )
        );
      })}
      <Route path="/" element={<Navigate to={"/analitika"} />} />
      {/* <Route
        path="/sozlamalar/umumiy/"
        element={
          <Navigate
            to={"/sozlamalar/umumiy/check"}
            state={{
              parent: ["Sozlamalar", "Umumiy"],
              child: ["Check"],
            }}
          />
        }
      /> */}
      <Route path="*" element={<h1>NOT FOUND 404</h1>} />
    </Routes>
  );
};

export default Root;
