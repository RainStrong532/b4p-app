import { StyleSheet } from 'react-native'
import Device from '../modules/Device'

const initialLayout = {
    height: Device.screenSize().height,
    width: Device.screenSize().width,
};
export const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    headerContainer: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        height: 48,
    },
    headerContainer1: {
        backgroundColor: "#206CDA",
        alignItems: 'center',
        justifyContent: 'space-between',
        display: 'flex',
        flexDirection: 'row',
        paddingHorizontal: 20,
        paddingTop: 20,
        height: 78
    },
    titleHeader: {
        textAlign: 'center',
        fontSize: 20,
        color: "#fff",
        lineHeight: 48
    },
    des1: {
        textAlign: 'center',
        fontSize: 20,
    },
    center: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
    },
    row: {
        display: 'flex',
        alignItems: 'center',
        flexDirection: 'row',
    },
})