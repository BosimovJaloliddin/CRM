import check from "../assets/icons/check.svg?react";
import filiallar from "../assets/icons/filiallar.svg?react";
import xabarnomalar from "../assets/icons/xabarnomalar.svg?react";
import status from "../assets/icons/status.svg?react";
import sorovnomalar from "../assets/icons/sorovnomalar.svg?react";

// COMPONENTS
import CheckView from "../view/Sozlamalar/Chack";
import FiliallarView from "../view/Sozlamalar/Filiallar";
import XabarnomalarView from "../view/Sozlamalar/Xabarnomalar";
import { Generics } from "../view/Generic";

export const umumiy = [
  { id: 1, icon: check, element: CheckView, path: "check", title: "Check" },
  {
    id: 2,
    icon: filiallar,
    element: FiliallarView,
    path: "filiallar",
    title: "Filiallar",
  },
  {
    id: 3,
    icon: xabarnomalar,
    element: XabarnomalarView,
    path: "xabarnomalar",
    title: "Xabarnomalar",
  },
  {
    id: 4,
    icon: sorovnomalar,
    element: Generics,
    path: "sorovlar",
    title: "So'rovnoma",
  },
  {
    id: 5,
    icon: status,
    element: Generics,
    path: "status",
    title: "Status",
  },
];
