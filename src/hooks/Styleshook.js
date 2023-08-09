export function StyleHook(color, columnType, align) {
  {
    if (color === "selected") {
      return "#00A19B";
    }
  }
  {
    if (align) {
      return align;
    }
    switch (columnType) {
      case "string":
        return "left";
      case "integer":
        return "right";
      case "float":
        return "right";
      case "boolean":
        return "center";
      default:
        return "left";
    }
  }
}
