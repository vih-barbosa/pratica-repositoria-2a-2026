import { GluestackUIProvider } from '@/components/ui/gluestack-ui-provider';
import '@/global.css';
import { Tabs } from 'expo-router';
import Ionicons from '@expo/vector-icons/Ionicons';

export default function App() {
  return (
    <GluestackUIProvider mode="dark">

      <Tabs
        initialRouteName="pagina1"
        screenOptions={{
          headerShown: false,
          tabBarActiveTintColor: '#E8C96A',
          tabBarInactiveTintColor: '#7890B8',

          tabBarStyle: {
            backgroundColor: '#06152F',
            borderTopColor: '#1C3761',
          },
        }}
      >

        <Tabs.Screen
          name="pagina1"
          options={{
            title: 'Início',
            tabBarIcon: ({ color, size }) => (
              <Ionicons
                name="planet-outline"
                size={size}
                color={color}
              />
            ),
          }}
        />

        <Tabs.Screen
          name="pagina2"
          options={{
            title: 'Favoritos',
            tabBarIcon: ({ color, size }) => (
              <Ionicons
                name="heart-outline"
                size={size}
                color={color}
              />
            ),
          }}
        />

        <Tabs.Screen
          name="pagina3"
          options={{
            title: 'Perfil',
            tabBarIcon: ({ color, size }) => (
              <Ionicons
                name="person-outline"
                size={size}
                color={color}
              />
            ),
          }}
        />

        <Tabs.Screen
          name="index"
          options={{
            href: null,
          }}
        />

      </Tabs>

    </GluestackUIProvider>
  );
}
<Tabs.Screen
  name="pagina3"
  options={{
    title: 'Perfil',
    tabBarIcon: ({ color, size }) => (
      <Ionicons
        name="person-outline"
        size={size}
        color={color}
      />
    ),
  }}
/>