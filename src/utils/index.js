export const formatPropertyKey = (key) => {
  return key
    .split("_")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");
};

export const formatPropertyValue = (value) => {
  if (Array.isArray(value)) {
    return value.join(", ");
  }
  if (typeof value === "boolean") {
    return value ? "Yes" : "No";
  }
  return value;
};

export const formatCoordinates = (coordinates) => {
  if (Array.isArray(coordinates[0])) {
    return `${coordinates[0][0][0].toFixed(4)}, ${coordinates[0][0][1].toFixed(
      4
    )}`;
  } else {
    return `${coordinates[0].toFixed(4)}, ${coordinates[1].toFixed(4)}`;
  }
};
