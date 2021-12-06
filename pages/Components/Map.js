import React, { useEffect } from "react";
import tw from "tailwind-styled-components";
import mapboxgl from "!mapbox-gl";

mapboxgl.accessToken =
  "pk.eyJ1IjoiaGF5YXRqIiwiYSI6ImNrdzJraDJlamJyMHIybnF3MjBieGhyM2MifQ.t9i-WA_YRVJY-e6HZY-ipg";

const Map = (props) => {
  console.log(props)
  useEffect(() => {
    const map = new mapboxgl.Map({
      container: "map", //this is an id that is in html
      style: "mapbox://styles/mapbox/streets-v11",
      center: [-9.29011, 39.39172],
      zoom: 3,
    });

    if (props.pickupCoordinates) {
      addToMap(map,props.pickupCoordinates)
    }
    if (props.dropoffCoordinates) {
      addToMap(map,props.dropoffCoordinates)
    }
    if (props.pickupCoordinates && props.dropoffCoordinates) {
      map.fitBounds([
        props.dropoffCoordinates,
        props.pickupCoordinates
      ], {
        padding:60
      })
    }
   
  },[props.pickupCoordinates,props.dropoffCoordinates])
  const addToMap = (map, coordinates) => {
     const marker1 = new mapboxgl.Marker().setLngLat(coordinates).addTo(map);
  }

  // useEffect(() => {
  //   console.log(props.pickupCoordinates);
  //   console.log(props.dropoffCoordinates);
  // },[])
  // const map = new mapboxgl.Map({
  //   container: "YOUR_CONTAINER_ELEMENT_ID",
  //   style: "mapbox://styles/mapbox/streets-v11",
  //   center:6,
  //   zoom:3
  // });

  return <Wrapper id="map"></Wrapper>;
};

const Wrapper = tw.div`
flex-1
`;

export default Map;
