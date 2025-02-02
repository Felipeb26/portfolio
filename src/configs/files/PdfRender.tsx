import {
	NavigateBefore as NavigateBeforeIcon,
	NavigateNext as NavigateNextIcon,
} from "@mui/icons-material";
import {
	Box,
	Button,
	Card,
	CardContent,
	CircularProgress,
	Paper,
	Typography,
} from "@mui/material";
import React, { useState } from "react";
import { Document, Page } from "react-pdf";

// Configurar worker do PDF.js
// pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`;

interface PDFViewerProps {
	url?: string;
	initialPage?: number;
	scale?: number;
}

interface DocumentLoadSuccess {
	numPages: number;
}

const PDFComp: React.FC<PDFViewerProps> = ({
	url = "https://raw.githubusercontent.com/Felipeb26/Certificados/master/ALURA/Felipe%20Batista%20Da%20Silva%20-%20Curso%20Docker_%20criando%20e%20gerenciando%20containers%20-%20Alura.pdf",
	initialPage = 1,
	scale = 1.2,
}) => {
	const [numPages, setNumPages] = useState<number | null>(null);
	const [pageNumber, setPageNumber] = useState<number>(initialPage);
	const [loading, setLoading] = useState<boolean>(true);
	const [error, setError] = useState<Error | null>(null);

	const onDocumentLoadSuccess = ({ numPages }: DocumentLoadSuccess): void => {
		setNumPages(numPages);
		setLoading(false);
	};

	const onDocumentLoadError = (error: Error): void => {
		setError(error);
		setLoading(false);
	};

	const goToPrevPage = (): void => {
		setPageNumber((prev) => Math.max(prev - 1, 1));
	};

	const goToNextPage = (): void => {
		setPageNumber((prev) =>
			numPages ? Math.min(prev + 1, numPages) : prev
		);
	};

	const LoadingMessage: React.FC = () => (
		<Box
			sx={{
				display: "flex",
				flexDirection: "column",
				alignItems: "center",
				p: 4,
			}}
		>
			<CircularProgress sx={{ mb: 2 }} />
			<Typography>Carregando PDF...</Typography>
		</Box>
	);

	const ErrorMessage: React.FC = () => (
		<Paper
			elevation={0}
			sx={{
				p: 3,
				backgroundColor: "error.light",
				color: "error.dark",
			}}
		>
			<Typography variant="subtitle1" fontWeight="bold">
				Erro ao carregar o PDF
			</Typography>
			<Typography variant="body2">
				{error?.message ||
					"Verifique se o arquivo ainda está disponível no GitHub"}
			</Typography>
		</Paper>
	);

	const PageLoadingMessage: React.FC = () => (
		<Box sx={{ p: 2, textAlign: "center" }}>
			<CircularProgress size={20} sx={{ mr: 1 }} />
			<Typography variant="body2" component="span">
				Carregando página {pageNumber}...
			</Typography>
		</Box>
	);

	return (
		<Card sx={{ maxWidth: 900, mx: "auto", mt: 2 }}>
			<CardContent>
				<Box
					sx={{
						display: "flex",
						flexDirection: "column",
						alignItems: "center",
					}}
				>
					<Document
						file={url}
						onLoadSuccess={onDocumentLoadSuccess}
						onLoadError={onDocumentLoadError}
						loading={<LoadingMessage />}
						error={<ErrorMessage />}
					>
						<Page
							pageNumber={pageNumber}
							scale={scale}
							loading={<PageLoadingMessage />}
						/>
					</Document>

					{!loading && !error && numPages && (
						<Box
							sx={{
								display: "flex",
								alignItems: "center",
								gap: 2,
								mt: 2,
							}}
						>
							<Button
								onClick={goToPrevPage}
								disabled={pageNumber <= 1}
								variant="outlined"
								startIcon={<NavigateBeforeIcon />}
							>
								Anterior
							</Button>

							<Typography variant="body2">
								Página {pageNumber} de {numPages}
							</Typography>

							<Button
								onClick={goToNextPage}
								disabled={pageNumber >= numPages}
								variant="outlined"
								endIcon={<NavigateNextIcon />}
							>
								Próxima
							</Button>
						</Box>
					)}
				</Box>
			</CardContent>
		</Card>
	);
};

export default PDFComp;
