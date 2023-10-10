function calculateDifference() {
  const getElement = (id) => document.getElementById(id);
  const year = getElement("year").value;
  const month = getElement("month").value;
  const day = getElement("day").value;
  const button = getElement("button");
  const daysOutput = getElement("daysOutput");
  const monthsOutput = getElement("monthsOutput");
  const yearsOutput = getElement("yearsOutput");
  const noTextInput = getElement("noTextValue");

  const inputDate = new Date(year, month - 1, day);
  const currentDate = new Date();

  const timeDifference = Math.abs(currentDate - inputDate);

  const yearsDifference = Math.floor(
    timeDifference / (1000 * 60 * 60 * 24 * 365)
  );
  const monthsDifference = Math.floor(
    (timeDifference % (1000 * 60 * 60 * 24 * 365)) /
      (1000 * 60 * 60 * 24 * 30.44)
  );
  const daysDifference = Math.floor(
    (timeDifference % (1000 * 60 * 60 * 24 * 30.44)) / (1000 * 60 * 60 * 24)
  );

  const setBorderStyle = (id, style) => (getElement(id).style.border = style);
  const resetBorders = () =>
    ["day", "month", "year"].forEach((id) =>
      setBorderStyle(id, "1px solid black")
    );

  if (year === "" || month === "" || day === "" || day > 31 || month > 12) {
    ["day", "month", "year"].forEach((id) =>
      setBorderStyle(id, "1px solid red")
    );
    noTextInput.innerText = "No valid input";
    noTextInput.style.color = "red";
  } else {
    daysOutput.innerHTML = daysDifference;
    monthsOutput.innerText = monthsDifference;
    yearsOutput.innerText = yearsDifference;
    button.style.boxShadow = "5px 3px 3px lightgray";
    noTextInput.style.display = "none";
    resetBorders();
  }
}

document
  .getElementById("button")
  .addEventListener("click", calculateDifference);
