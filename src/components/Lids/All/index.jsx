import GenericTable from "../../Generic/Table";

const AllLids = () => {
  const headCells = [
    {
      id: "name",
      label: "O’quvchining ismi",
    },
    {
      id: "group",
      label: "Guruh / Fan",
    },
    {
      id: "date",
      label: "Dars kuni va vaqti",
    },
    {
      id: "addedDate",
      label: "Qo’shilgan sana",
    },
    {
      id: "moderator",
      label: "Moderator",
    },
  ];
  const rows = [
    {
      id: 1,
      name: "Jaloliddin",
      group: "Group One",
      date: "12.07.2024",
      addedDate: "10.01.2024",
      moderator: "Jalol",
    },
    {
      id: 2,
      name: "Anvar",
      group: "Group 2",
      date: "12.07.2024",
      addedDate: "10.01.2024",
      moderator: "Ali",
    },
    {
      id: 3,
      name: "Nodir",
      group: "Group 3",
      date: "12.07.2024",
      addedDate: "10.01.2024",
      moderator: "Asad",
    },
    {
      id: 4,
      name: "Feruz",
      group: "Group 4",
      date: "12.07.2024",
      addedDate: "10.01.2024",
      moderator: "Farrux",
    },
  ];
  return (
    <div>
      <GenericTable headCells={headCells} rows={rows} />
    </div>
  );
};

export default AllLids;
