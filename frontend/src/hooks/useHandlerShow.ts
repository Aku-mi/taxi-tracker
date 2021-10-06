import { useState, useCallback, useEffect } from "react";

type Reference = React.MutableRefObject<HTMLElement | null>;

export const useHandlerShow = (node: Reference, parent: Reference) => {
  const [showNode, setShowNode] = useState(false);

  const mouseHandler = useCallback(
    (e: MouseEvent) => {
      if (
        !node.current?.contains(e.target as Node) &&
        !parent.current?.contains(e.target as Node)
      ) {
        setShowNode(false);
      }
    },
    [node, parent]
  );

  useEffect(() => {
    document.addEventListener("mousedown", mouseHandler);

    return () => document.removeEventListener("mousedown", mouseHandler);
  }, [mouseHandler]);

  return {
    showNode,
    setShowNode,
  };
};
