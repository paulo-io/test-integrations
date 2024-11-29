// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type ArrowIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function ArrowIcon(props: ArrowIconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 43 8"}
      height={"1em"}
      className={classNames("plasmic-default__svg", className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path
        d={
          "M42.354 4.354a.5.5 0 000-.708L39.172.464a.5.5 0 10-.707.708L41.293 4l-2.828 2.828a.5.5 0 10.707.708l3.182-3.182zM0 4.5h42v-1H0v1z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default ArrowIcon;
/* prettier-ignore-end */
