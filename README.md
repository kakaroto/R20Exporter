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

# Further work

This tool was initially released as a patrons only perk on my [Patreon](https://patreon.com/kakaroto) and now that it is no longer in beta, it's been made available to everyone.

These are other tools that I am working on and that might be useful to other D&D players.

* [Beyond20](https://beyond20.here-for-more.info) : A Browser extension to integrate D&D Beyond character sheets into Roll 20 or Foundry VTT
* [R20Converter](https://patreon.com/kakaroto) : A script to convert a Roll20 campaign (exporter with this tool) into a pre-configured world for Foundry VTT (Patreon only)
* [FVTT Modules](https://github.com/kakaroto?utf8=%E2%9C%93&tab=repositories&q=fvtt-module&type=&language=) : Various modules for Foundry VTT that improve Quality of Life or add some familiar features that Roll 20 had for those who don't like changing their habits.

If you'd like to support me in the work I'm doing, you can subscribe to my [Patreon](htttps://patreon.com/kakaroto) or use my [Paypal](https://www.paypal.me/KaKaRoTo) for a one-time donation.

Thanks!