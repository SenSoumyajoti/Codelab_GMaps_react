import {APIProvider} from '@vis.gl/react-google-maps';
import {Map, MapCameraChangedEvent} from '@vis.gl/react-google-maps';
import React from 'react';
import { createRoot } from "react-dom/client";
import {
  useJsApiLoader,
  GoogleMap,
  Marker,
  InfoWindow,
} from "@react-google-maps/api";

const App = () => (
<APIProvider apiKey={'AIzaSyDI51q6jsVRPwLtwesrAjH6-xw7uxEsOJM'} onLoad={() => console.log('Maps API has loaded.')}>
<h1>Hello, world!</h1>
<Map
      defaultZoom={13}
      defaultCenter={ { lat: 23.207594, lng: 87.027532 } }
      onCameraChanged={ (ev: MapCameraChangedEvent) =>
        console.log('camera changed:', ev.detail.center, 'zoom:', ev.detail.zoom)
      }>
</Map>
</APIProvider>
);

const root = createRoot(document.getElementById('app'));
root.render(<App />);

export default App;