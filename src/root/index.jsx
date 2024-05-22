import { Navigate, Route, Routes } from "react-router-dom";
import sidebar from "../utils/sidebar";
import Sidebar from "../components/Sidebar";

const Root = () => {
  return (
    <Routes>
      <Route element={<Sidebar />}>
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
              <Route
                key={parent.id}
                path={parent.path}
                element={<ParentElement />}
              />
            );
        })}
      </Route>
      <Route path="/" element={<Navigate to={"/analitika"} />} />
      <Route path="*" element={<h1>NOT FOUND 404</h1>} />
    </Routes>
  );
};

export default Root;
