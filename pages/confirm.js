import React, { useEffect, useState } from "react";
import tw from "tailwind-styled-components";
import Map from "./Components/Map";
const Confirm = () => {
  const [pickupCoordinates, setPickupCoordinates] = useState();
  const [dropoffCoordinates, setDropoffCoordinates] = useState();

  const getPickupgetCoordinates = () => {
    const pickup = "Jiddah";
    fetch(
      `https://api.mapbox.com/geocoding/v5/mapbox.places/${pickup}.json?` +
        new URLSearchParams({
          access_token:
            "pk.eyJ1IjoiaGF5YXRqIiwiYSI6ImNrdzJraDJlamJyMHIybnF3MjBieGhyM2MifQ.t9i-WA_YRVJY-e6HZY-ipg",
          limit: 1,
        })
    )
      .then((response) => response.json())
      .then((data) => {
        //   console.log(data.features[0].center);
        setPickupCoordinates(data.features[0].center);
      });
    //?acess_token
  };
  const getDropoffCoordinates = () => {
    const dropoff = "Mekkah";
    fetch(
      `https://api.mapbox.com/geocoding/v5/mapbox.places/${dropoff}.json?` +
        new URLSearchParams({
          access_token:
            "pk.eyJ1IjoiaGF5YXRqIiwiYSI6ImNrdzJraDJlamJyMHIybnF3MjBieGhyM2MifQ.t9i-WA_YRVJY-e6HZY-ipg",
          limit: 1,
        })
    )
      .then((response) => response.json())
      .then((data) => {
        console.log("dropoff");
        //  console.log(data.features[0].center);
        setDropoffCoordinates(data.features[0].center);
      });
  };

  useEffect(() => {
    getPickupgetCoordinates();
    getDropoffCoordinates();
  }, []);
  console.log(pickupCoordinates);

  return (
    <Wrapper>
      <Map
        pickupCoordinates={pickupCoordinates}
        dropoffCoordinates={dropoffCoordinates}
      />
      <RideContainer>
        Ride Selector confirm Button
        {/* to check */}
        {/* {pickupCoordinates}
             {dropoffCoordinates} */}
      </RideContainer>
    </Wrapper>
  );
};

export default Confirm;

const RideContainer = tw.div`
flex-1 
`;

const Wrapper = tw.div`
flex h-screen flex-col
`;
