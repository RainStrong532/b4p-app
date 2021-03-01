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
    text_nav_bar: {
        color: '#4CAF50',
        fontSize: 17,
    },
    title_nav_bar: {
        color: '#4CAF50',
        fontSize: 17,
        fontWeight: 'bold'
    },
    sub_title_nav_bar: {
        color: '#4CAF50',
        fontSize: 16,
        fontWeight: 'bold'
    },
    position_absolute_full: {
        position: 'absolute',
        top: 0,
        bottom: 0,
        right: 0,
        left: 0
    },
    position_absolute_bottom: {
        position: 'absolute',
        bottom: 0,
        right: 0,
        left: 0
    },
    position_absolute_top: {
        position: 'absolute',
        top: 0,
        right: 0,
        left: 0
    },
    container: {
        flex: 1,
        justifyContent: 'center',
        backgroundColor: '#fff',
    },
    title: {
        alignSelf: 'center',
        color: '#4CAF50',
        // fontWeight: 'bold',
        fontSize: 16
            // fontFamily: Fonts.hiraKakuProW6
    },
    button_bar: {
        justifyContent: 'center',
        alignItems: 'center',
        top: 2,
        width: 80,
        height: 40,
        position: 'absolute',
    },
    photo: {
        // margin: 1
    },
})