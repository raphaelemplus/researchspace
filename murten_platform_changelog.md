- Plat migration:
    - runtime-data/ldp
    - runtime-data/data/tmeplates
    - runtime-data/config/*.prop


- added new KP (full insert, select, delete) to link Frame to Recognized_Visualitem
- created resource for Recognized_Visualitem, Visual_Recognition, Frame and assigned respective logo
- created new image annotation template to enable recursive image annotation
- enable displying external IIIF image service in card thumbnails, form thumbnails, annotation services
- change mirador instance in annotation service options.maxZoomPixelRatio to default value
- changed css for resource card object-fit to contain to support extra-wide and extra-tall images
- implemented Absolute class for ImageApi to failback support to iiif services that do not accept floating point requests
- changed PreferredThunmbnail setting to support external IIIF resources
- fixed tipo-bugs from rsp:ResourceCard
- added KP for IIIF service