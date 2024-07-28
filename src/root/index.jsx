import { Navigate, Route, Routes } from "react-router-dom";
import sidebar from "../utils/sidebar";
import Sidebar from "../components/Sidebar";
import Checkin from "../components/Guruhlar/Guruhlar/Checkin";

const Root = () => {
  return (
    <Routes>
      <Route element={<Sidebar />}>
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
      <Route path="*" element={<h1>NOT FOUND 404</h1>} />
    </Routes>
  );
};

export default Root;
