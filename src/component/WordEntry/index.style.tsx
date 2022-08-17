import styled from 'styled-components'

export const StyledWordEntry = styled.input `
  margin: 15px;
  border-radius: 10px;
  width: 250px;
  height: 30px;
  position: relative;
  top: 10px;
  border:2px solid blue;
  &:focus {
    outline: none;
    box-shadow: 0px 0px 2px blue;
}
`

export const StyledBlock = styled.div`
width: 250px;
height: 40px;
text-align: center;
color: white;
font-size: 25px;
`
export const StyledEvaluateButton = styled.button`
width: 72px;
height: 40px;
background:  #CC4433;
color: white;
border-radius: 5px;
margin: 15px;
position: relative;
top: 10px
`

export const StyledWordEntryContainer = styled.div`
  display:block;
  flex: row;
`
