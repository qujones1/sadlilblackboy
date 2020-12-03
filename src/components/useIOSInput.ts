import { useEffect, useRef } from "react";

type InputType = (HTMLInputElement & HTMLTextAreaElement) | null;

export function useIOSInput(): React.MutableRefObject<InputType> {
  const inputRef = useRef<InputType>(null);

  useEffect(() => {
    const input = inputRef.current;
    const isIOS = /iPhone|iPod|iPad/.test(navigator.platform);
    if (input == null || !isIOS) {
      return;
    }

    function handleFocus() {
      input.classList.remove("text-sm");
    }
    function handleBlur() {
      input.classList.add("text-sm");
    }

    input.addEventListener("touchstart", handleFocus);
    input.addEventListener("blur", handleBlur);

    return () => {
      input.removeEventListener("touchstart", handleFocus);
      input.removeEventListener("blur", handleBlur);
    };
  }, []);

  return inputRef;
}
