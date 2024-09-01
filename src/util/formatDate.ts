export function formatDate(date: Date) {
  const formattedDate = date.toLocaleDateString("en", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });

  return formattedDate;
}
