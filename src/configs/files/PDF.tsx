import { useState } from "react";
import { Document, Page } from "react-pdf";

const PDFComp = ({ file }: { file: string }) => {
	const [numPages, setNumPages] = useState<number>();
	const [pageNumber, setPagesNumber] = useState<number>();

	function onDocumentLoadSucess({ numPages }: { numPages: number }): void {
		setNumPages(numPages);
	}

	return (
		<div>
			<Document
				file={encodeURIComponent(file)}
				onLoadSuccess={onDocumentLoadSucess}
			>
				{Array.apply(null, Array(numPages))
					.map((x, i) => i + 1)
					.map((page) => {
						return (
							<Page
								pageNumber={page}
								renderTextLayer={false}
								renderAnnotationLayer={false}
							/>
						);
					})}
			</Document>
			<p>
				Page {pageNumber} of {numPages}
			</p>
		</div>
	);
};

export default PDFComp;
