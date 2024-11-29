// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type BackgroundIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function BackgroundIcon(props: BackgroundIconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 685 492"}
      height={"1em"}
      className={classNames("plasmic-default__svg", className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path d={"M0 0h685v492H0V0z"} fill={"currentColor"}></path>
    </svg>
  );
}

export default BackgroundIcon;
/* prettier-ignore-end */
