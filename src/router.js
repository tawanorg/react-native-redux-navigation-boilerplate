import { StackNavigator, TabNavigator } from "react-navigation";
import { 
  ListContainer, 
  MapContainer 
} from './modules'; 

const MainScreenNavigator = TabNavigator(
{
  List: { screen: ListContainer },
  Map: { screen: MapContainer },
},
{
  tabBarOptions: {
    activeTintColor: '#fff',
    style: {
      backgroundColor: '#f11231',
      borderColor:'red'
    },
  },
});

MainScreenNavigator.navigationOptions = {
  title: 'TimApp',
};

const router = StackNavigator({
  Home: { screen: MainScreenNavigator }
});

export default router;