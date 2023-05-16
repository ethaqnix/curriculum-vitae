import { FunctionComponent, SVGProps } from "react";

export type ObjectValues<T> = T[keyof T]

export type SvgIcon = FunctionComponent<SVGProps<SVGSVGElement>>;
