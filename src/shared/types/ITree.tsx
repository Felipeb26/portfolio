export interface ITree {
	path: string;
	mode: string;
	type: "blob" | "pdf" | "img" | unknown;
	size: number;
	url: string;
}