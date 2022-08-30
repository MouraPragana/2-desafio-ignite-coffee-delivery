import styled from 'styled-components'
import bakcgroundHome from '../../assets/backgroundHome.svg'

export const HomeContainer = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 34rem;
  background: url(${bakcgroundHome});
  background-repeat: no-repeat;
  background-size: cover;
`

export const HomeContent = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  align-items: flex-start;
  justify-content: space-between;
  width: 100%;
  max-width: 90rem;
  padding: 0 1rem;
  margin: 94px auto;
  img {
    max-width: 29.75rem;
    max-height: 22.5rem;
  }
`

export const LeftContent = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
`

export const Title = styled.h1`
  display: flex;
  font-weight: 800;
  font-size: 3rem;
  line-height: 1.3;
  max-width: 588px;
  font-family: 'Baloo 2', cursive;
  color: ${(props) => props.theme['title-color']};
`

export const SubTitle = styled.span`
  display: flex;
  font-size: 1.25rem;
  line-height: 1.3;
  max-width: 588px;
  align-self: stretch;
  margin-top: 1rem;
  color: ${(props) => props.theme['subtitle-color']};
  font-stretch: 100;
`

export const AdicionalContent = styled.div`
  display: flex;
  margin-top: 4.25rem;
`
