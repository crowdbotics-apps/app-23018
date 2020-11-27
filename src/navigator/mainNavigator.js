import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';

import SplashScreen from "../features/SplashScreen";
import SideMenu from './sideMenu';
//@BlueprintImportInsertion
import UserProfile179342Navigator from '../features/UserProfile179342/navigator';
import Tutorial179341Navigator from '../features/Tutorial179341/navigator';
import NotificationList179313Navigator from '../features/NotificationList179313/navigator';
import Settings179312Navigator from '../features/Settings179312/navigator';
import Settings179304Navigator from '../features/Settings179304/navigator';
import UserProfile179302Navigator from '../features/UserProfile179302/navigator';

/**
 * new navigators can be imported here
 */

const AppNavigator = {

    //@BlueprintNavigationInsertion
UserProfile179342: { screen: UserProfile179342Navigator },
Tutorial179341: { screen: Tutorial179341Navigator },
NotificationList179313: { screen: NotificationList179313Navigator },
Settings179312: { screen: Settings179312Navigator },
Settings179304: { screen: Settings179304Navigator },
UserProfile179302: { screen: UserProfile179302Navigator },

    /** new navigators can be added here */
    SplashScreen: {
      screen: SplashScreen
    }
};

const DrawerAppNavigator = createDrawerNavigator(
  {
    ...AppNavigator,
  },
  {
    contentComponent: SideMenu
  },
);

const AppContainer = createAppContainer(DrawerAppNavigator);

export default AppContainer;
