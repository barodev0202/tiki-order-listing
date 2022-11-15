import React from 'react'
import styled, { keyframes } from 'styled-components'

const bounceLoader = keyframes`
to {
    opacity: 0.1;
    transform: translateY(-1rem);
  }
`
const BounceLoading = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;

  transform: translate(-50%, -50%);
  display: flex;
  justify-content: center;
  p {
    font-size: 20px;
    position: absolute;
    top: -40px;
    left: -80px;
  }
  div {
    width: 1rem;
    height: 1rem;
    margin: 0 0.5rem;
    background: #8385aa;
    border-radius: 50%;
    animation: ${bounceLoader} 0.6s infinite alternate;
    :nth-child(2) {
      animation-delay: 0.15s;
    }

    :nth-child(3) {
      animation-delay: 0.3s;
    }
  }
`
const BoxBounceLoader = styled.div`
  width: 950px;
  height: 300px;
  background: #fff;
  position: relative;
`
const loading = () => {
  return (
    <BoxBounceLoader>
      <BounceLoading>
        <p>Loading</p>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </BounceLoading>
    </BoxBounceLoader>
  )
}

export default loading