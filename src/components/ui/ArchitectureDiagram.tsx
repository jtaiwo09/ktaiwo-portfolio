import React from "react";
import { FiChevronDown } from "react-icons/fi";
import type { ArchitectureLayer } from "@/types";

interface Props {
  layers: ArchitectureLayer[];
}

/**
 * Clean, theme-aware system-architecture diagram rendered as a top-to-bottom
 * flow of layers. Pure CSS/components, no images, so it stays crisp and editable.
 */
const ArchitectureDiagram = ({ layers }: Props) => {
  return (
    <div className="flex flex-col items-center">
      {layers.map((layer, i) => (
        <React.Fragment key={layer.label}>
          <div className="surface w-full max-w-md px-5 py-4 text-center">
            <p className="font-mono text-sm font-semibold text-secondary dark:text-info">
              {layer.label}
            </p>
            {layer.note && (
              <p className="muted mt-1 text-xs">{layer.note}</p>
            )}
          </div>
          {i < layers.length - 1 && (
            <FiChevronDown className="my-2 shrink-0 accent" aria-hidden />
          )}
        </React.Fragment>
      ))}
    </div>
  );
};

export default ArchitectureDiagram;
