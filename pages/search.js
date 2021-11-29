import React from 'react'
import tw from "tailwind-styled-components";
function Search() {
    return (
      <Wrapper>
        <ButtonContainer>
          <BackButton src="https://img.icons8.com/ios-filled/50/000000/left.png" />
        </ButtonContainer>
        <InputContainer>
          <FromToIcons>
            <Circle src="https://img.icons8.com/ios-filled/50/9CA3AF/filled-circle.png" />
            <Line src="https://img.icons8.com/ios/50/9CA3AF/vertical-line.png" />
          <Square src=""/>
                </FromToIcons>
                <InputBoxes>
                </InputBoxes>
        </InputContainer>
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

const FromToIcons = tw.div`
w-10 flex flex-col
`
const InputContainer = tw.div`
bg-white
`
const Circle = tw.img`

`
const Line = tw.img`

`
const Square = tw.img`

`
const InputBoxes = te.div`

`