import React from 'react';
import { StyleSheet, Text, View ,TouchableOpacity,Platform, Alert, Image} from 'react-native';
import { Camera } from 'expo-camera';
import * as Permissions from 'expo-permissions';
import { FontAwesome, Ionicons,MaterialCommunityIcons } from '@expo/vector-icons';
import * as ImagePicker from 'expo-image-picker';
import Device from '../../modules/Device'
import { Images } from '../../../assets/Images';
import uploadFile from '../../fetchApi/home/uploadFile'
import AsyncStorage from '@react-native-async-storage/async-storage';

const initialLayout = {
    height: Device.screenSize().height,
    width: Device.screenSize().width,
};

export default class CameraRollComponent extends React.Component {
  state = {
    hasPermission: null,
    cameraType: Camera.Constants.Type.back,
    data: null
  }

  async componentDidMount() {
    console.warn("camera didmount");
    this.getPermissionAsync()
  }

  getPermissionAsync = async () => {
    // Camera roll Permission 
    const permissions = 'Permissions.CAMERA_ROLL';
    

    // Camera Permission
    const { granted,status } = await Permissions.askAsync(Permissions.CAMERA_ROLL);
    console.warn(granted, status);
    this.setState({ hasPermission: status === 'granted' });
  }

  handleCameraType=()=>{
    const { cameraType } = this.state

    this.setState({cameraType:
      cameraType === Camera.Constants.Type.back
      ? Camera.Constants.Type.front
      : Camera.Constants.Type.back
    })
  }
  convertToFormData = (result) => {
      // ImagePicker saves the taken photo to disk and returns a local URI to it
    let localUri = result.uri;
    let filename = localUri.split('/').pop();

    // Infer the type of the image
    let match = /\.(\w+)$/.exec(filename);
    let type = match ? `image/${match[1]}` : `image`;

    // Upload the image using the fetch and FormData APIs
    let formData = new FormData();
    // Assume "photo" is the name of the form field the server expects
    formData.append('file', { uri: localUri, name: filename, type });
      return formData;
  }
  takePicture = async () => {
    if (this.camera) {
      let photo = await this.camera.takePictureAsync({
          quality: 0.5,
          allowsEditing: true
      });
        let data = this.convertToFormData(photo);
        this.setState({data: data}, () =>{
            this.props.navigation.goBack();
            this.props.route.params.onPressAddImage(data);
        })
    }
  }

  pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      quality:  0.5
    });
    let data = this.convertToFormData(result);
    this.setState({data: data}, () =>{
        this.props.navigation.goBack();
        this.props.route.params.onPressAddImage(data);
    })
  }
  

  render(){
    const { hasPermission } = this.state;
    if (hasPermission === null) {
      return <View />;
    } else if (hasPermission === false) {
      return <Text>No access to camera</Text>;
    } else {
      return (
          <View style={{ flex: 1}}>
            <Camera style={{flex: 1}} type={this.state.cameraType}  ref={ref => {this.camera = ref}}>
              <View style={{flex: 1,flexDirection:"row",justifyContent:"space-between",margin:30}}>
                <TouchableOpacity
                  style={{
                    alignSelf: 'flex-end',
                    alignItems: 'center',
                    backgroundColor: 'transparent'                 
                  }}
                  onPress={()=>this.pickImage()}>
                  <Image
                    source={Images.gallery}
                      style={{ color: "#fff", width: 40, height: 40, resizeMode: 'cover', tintColor: '#fff'}}
                  />
                </TouchableOpacity>
                <TouchableOpacity
                  style={{
                    alignSelf: 'flex-end',
                    alignItems: 'center',
                    backgroundColor: 'transparent',
                  }}
                  onPress={()=>this.takePicture()}
                  >
                  <FontAwesome
                      name="camera"
                      style={{ color: "#fff", fontSize: 40}}
                  />
                </TouchableOpacity>
                <TouchableOpacity
                  style={{
                    alignSelf: 'flex-end',
                    alignItems: 'center',
                    backgroundColor: 'transparent',
                  }}
                  onPress={()=>this.handleCameraType()}
                  >
                  <MaterialCommunityIcons
                      name="camera-switch"
                      style={{ color: "#fff", fontSize: 40}}
                  />
                </TouchableOpacity>
              </View>
            </Camera>
        </View>
      );
    }
  }
  
}