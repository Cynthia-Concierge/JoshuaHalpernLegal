import { useEffect } from "react";

/**
 * Accessibility safety net (WCAG 1.3.1 / 4.1.2):
 * - Associates each <label> that has no `for` and no nested control with the
 *   first unlabeled input/select/textarea in the same field wrapper.
 * - Gives any remaining unlabeled control an aria-label from its placeholder or name.
 * Runs on load and whenever the DOM changes (route changes, modals opening).
 */
let counter = 0;
const CONTROL = "input:not([type=hidden]), select, textarea";

const isLabelled = (el: HTMLElement) =>
  !!(
    el.getAttribute("aria-label") ||
    el.getAttribute("aria-labelledby") ||
    el.closest("label") ||
    (el.id && document.querySelector(`label[for="${CSS.escape(el.id)}"]`))
  );

const enhance = () => {
  document.querySelectorAll<HTMLLabelElement>("label:not([for])").forEach((label) => {
    if (label.querySelector(CONTROL)) return;
    const wrapper = label.parentElement;
    if (!wrapper) return;
    const control = Array.from(wrapper.querySelectorAll<HTMLElement>(CONTROL)).find((c) => !isLabelled(c));
    if (!control) return;
    if (!control.id) control.id = `lh-field-${++counter}`;
    label.htmlFor = control.id;
  });

  document.querySelectorAll<HTMLElement>(CONTROL).forEach((el) => {
    if (isLabelled(el)) return;
    const fallback =
      el.getAttribute("placeholder") || el.getAttribute("title") || el.getAttribute("name")?.replace(/[_-]/g, " ");
    if (fallback) el.setAttribute("aria-label", fallback);
  });
};

const A11yEnhancer = () => {
  useEffect(() => {
    let scheduled = false;
    const run = () => {
      if (scheduled) return;
      scheduled = true;
      requestAnimationFrame(() => {
        scheduled = false;
        try {
          enhance();
        } catch {
          /* never break the page */
        }
      });
    };
    run();
    const observer = new MutationObserver(run);
    observer.observe(document.body, { childList: true, subtree: true });
    return () => observer.disconnect();
  }, []);
  return null;
};

export default A11yEnhancer;
