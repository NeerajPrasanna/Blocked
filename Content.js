(function () {
  const removeShorts = () => {
    // Sidebar Shorts link
    document.querySelectorAll('a[title="Shorts"]').forEach((el) => el.remove());

    // Shorts tab on channel pages
    document
      .querySelectorAll('yt-tab-shape[tab-title="Shorts"]')
      .forEach((el) => el.remove());

    // Shorts shelves / sections
    document
      .querySelectorAll("ytd-reel-shelf-renderer")
      .forEach((el) => el.remove());
    document
      .querySelectorAll("ytd-rich-section-renderer")
      .forEach((el) => el.remove());

    // Shorts videos disguised as normal videos
    document
      .querySelectorAll('a[href^="/shorts/"]')
      .forEach((a) => a.closest("ytd-video-renderer")?.remove());
  };

  // Initial cleanup
  removeShorts();

  // YouTube is SPA → observe DOM changes
  const observer = new MutationObserver(removeShorts);
  observer.observe(document.body, {
    childList: true,
    subtree: true,
  });
})();
