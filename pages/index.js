import { useEffect } from 'react';
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import tw from "tailwind-styled-components";
import mapboxgl from "!mapbox-gl";

mapboxgl.accessToken =
  "pk.eyJ1IjoiaGF5YXRqIiwiYSI6ImNrdzJraDJlamJyMHIybnF3MjBieGhyM2MifQ.t9i-WA_YRVJY-e6HZY-ipg";

export default function Home() {

  useEffect(() => {
     const map = new mapboxgl.Map({
       container: "map",
       style: "mapbox://styles/mapbox/streets-v11",
       center: [-9.29011, 39.39172],
       zoom: 3,
     })
  },[])
  // const map = new mapboxgl.Map({
  //   container: "YOUR_CONTAINER_ELEMENT_ID",
  //   style: "mapbox://styles/mapbox/streets-v11",
  //   center:6,
  //   zoom:3
  // });


  
  return (
    <Wrapper>
      <Map id="map">map</Map>
      <ActionItems>start</ActionItems>
    </Wrapper>
  )
}

const Wrapper = tw.div`
flex flex-col bg-red-300 h-screen
`
const Map = tw.div`
bg-red-500 flex-1
`

const ActionItems = tw.div`
flex-1

`