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
import ModalComfirmComponent from './ModalComfirmComponent'
const initialLayout = {
    height: Device.screenSize().height,
    width: Device.screenSize().width,
};


const ModalOptionComponent = (props) => {
  const [modalVisible, setModalVisible] = useState(false);
  let showModal = props.showModal;
  const {data, myInfo, updatePost, deletePost} = props;
  onDelete = () => {
      console.warn("onDelete");
      if(deletePost){
        console.warn("deletePost");
          deletePost(data.item.id);
      }
  }
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
            {/* <Text style={styles.modalText}>Hello World!</Text>

            <TouchableHighlight
              style={{ ...styles.openButton, backgroundColor: "#2196F3" }}
              onPress={() => {
                setModalVisible(!modalVisible);
              }}
            >
              <Text style={styles.textStyle}>Hide Modal</Text>
            </TouchableHighlight> */}

            {
            (data && myInfo)
            ?
            (data.user.id === myInfo.id)
            ?
            <View style={{width: '100%'}}>
                <TouchableOpacity
                onPress={() => {
                    if(props.navigation){
                        if(data.item.type === "SOS"){
                        props.navigation.navigate("create_post_sos", {
                            item: data.item,
                            updatePost: updatePost,
                            navigation: props.navigation
                        })
                        }else{
                        props.navigation.navigate("create_post", {
                            item: data.item,
                            updatePost: updatePost,
                            navigation: props.navigation
                        })
                    }
                    props.onPressShowModal();
                }}}
                style={{width: '100%', paddingHorizontal: 20, paddingVertical: 15, borderBottomWidth: 1, borderBottomColor: '#C4C4C4'}}
                >
                    <Text
                    style={{textAlign: 'center', fontSize: 18}}
                    >Chỉnh sửa</Text>
                </TouchableOpacity>
            
                <TouchableOpacity
                style={{width: '100%', paddingHorizontal: 20, paddingVertical: 15, borderBottomWidth: 1, borderBottomColor: '#C4C4C4'}}
                onPress={()=>{
                    setModalVisible(!modalVisible);
                    if(props.onPressShowModal){
                        props.onPressShowModal();
                    }
                }}
                >
                    <Text
                    style={{textAlign: 'center', fontSize: 18, color: '#FE2323'}}
                    >Xóa</Text>
                </TouchableOpacity>
            </View>
            :
            <TouchableOpacity
            style={{width: '100%', paddingHorizontal: 20, paddingVertical: 15, borderBottomWidth: 1, borderBottomColor: '#C4C4C4'}}
            >
                <Text
                style={{textAlign: 'center', fontSize: 18, color: '#FE2323'}}
                >Báo cáo bài viết</Text>
            </TouchableOpacity>
            :<></>
            }
            <TouchableOpacity
            style={{width: '100%', paddingHorizontal: 20, paddingVertical: 15, borderBottomWidth: 1, borderBottomColor: '#C4C4C4'}}
            >
                <Text
                style={{textAlign: 'center', fontSize: 18, color: '#000'}}
                >Lưu bài viết</Text>
            </TouchableOpacity>
            <TouchableOpacity
            style={{width: '100%', paddingHorizontal: 20, paddingVertical: 15, borderBottomWidth: 1, borderBottomColor: '#C4C4C4'}}
            >
                <Text
                style={{textAlign: 'center', fontSize: 18, color: '#000'}}
                >Ẩn bài viết</Text>
            </TouchableOpacity>
            <TouchableOpacity
            style={{width: '100%', paddingHorizontal: 20, paddingVertical: 15, borderBottomWidth: 1, borderBottomColor: '#C4C4C4'}}
            >
                <Text
                style={{textAlign: 'center', fontSize: 18, color: '#000'}}
                >Tắt thông báo bài viết</Text>
            </TouchableOpacity>
            <TouchableOpacity
            style={{width: '100%', paddingHorizontal: 20, paddingVertical: 15, borderBottomWidth: 1, borderBottomColor: '#C4C4C4'}}
                onPress={() => {
                    if(props.onPressShowModal){
                        props.onPressShowModal();
                    }
                }}
            >
                <Text
                style={{textAlign: 'center', fontSize: 18, color: '#000'}}
                >Thoát</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
      <ModalComfirmComponent 
        showModal={modalVisible}
        onPressShowModal={() => setModalVisible(!modalVisible)}
        onDelete={onDelete}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: "flex-end",
    alignItems: "center",
    width: initialLayout.width
  },
  modalView: {
    width: '100%',
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

export default ModalOptionComponent;