export const reportData1 = {
  header: [
    { id: "project_name", type: "string", caption: "Project name" },
    { id: "total_by_project", type: "float", caption: "Total by project" },
    {
      id: "project_type",
      type: "string",
      caption: "Project type",
      align: "center",
    },
    { id: "jan", type: "float", caption: "Jan" },
    { id: "feb", type: "float", caption: "Feb" },
  ],
  data: [
    ["Mimesis", 1024.3, "commercial", 2048.2, 4096.0],
    ["Mako", 2345.1, "internal", 3465.3, { d: 12.5, color: "selected" }],
    ["Edelweiss", 54.4, "commercial", 564.8, 4652.3],
    [" Awesome", 789.0, "internal", 876.1, { d: 12.5, color: "selected" }],
    ["Fantastic", 1000.0, "commercial", 2000.0, 3000.0],
    ["Cool", 123.4, "internal", 456.7, { d: 12.5, color: "selected" }],
    ["Amazing", 432.1, "commercial", 876.5, 765.4],
    ["Incredible", 123.0, "internal", 987.6, { d: 12.5, color: "selected" }],
    ["Spectacular", 456.1, "commercial", 765.4, 321.0],
    ["Marvelous", 987.6, "internal", 654.3, { d: 12.5, color: "selected" }],
    ["Fantastic", 345.2, "commercial", 543.2, 876.1],
    ["Unbelievable", 432.1, "internal", 321.0, { d: 12.5, color: "selected" }],
    ["Extraordinary", 876.1, "commercial", 876.5, 987.6],
    ["Astonishing", 987.6, "internal", { d: 12.5, color: "selected" }, 987.6],
    ["Wonderful", 234.5, "commercial", 654.3, 876.5],
    ["Remarkable", 876.5, "internal", { d: 12.5, color: "selected" }, 987.6],
  ],
};

export const reportData2 = {
  header: [
    { id: "project_name", type: "string", caption: "Project name" },
    { id: "total_by_project", type: "float", caption: "Total by project" },
    {
      id: "project_type",
      type: "string",
      caption: "Project type",
      align: "center",
    },
    { id: "is_active", type: "boolean", caption: "Is Active?" },
  ],
  data: [
    ["Mimesis", 1024.3, "commercial", true],
    ["Mako", 2345.1, "internal", false],
    ["Edelweiss", 54.4, "commercial", true],
    ["Alpha", 789.0, "internal", true],
    ["Beta", 1000.0, "commercial", false],
    ["Gamma", 123.4, "internal", true],
    ["Delta", 432.1, "commercial", false],
    ["Epsilon", 123.0, "internal", true],
    ["Zeta", 456.1, "commercial", false],
    ["Eta", 987.6, "internal", true],
    ["Theta", 345.2, "commercial", false],
    ["Iota", 432.1, "internal", true],
    ["Kappa", 876.1, "commercial", false],
    ["Lambda", 987.6, "internal", true],
    ["Mu", 234.5, "commercial", false],
    ["Nu", 876.5, "internal", true],
  ],
};
export const reportData3 = {
  header: [
    { id: "project_name", type: "string", caption: "Project name" },
    { id: "total_by_project", type: "integer", caption: "Total by project" },
    {
      id: "project_type",
      type: "string",
      caption: "Project type",
      align: "center",
    },
  ],
  data: [
    ["Mimesis", 1024, "commercial"],
    ["Mako", 2345, "internal"],
    ["Edelweiss", 54, "commercial"],
    ["Phoenix", 789, "internal"],
    ["Mercury", 1000, "commercial"],
    ["Orion", 123, "internal"],
    ["New Horizons", 432, "commercial"],
    ["Artemis", 123, "internal"],
    ["Jupiter", 456, "commercial"],
    ["Atlas", 987, "internal"],
    ["Titan", 345, "commercial"],
    ["Gaia", 432, "internal"],
    ["Apollo", 876, "commercial"],
    ["Valkyrie", 987, "internal"],
    ["Nebula", 234, "commercial"],
    ["Aquarius", 876, "internal"],
  ],
};