(function () {
  const removeShortsLink = () => {
    // Remove Shorts link in sidebar
    document.querySelectorAll('a[title="Shorts"]').forEach((el) => el.remove());

    // Remove Shorts shelf from homepage
    document
      .querySelectorAll(
        "grid-shelf-view-model.ytGridShelfViewModelHost.ytd-item-section-renderer"
      )
      .forEach((el) => el.remove());
    //Remove the Shorts tab from a channel's page
    document
      .querySelectorAll('yt-tab-shape[tab-title="Shorts"]')
      .forEach((el) => el.remove());
    //Remove the shorts section from a channel's page
    document
      .querySelectorAll("ytd-reel-shelf-renderer")
      .forEach((el) => el.remove());

    //Remove the shorts sections from the homepage, in case the first one didnt work
    document
      .querySelectorAll("ytd-rich-section-renderer")
      .forEach((el) => el.remove());
  };

  removeShortsLink();

  const observer = new MutationObserver(() => {
    removeShortsLink();
  });

  observer.observe(document.body, {
    childList: true,
    subtree: true,
  });
})();
