import { Routes, Route, useParams } from 'react-router-dom';

import PdfViewerComponent from '../components/PdfViewerComponent';

function PdfPage() {
  return (
    <div className="App">
      <div className="PDF-viewer">
        <PdfViewerComponent />
      </div>
    </div>
  );
}

export default PdfPage;
