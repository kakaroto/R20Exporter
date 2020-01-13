console.log("Roll20 Campaign exporter loaded.")

function loadScript(url, cb) {
  s = document.createElement('script');
  s.src = url;
  s.charset = "UTF-8";
  s.onload = () => {
    s.remove(); 
    if (cb)
      cb()
  }
  (document.head || document.documentElement).appendChild(s);
}

loadScript(chrome.extension.getURL("libs/FileSaver/FileSaver.js"),
 () => loadScript(chrome.extension.getURL("libs/zipjs/zip.js"), 
  () => loadScript(chrome.extension.getURL("libs/zipjs/zip-fs.js"), 
    () => loadScript(chrome.extension.getURL("libs/zipjs/zip-ext.js"),
      () => loadScript(chrome.extension.getURL("libs/zipjs/deflate.js"),
        () => loadScript(chrome.extension.getURL("src/R20Exporter.js"))
        )
      )
    )
  )
);

