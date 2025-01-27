import { format } from "date-fns";
import { ptBR } from "date-fns/locale";

export const FormatarParaBR = (
	data: string | number,
	mostrarHoras: boolean = false
) => {
	if (mostrarHoras) {
		return format(new Date(data), "dd/MM/yyyy HH:mm:ss", { locale: ptBR });
	}
	return format(new Date(data), "dd/MM/yyyy", { locale: ptBR });
};
