import React, { useState } from "react";
import {
  Alert,
  Modal,
  StyleSheet,
  Text,
  TouchableHighlight,
  TouchableOpacity,
  View
} from "react-native";
import Device from '../../modules/Device'

const initialLayout = {
    height: Device.screenSize().height,
    width: Device.screenSize().width,
};


const ModalComfirmComponent = (props) => {
  let showModal = props.showModal;
  const {onDelete} = props;
  return (
    <View style={styles.centeredView}>
      <Modal
        animationType="slide"
        transparent={true}
        visible={showModal}
        onRequestClose={() => {
            if(props.onPressShowModal){
                props.onPressShowModal();
            }
        }}
      >
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <View style={{width: '100%', paddingHorizontal: 20, paddingVertical: 20}}>
              <View style={{paddingHorizontal: 30, marginBottom: 25}}>
                <Text
                  style={{textAlign: 'center', color: "#FF0000", fontSize: 20, fontWeight: 'bold'}}
                >
                  Xóa bài viết
                </Text>
                <Text
                style={{textAlign: 'center', fontSize: 18}}
                >
                  Bạn có chắc chắn xóa vĩnh viễn bài viết này?
                </Text>
              </View>
              <View style={{display: 'flex', flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center'}}>
                <TouchableOpacity
                  onPress={() => {
                    if(props.onPressShowModal){
                      if(onDelete){
                        onDelete();
                      }
                      props.onPressShowModal();
                  }
                  }}
                  style={{borderRadius: 20, backgroundColor: '#1976D2', paddingVertical: 5, paddingHorizontal: 42}}
                >
                  <Text
                    style={{fontSize: 20, color: '#fff', fontWeight: '600'}}
                  >
                    Xóa
                  </Text>
                </TouchableOpacity>
                <TouchableOpacity
                onPress={() => {
                  if(props.onPressShowModal){
                    props.onPressShowModal();
                }
                }}
                  style={{borderRadius: 20, borderWidth: 1, borderColor: '#000', paddingVertical: 5, paddingHorizontal: 42}}
                >
                  <Text
                   style={{fontSize: 20, fontWeight: '600'}}
                  >
                    Hủy
                  </Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </View>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  modalView: {
    width: initialLayout.width-40,
    borderRadius: 10,
    backgroundColor: "white",
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5
  },
  openButton: {
    backgroundColor: "#F194FF",
    borderRadius: 20,
    padding: 10,
    elevation: 2
  },
  textStyle: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center"
  },
  modalText: {
    marginBottom: 15,
    textAlign: "center"
  }
});

export default ModalComfirmComponent;