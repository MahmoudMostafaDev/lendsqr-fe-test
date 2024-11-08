export function removeOpenFromRefWhenClickOutside(ref: any, classes: any) {
  document.addEventListener("click", (e) => {
    if (
      ref instanceof Object &&
      "current" in ref &&
      ref.current instanceof HTMLElement
    ) {
      if (ref.current instanceof HTMLElement) {
        if (
          ref.current.classList.contains(classes.open) &&
          !ref.current.contains(e.target as Node) &&
          !(
            e.target instanceof HTMLImageElement ||
            e.target instanceof HTMLButtonElement
          )
        ) {
          ref.current.classList.remove(classes.open);
        }
      }
    }
  });
}
