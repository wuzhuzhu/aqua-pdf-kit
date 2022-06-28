import { useEffect, useRef } from "react";
import {useParams} from "react-router-dom"

export default function PdfViewerComponent(props) {
  const { url, page = 1 } = useParams();
  const containerRef = useRef(null);

  useEffect(() => {
    const container = containerRef.current;
    let instance, PSPDFKit;
    (async function() {
      PSPDFKit = await import("pspdfkit");
      instance = await PSPDFKit.load({
        // Container where PSPDFKit should be mounted.
        container,
        // https://aqua-expo-static.s3.ap-southeast-1.amazonaws.com/airbnb.pdf
        // The document to open.
        document: url,
        // Use the public directory URL as a base URL. PSPDFKit will download its library assets from here.
        baseUrl: `${window.location.protocol}//${window.location.host}/${process.env.PUBLIC_URL}`,
        initialViewState: new PSPDFKit.ViewState({
          // pageIndex: 2,
          // sidebarMode: PSPDFKit.SidebarMode.THUMBNAILS
        })
      });

      const state = instance.viewState;
      const newState = state.set("currentPageIndex", Number(page) - 1);
      instance.setViewState(newState)

      const p = PSPDFKit
      const i = instance


    })();

    // instance.GoTo(5)


    return () => PSPDFKit && PSPDFKit.unload(container);
  }, []);

  return (
    <div ref={containerRef} style={{ width: "100%", height: "100vh"}}/>
  );
}
