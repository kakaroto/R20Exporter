This tool can be used to export an entire Roll 20 campaign into a ZIP file for backup/archiving purposes.


> **DISCLAIMER**: 
> The use of this tool is meant for backup and archiving purposes of your own campaigns. It is only meant and should only be used on campaigns with content that you own.  
> Even if using it only on your own previously uploaded content, the use of this tool may still be against the [Roll 20 Marketplace Asset End User License Agreement](https://wiki.roll20.net/Marketplace_Asset_EULA)
> and the [Roll 20 EULA or Terms of Service](https://wiki.roll20.net/Terms_of_Service_and_Privacy_Policy).  
> The use of this tool may be considered grounds for account suspension or termination.

# R20Exporter
You can either install the script as a [Tampermonkey](https://chrome.google.com/webstore/detail/tampermonkey/dhdgffkkebhmkfjojejmpbldmpobfkfo?hl=en) user script, or, if you don't use or don't want to use Tampermonkey, then you can also open the standalone file and copy/paste its content in the browser's console instead.

**Make sure you use Chrome**, as this will not work on Firefox or other browsers.

If you use Tampermonkey, then install the dist/R20Exporter.js file as a user script then reload your R20 campaign page.
If you want to use the standalone method instead, then open your R20 campaign, then press F12 to open the developer's console, open the dist/R20Exporter_standalone.js file in the text editor of your choice and copy/paste its content into the developer's console and press Enter.

To export your campaign go to the settings tab in the Roll20 page (the gear icon on the far right of the sidebar) and at the top you should see a button "**Export Campaign to ZIP**". Simply click on it, then wait until the ZIP file is downloaded.

While generating the ZIP file, do make sure you have the campaign tab focused in chrome (separate it in its own window if needed), otherwise the download speed of the zip will drop to very very slow transfer speeds since the javascript that generates the zip on the fly will be running as a low priority background process.

The dialog that opens will show you the various steps the script is undertaking and you can click the Log button to see a more detailed log of what is happening. That dialog window will also prevent you from messing around with the campaign. It is best to let the script do its thing unhindered. Once the export process is complete, that window will close on its own and the ZIP file will be downloaded automatically.
