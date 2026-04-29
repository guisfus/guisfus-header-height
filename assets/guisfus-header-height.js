(function () {
  "use strict";

  const config = window.GuisfusHeaderHeight || {};
  const selector = config.headerSelector || ".sticky-header-custom";
  const properties = Array.isArray(config.properties)
    ? config.properties
    : ["--guisfus-header-height", "--header-height-custom"];

  let header = null;
  let frame = null;
  let observedHeader = null;
  let resizeObserver = null;

  function findHeader() {
    if (header && document.documentElement.contains(header)) {
      return header;
    }

    try {
      header = document.querySelector(selector);
    } catch (error) {
      header = null;
    }

    return header;
  }

  function setHeaderHeight() {
    const currentHeader = findHeader();

    if (!currentHeader) {
      return;
    }

    const value = `${Math.round(currentHeader.getBoundingClientRect().height)}px`;

    properties.forEach((property) => {
      document.documentElement.style.setProperty(property, value);
    });
  }

  function scheduleUpdate() {
    if (frame) {
      return;
    }

    frame = window.requestAnimationFrame(() => {
      frame = null;
      setHeaderHeight();
    });
  }

  function observeHeaderSize() {
    if (!window.ResizeObserver) {
      return;
    }

    const currentHeader = findHeader();

    if (!currentHeader || currentHeader === observedHeader) {
      return;
    }

    if (!resizeObserver) {
      resizeObserver = new ResizeObserver(scheduleUpdate);
    }

    if (observedHeader) {
      resizeObserver.unobserve(observedHeader);
    }

    observedHeader = currentHeader;
    resizeObserver.observe(currentHeader);
  }

  function init() {
    scheduleUpdate();

    window.addEventListener("load", scheduleUpdate, { passive: true });
    window.addEventListener("resize", scheduleUpdate, { passive: true });

    observeHeaderSize();

    const mutationObserver = new MutationObserver(() => {
      scheduleUpdate();
      observeHeaderSize();
    });

    mutationObserver.observe(document.body, { childList: true, subtree: true });

    window.setTimeout(scheduleUpdate, 250);
    window.setTimeout(scheduleUpdate, 1000);
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", init, { once: true });
  } else {
    init();
  }
})();
