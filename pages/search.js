import React from 'react'
import tw from "tailwind-styled-components";
function Search() {
    return (
      <Wrapper>
            <ButtonContainer>
                <BackButton src="https://img.icons8.com/ios-filled/50/000000/left.png"/>
            </ButtonContainer>
            {/* <InputContainer>
            
            </InputContainer> */}
        {/* Button container */}
        {/* input container */}
        {/* saved place */}
        {/* confirm location */}
      </Wrapper>
    );
}

export default Search

const Wrapper = tw.div`
bg-gray-200 h-screen
`

const ButtonContainer = tw.div`
bg-white px-4
`
// px=padding x-axis
const BackButton = tw.img`
h-12
`