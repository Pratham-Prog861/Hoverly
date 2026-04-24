import type { SVGMotionProps } from "motion/react";
import type { ComponentType } from "react";

export type HoverlyIconCategory = "All" | "Social" | "UI" | "Arrows";

export interface AnimatedIconHandle {
  startAnimation: () => void | Promise<void>;
  stopAnimation: () => void | Promise<void>;
}

export interface AnimatedIconProps
  extends Omit<SVGMotionProps<SVGSVGElement>, "ref"> {
  size?: number;
  color?: string;
  strokeWidth?: number;
  className?: string;
}

export type HoverlyIconProps = AnimatedIconProps;

export interface IconCliCommand {
  label: string;
  command: string;
}

export interface HoverlyIconRecord {
  slug: string;
  name: string;
  category: Exclude<HoverlyIconCategory, "All">;
  description: string;
  tags: string[];
  componentName: string;
  importPath: string;
  sourceCode: string;
  registryUrl: string;
  cliCommands: IconCliCommand[];
}

export type HoverlyIconComponent = ComponentType<AnimatedIconProps>;
