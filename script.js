document.getElementById('convertButton').addEventListener('click', function () {
  const textInput = document.getElementById('textInput').value;
  const fileName = document.getElementById('fileName').value.trim() || 'Untitled';

  if (textInput === '') {
    alert('Please enter some text!');
    return;
  }

  const pdfDoc = new jsPDF();
  pdfDoc.text(textInput, 10, 10);
  pdfDoc.save(`${fileName}.pdf`);
});
