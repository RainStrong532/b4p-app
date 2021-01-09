import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import AsyncStorage from '@react-native-async-storage/async-storage'
import * as screens from './src/screens'
import store from './store'
import { Provider } from 'react-redux'
import {AuthContext} from './src/utils/AuthContext'
import login from './src/fetchApi/auth/login'
import logout from './src/fetchApi/auth/logout'
import * as Stacks from './src/stackNavigator'
import HeaderView from './src/components/HeaderView'
import {View} from 'react-native'
import { Images } from './assets/Images';
import * as types from './src/constants'


const Stack = createStackNavigator();

export default function App(props) {
  const [state, dispatch] = React.useReducer(
    (prevState, action) => {
      switch (action.type) {
        case 'RESTORE_TOKEN':
          return {
            ...prevState,
            userToken: action.token,
            isLoading: false,
          };
        case 'SIGN_IN':
          if(action.token){
          AsyncStorage.setItem('userToken', action.token);
          }
          return {
            ...prevState,
            isSignout: false,
            userToken: action.token,
          };
        case 'SIGN_OUT':
          AsyncStorage.removeItem('userToken');
          return {
            ...prevState,
            isSignout: true,
            userToken: null,
          };
      }
    },
    {
      isLoading: true,
      isSignout: false,
      userToken: null,
    }
  );

  React.useEffect(() => {
    // Fetch the token from storage then navigate to our appropriate place
    const bootstrapAsync = async () => {
      let userToken;

      try {
        userToken = await AsyncStorage.getItem('userToken');
      } catch (e) {
        // Restoring token failed
      }

      // After restoring token, we may need to validate it in production apps

      // This will switch to the App screen or Auth screen and this loading
      // screen will be unmounted and thrown away.
      dispatch({ type: 'RESTORE_TOKEN', token: userToken });
    };

    bootstrapAsync();
  }, []);

  const authContext = React.useMemo(
    () => ({
      signIn: async data => {
        try {
          const res = await login(data)
          if (res.status != null) {
          } else {
              dispatch({
                type: 'SIGN_IN',
                token: res.accessToken
              })
          }
      } catch (error) {
      }
      },
      signOut: async() =>{
        let userToken = await AsyncStorage.getItem('userToken');
        console.warn(userToken);
        if(!userToken) userToken = state.userToken
        if(userToken){
        try {
          const res = await logout(userToken)
          if (res.status != null) {
             console.warn("Logout failure", res);
          } else {
              console.warn("Logout succsess");
              dispatch({ type: 'SIGN_OUT'})
          }
      } catch (error) {
         console.warn("Logout failure", error);
      }
        }else{
          console.warn("Token null");
        }
      },
      signUp: async data => {
        // In a production app, we need to send user data to server and get a token
        // We will also need to handle errors if sign up failed
        // After getting token, we need to persist the token using `AsyncStorage`
        // In the example, we'll use a dummy token

        dispatch({ type: 'SIGN_IN', token: 'dummy-auth-token' });
      },
    }),
    []
  );

  return (
    <Provider store={store}>
    <AuthContext.Provider value={authContext}>
      <NavigationContainer>
        <Stack.Navigator>
          {state.isLoading ? (
            // We haven't finished checking for the token yet
            <Stack.Screen
            options={{headerShown: false}}
            name="splash" component={screens.LoadingScreen} />
          ) : state.userToken == null ? (
            // No token found, user isn't signed in
            <Stack.Screen
              name="auth"
              component={Stacks.StackAuth}
              options={{
                headerShown: false,
            // When logging out, a pop animation feels intuitive
                animationTypeForReplace: state.isSignout ? 'pop' : 'push',
              }}
            />
          ) : (
            // User is signed in
            <Stack.Screen
            options={{ headerTitle: () =>
               <HeaderView
                  leftButton ={Images.logo_mini}
                  leftStyle={{width: 54, height: 34}}
                  rightButton2  = {Images.search_circle}
                  rightStyle2 = {{width: 29, height: 29}}
                  rightButton = {Images.inbox_circle}
                  rightStyle = {{width: 29, height: 29, marginLeft: 18}}
                  {...props}
                /> ,
              headerStyle: {
                backgroundColor: "#fff"
              }
            }}
            name="home" component={Stacks.HomeStack}
            />
          )}
        </Stack.Navigator>
      </NavigationContainer>
    </AuthContext.Provider>
    </Provider>
  );
}