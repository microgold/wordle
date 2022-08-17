import styled from 'styled-components'
import { AccuracyEnum, accuracyColorMap } from '.'




export const StyledLetterButton = styled.button < { accuracy: AccuracyEnum }>`
  margin: 2px;
  width: 50px;
  height: 50px;
  border-radius: 2px;
  color: white;
  font-size: 30px;
  font-weight: bold;
  border: 2px solid #787C7F;
  background: ${props => accuracyColorMap.get(props.accuracy)};
  `