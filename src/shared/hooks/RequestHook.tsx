import axios, { AxiosResponse } from "axios";
import { GITHUB } from "../../configs/constants/Apis";
import { useQuery } from "@tanstack/react-query";

export function GET<T = undefined>(
	url: string = GITHUB.repos,
	key: string = "chave"
) {
	const query = useQuery<AxiosResponse<T>>({
		queryFn: () => axios.get(url),
		queryKey: [key],
	});
	return query;
}
