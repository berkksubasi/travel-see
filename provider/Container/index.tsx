import {RootSiblingParent} from 'react-native-root-siblings';
import {FullWindowOverlayContainer} from './FullWindowOverlayContainer';
import {KeyboardContainer} from './KeyboardContainer';
import {PortalBodyContainer} from './PortalBodyContainer';

export function Container() {
    return (
        <RootSiblingParent>
            <KeyboardContainer />
            <FullWindowOverlayContainer />
            <PortalBodyContainer />
        </RootSiblingParent>
    );
}
