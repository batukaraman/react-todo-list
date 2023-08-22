export const formatDateTime = () => {
  const date = new Date();
  const options = {
    day: "2-digit",
    month: "2-digit",
    year: "numeric",
    hour: "2-digit",
    minute: "2-digit",
    hour12: true,
  };
  return date.toLocaleString("tr-TR", options);
};

export const parseDateTime = (date) => {
  const [datePart, meridiem, timePart] = date.split(" ");

  const [day, month, year] = datePart.split(".");

  const [hours, minutes] = timePart.split(":");

  const isPM = meridiem === "ÖS";
  const hour = isPM ? parseInt(hours, 10) + 12 : parseInt(hours, 10);

  return new Date(year, month - 1, day, hour, minutes);
};
