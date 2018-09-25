const mbAttr = `Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, 
              <a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>,
              Imagery © <a href="http://mapbox.com">Mapbox</a>`


const blanktile =  L.esri.tiledMapLayer({url: 'https://services.arcgisonline.com/arcgis/rest/services/Ocean/World_Ocean_Base/MapServer'}),
grayscale = L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token=pk.eyJ1IjoicmNzaGVwYXJkIiwiYSI6IjYwYjI0NzdmNDQwM2YzNTc1ODI2NWZhNTU1ZTVmNjY4In0.ct_UnOxwtV_WIGwzyG0Rxw', {id: 'mapbox.light', attribution: mbAttr}),
dark = L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token=pk.eyJ1IjoicmNzaGVwYXJkIiwiYSI6IjYwYjI0NzdmNDQwM2YzNTc1ODI2NWZhNTU1ZTVmNjY4In0.ct_UnOxwtV_WIGwzyG0Rxw', {id: 'mapbox.dark', attribution: mbAttr}),
opengeo = L.tileLayer.wms('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {maxZoom:19, attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'}),
stamenbackground = L.tileLayer('http://stamen-tiles-{s}.a.ssl.fastly.net/terrain-background/{z}/{x}/{y}.{ext}', {
  attribution: 'Map tiles by <a href="http://stamen.com">Stamen Design</a>, <a href="http://creativecommons.org/licenses/by/3.0">CC BY 3.0</a> &mdash; Map data &copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>',
  subdomains: 'abcd',
  minZoom: 0,
  maxZoom: 18,
  ext: 'png'
}),
stamenmap = L.tileLayer('http://stamen-tiles-{s}.a.ssl.fastly.net/terrain/{z}/{x}/{y}.{ext}', {
  attribution: 'Map tiles by <a href="http://stamen.com">Stamen Design</a>, <a href="http://creativecommons.org/licenses/by/3.0">CC BY 3.0</a> &mdash; Map data &copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>',
  subdomains: 'abcd',
  minZoom: 0,
  maxZoom: 18,
  ext: 'png'
})

const CircleMarkers = {
  radius: 7,
  fillColor: "#000000",
  color: "#000000",
  weight: 1,
  opacity: 0,
  fillOpacity: 0.1
}