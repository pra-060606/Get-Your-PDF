const filename = document.title.replace(/[^a-z0-9]/gi, '_').toLowerCase() + '.pdf';

const options = {
  margin: 1,
  filename: filename,
  image: { type: 'jpeg', quality: 0.98 },
  html2canvas: { scale: 2 },
  jsPDF: { unit: 'in', format: 'letter', orientation: 'portrait' }
};

html2pdf().set(options).from(document.body).save();
