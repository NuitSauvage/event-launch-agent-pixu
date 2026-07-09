document.getElementById("openApp").addEventListener("click", async () => {
  const brief = document.getElementById("brief").value.trim();
  const url = new URL("http://localhost:8501/");
  if (brief) url.searchParams.set("brief", brief);
  await chrome.tabs.create({ url: url.toString() });
});
