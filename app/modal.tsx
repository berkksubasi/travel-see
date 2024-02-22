import {StatusBar} from 'expo-status-bar';
import {Platform} from 'react-native';
import {Text, XStack} from '../ui';

export default function ModalScreen() {
    return (
        <XStack>
            <Text>Tab333 One</Text>
            {/* <EditScreenInfo path="app/modal.tsx" /> */}
            <StatusBar
                style={Platform.OS === 'ios' ? 'light' : 'auto'}
            />
        </XStack>
    );
}
