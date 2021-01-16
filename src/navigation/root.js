import { Navigation } from 'react-native-navigation';

export async function dimissModal(componentId) {
    try {
        await Navigation.dismissModal(componentId);
        return Promise.resolve()
    } catch (e) {
        return Promise.reject(e);
    }
}

export function backScreen(componentId, toRoot) {
    if (toRoot) {
        Navigation.popToRoot(componentId);
    } else {
        Navigation.pop(componentId);
    }

}