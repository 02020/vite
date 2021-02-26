```ts

GIS.initArcGisJsApi("/esri/4.15").then(() => {
  gis.withFontsUrl("/esri/fonts")
  appInit();
});
```