import React from "react";

function dateConvertor(inputDateString) {
  const inputDate = new Date(inputDateString);

  const day = inputDate.getDate();
  const monthAbbreviation = inputDate.toLocaleString("default", {
    month: "short",
  });
  const year = String(inputDate.getFullYear()).slice(-2);
  const hours = String(inputDate.getHours()).padStart(2, "0");
  const minutes = String(inputDate.getMinutes()).padStart(2, "0");

  const formattedDate = `${day} ${monthAbbreviation} ${year} | ${hours}:${minutes}`;

  return formattedDate;
}

export default dateConvertor;
