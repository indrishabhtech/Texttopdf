const { jsPDF } = window.jspdf;

// Word Counter
function updateWordCounter() {
  const text = document.getElementById("textInput").value;
  const words = text.trim().split(/\s+/).filter(word => word.length > 0);
  document.getElementById("wordCounter").textContent = `Words: ${words.length}`;
}

// Theme Toggle
document.getElementById("themeToggle").addEventListener("change", function () {
  document.body.classList.toggle("dark");
});

// PDF Generation with Page Handling
document.getElementById("convertButton").addEventListener("click", function () {
  const textInput = document.getElementById("textInput").value;
  const fileName = document.getElementById("fileName").value.trim() || "Untitled";
  const fontStyle = document.getElementById("fontStyle").value;

  if (!textInput) {
    alert("Please enter some text!");
    return;
  }

  const pdfDoc = new jsPDF();
  const pageHeight = pdfDoc.internal.pageSize.height - 20; // Adjust for margins
  const textLines = pdfDoc.splitTextToSize(textInput, 180); // Fit width
  let yPosition = 10;

  pdfDoc.setFont(fontStyle);

  textLines.forEach(line => {
    if (yPosition + 10 > pageHeight) {
      pdfDoc.addPage();
      yPosition = 10;
    }
    pdfDoc.text(line, 10, yPosition);
    yPosition += 10;
  });

  pdfDoc.save(`${fileName}.pdf`);
});

// Preview Feature
document.getElementById("previewButton").addEventListener("click", function () {
  const textInput = document.getElementById("textInput").value;
  if (!textInput) {
    alert("Please enter some text!");
    return;
  }
  alert("Preview not implemented in this demo but can display text in a modal.");
});
