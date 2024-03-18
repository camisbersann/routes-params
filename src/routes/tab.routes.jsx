import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Feather } from "@expo/vector-icons";

import Home from "../screens/Home";
import Profile from "../screens/Profile";
import Category from "../screens/Category";
import { user } from "../data/Profile";
import Details from "../screens/Details";

const Tab = createBottomTabNavigator();

const TabRoutes = () => {
  return (
    <Tab.Navigator screenOptions={{ headerShown: false }}>
      <Tab.Screen name="Home" component={Home} 
        options={{
          tabBarIcon: ({ focused }) => (
            <Feather
              name="home"
              size={24}
              color={focused ? "#131313" : "#d6d6d6"}
            />
          ),
          tabBarLabel: "Home",
          tabBarActiveTintColor: "#131313",
          tabBarInactiveTintColor: "#777",
        }}  />

       <Tab.Screen name="Profile" component={Profile} initialParams={{ user }}
        options={{
          tabBarIcon: ({ focused }) => (
            <Feather
              name="user"
              size={24}
              color={focused ? "#131313" : "#d6d6d6"}
            />
          ),
          tabBarLabel: "Perfil",
          tabBarActiveTintColor: "#131313",
          tabBarInactiveTintColor: "#777",
        }} /> 
        
      <Tab.Screen name="Category" component={Category} 
       options={{
        tabBarIcon: ({ focused }) => (
          <Feather
            name="list"
            size={24}
            color={focused ? "#131313" : "#d6d6d6"}
          />
        ),
        tabBarLabel: "Categoria",
        tabBarActiveTintColor: "#131313",
        tabBarInactiveTintColor: "#777",
      }}/>
    </Tab.Navigator>
  );
};

export default TabRoutes;