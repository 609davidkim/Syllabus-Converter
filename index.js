import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

const docxFileInput = document.getElementById('docx-file');
const dropZone = document.getElementById('drop-zone');

// Drag and drop handlers
dropZone.addEventListener('click', () => {
  docxFileInput.click();
});
dropZone.addEventListener('dragover', (event) => {
  event.preventDefault();
  dropZone.classList.add('dragover');
});
dropZone.addEventListener('dragleave', () => {
  dropZone.classList.remove('dragover');
});
dropZone.addEventListener('drop', (event) => {
  event.preventDefault();
  dropZone.classList.remove('dragover');
  if (event.dataTransfer.files.length > 0) {
    const file = event.dataTransfer.files[0];
    if (
      file.type === 'application/vnd.openxmlformats-officedocument.wordprocessingml.document' ||
      file.type === 'application/pdf'
    ) {
      docxFileInput.files = event.dataTransfer.files;
      dropZone.textContent = file.name;
    } else {
      alert('Please drop a valid file.');
    }
  }
});

docxFileInput.addEventListener('change', (event) => {
  const file = event.target.files[0];
  if (file) {
    dropZone.textContent = file.name;
  }
});
