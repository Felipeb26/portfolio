import { ITree } from "./ITree";

export interface ICertificate {
	sha: string;
	tree: ITree[];
	url: string;
}
