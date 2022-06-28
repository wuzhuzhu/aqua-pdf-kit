import PdfViewerComponent from './components/PdfViewerComponent';

function App() {
  return (
    <div className="App">
      <div className="PDF-viewer">
        <PdfViewerComponent
          document={"Document.pdf"}
        />
      </div>
    </div>
  );
}

export default App;
