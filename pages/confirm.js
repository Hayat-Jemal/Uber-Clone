import React, { useEffect, useState } from "react";
import tw from "tailwind-styled-components";
import Map from "./Components/Map";
import { useRouter } from "next/router";
import RideSelector from "./Components/RideSelector";
const Confirm = () => {
  const router = useRouter();
  const { pickup, dropoff } = router.query;
  console.log("pickup", pickup);
  console.log("dropoff", dropoff);

  const [pickupCoordinates, setPickupCoordinates] = useState();
  const [dropoffCoordinates, setDropoffCoordinates] = useState();

  const getPickupgetCoordinates = (pickup) => {
    // const pickup = "Jiddah";
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
  const getDropoffCoordinates = (dropoff) => {
    // const dropoff = "Mekkah";
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
    getPickupgetCoordinates(pickup);
    getDropoffCoordinates(dropoff);
  }, [pickup, dropoff]);
  console.log(pickupCoordinates);

  return (
    <Wrapper>
      <Map
        pickupCoordinates={pickupCoordinates}
        dropoffCoordinates={dropoffCoordinates}
      />
      <RideContainer>
        <RideSelector />

        <ConfirmButtonContainer>
          <ConfirmButton>Confirm UberX</ConfirmButton>
        </ConfirmButtonContainer>
      </RideContainer>
    </Wrapper>
  );
};


export default Confirm;
const ConfirmButton = tw.div`
bg-black text-white my-4 mx-4 py-4 text-center text-xl
`;


const ConfirmButtonContainer = tw.div`
border-t-2
`;
const RideContainer = tw.div`
flex-1  flex flex-col h-1/2
`;

const Wrapper = tw.div`
flex h-screen flex-col
`;
