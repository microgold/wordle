import styled from 'styled-components'
import { AccuracyEnum, accuracyKeyColorMap, accuracyKeyForegroundColorMap } from '../../utilities/accuracy.utils'


export const StyledVirtualKeyButton = styled.button < { accuracy: AccuracyEnum }>`
  margin: 2px;
  height: 90px;
  min-width: 80px;
  padding-left: 10px;
  padding-right: 10px;
  border-radius: 2px;
  color: ${props => accuracyKeyForegroundColorMap.get(props.accuracy)};
  font-size: 30px;
  font-weight: bold;
  border-radius: 10px;
  border: 2px solid #787C7F;
  background: ${props => accuracyKeyColorMap.get(props.accuracy)};
  `