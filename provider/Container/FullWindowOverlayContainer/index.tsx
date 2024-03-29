
import { Portal } from '@ui'
import { OverlayContainer } from './OverlayContainer'

export function FullWindowOverlayContainer() {
  return (
    <OverlayContainer>
      <Portal.Container name={Portal.Constant.FULL_WINDOW_OVERLAY_PORTAL} />
    </OverlayContainer>
  )
}
