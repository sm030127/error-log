export const rowData = [
  {
    name: "OG Question1",
    forum: "Original Guide",
    date: "23-09-2023",
    difficulty: "M",
    time: "2:00",
    result: "Correct",
    mistakeAndNotes:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer tempus massa non ligula pellentesque vulputate a vel metus. Nulla lobortis.",
  },
  {
    name: "OG Question1",
    forum: "Original Guide",
    date: "23-09-2023",
    difficulty: "M",
    time: "2:00",
    result: "Correct",
    mistakeAndNotes:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer tempus massa non ligula pellentesque vulputate a vel metus. Nulla lobortis.",
  },
  {
    name: "OG Question1",
    forum: "Original Guide",
    date: "23-09-2023",
    difficulty: "M",
    time: "2:00",
    result: "Correct",
    mistakeAndNotes:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer tempus massa non ligula pellentesque vulputate a vel metus. Nulla lobortis.",
  },
  {
    name: "OG Question1",
    forum: "Original Guide",
    date: "23-09-2023",
    difficulty: "M",
    time: "2:00",
    result: "Correct",
    mistakeAndNotes:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer tempus massa non ligula pellentesque vulputate a vel metus. Nulla lobortis.",
  },
  {
    name: "OG Question1",
    forum: "Original Guide",
    date: "23-09-2023",
    difficulty: "M",
    time: "2:00",
    result: "Correct",
    mistakeAndNotes:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer tempus massa non ligula pellentesque vulputate a vel metus. Nulla lobortis.",
  },
  {
    name: "OG Question1",
    forum: "Original Guide",
    date: "23-09-2023",
    difficulty: "M",
    time: "2:00",
    result: "Correct",
    mistakeAndNotes:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer tempus massa non ligula pellentesque vulputate a vel metus. Nulla lobortis.",
  },
  {
    name: "OG Question1",
    forum: "Original Guide",
    date: "23-09-2023",
    difficulty: "M",
    time: "2:00",
    result: "Correct",
    mistakeAndNotes:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer tempus massa non ligula pellentesque vulputate a vel metus. Nulla lobortis.",
  },
  {
    name: "OG Question1",
    forum: "Original Guide",
    date: "23-09-2023",
    difficulty: "M",
    time: "2:00",
    result: "Correct",
    mistakeAndNotes:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer tempus massa non ligula pellentesque vulputate a vel metus. Nulla lobortis.",
  },
  {
    name: "OG Question1",
    forum: "Original Guide",
    date: "23-09-2023",
    difficulty: "M",
    time: "2:00",
    result: "Correct",
    mistakeAndNotes:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer tempus massa non ligula pellentesque vulputate a vel metus. Nulla lobortis.",
  },
  {
    name: "OG Question1",
    forum: "Original Guide",
    date: "23-09-2023",
    difficulty: "M",
    time: "2:00",
    result: "Correct",
    mistakeAndNotes:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer tempus massa non ligula pellentesque vulputate a vel metus. Nulla lobortis.",
  },
  {
    name: "OG Question1",
    forum: "Original Guide",
    date: "23-09-2023",
    difficulty: "M",
    time: "2:00",
    result: "Correct",
    mistakeAndNotes:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer tempus massa non ligula pellentesque vulputate a vel metus. Nulla lobortis.",
  },
];
export const columnDefs = [
  {
    headerName: "Name",
    field: "name",
    editable: true,
    suppressClickEdit: true,
    // cellEditor: "agSelectCellEditor",
    // cellEditorParams: {
    //   values: ["OG Question1", "OG Question2", "OG Question3"], // Dropdown values
    // },
  },
  { headerName: "Forum", field: "forum" },
  {
    headerName: "Date",
    field: "date",
    editable: true,
    suppressClickEdit: true,
    // valueParser: (params) => {
    //   const parsedDate = new Date(params.newValue);
    //   // Check if the parsed date is valid
    //   return isNaN(parsedDate) ? null : parsedDate.toISOString().split("T")[0]; // Convert to YYYY-MM-DD format
    // },
    // valueSetter: (params) => {
    //   const date = new Date(params.newValue);
    //   if (isNaN(date)) {
    //     alert("Invalid date format. Please enter a valid date.");
    //     return false; // Prevent the value from being set
    //   }
    //   return true; // Allow the value to be set
    // },
  },
  {
    headerName: "Difficulty",
    field: "difficulty",
    editable: true,
    suppressClickEdit: true,
    cellEditor: "agSelectCellEditor",
    cellEditorParams: {
      values: ["Easy", "Medium", "Hard"], // Dropdown values
    },
  },
  {
    headerName: "Time",
    field: "time",
    editable: true,
    suppressClickEdit: true,
  },
  {
    headerName: "Result",
    field: "result",
    editable: true,
    suppressClickEdit: true,
    cellEditor: "agSelectCellEditor",
    cellEditorParams: {
      values: ["Correct", "Incorrect"], // Dropdown values
    },
  },
  { headerName: "Mistake and Notes", field: "mistakeAndNotes", editable: true },
];
