import { ReactElement } from "react";

interface CustomRoutes {
	baseName?: string | null;
	component: ReactElement<unknown>;
    routeName: string,
}

export default CustomRoutes