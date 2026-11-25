
import { GluestackUIProvider } from '@/components/ui/gluestack-ui-provider';
import '@/global.css';

import { Tabs } from 'expo-router';
import Ionicons from '@expo/vector-icons/Ionicons';

export default function App() {
  return (
    <GluestackUIProvider mode="light">
      <Tabs
        initialRouteName="pagina1"
        screenOptions={{
          headerShown: false,

          tabBarActiveTintColor: '#3366CC',
          tabBarInactiveTintColor: '#92979C',

          tabBarStyle: {
            backgroundColor: '#FFFFFF',
            borderTopColor: '#EAECF0',
            height: 67,
            paddingBottom: 9,
            paddingTop: 7,
            elevation: 8,
          },

          tabBarLabelStyle: {
            fontSize: 10,
            fontWeight: '600',
          },
        }}
      >

        <Tabs.Screen
          name="pagina1"
          options={{
            title: 'Início',
            tabBarIcon: ({ color, size }) => (
              <Ionicons
                name="home-outline"
                size={size}
                color={color}
              />
            ),
          }}
        />

        <Tabs.Screen
          name="pagina2"
          options={{
            title: 'Explorar',
            tabBarIcon: ({ color, size }) => (
              <Ionicons
                name="compass-outline"
                size={size}
                color={color}
              />
            ),
          }}
        />

        <Tabs.Screen
          name="pagina3"
          options={{
            title: 'Sobre',
            tabBarIcon: ({ color, size }) => (
              <Ionicons
                name="information-circle-outline"
                size={size}
                color={color}
              />
            ),
          }}
        />

        <Tabs.Screen
          name="pagina4"
          options={{
            title: 'Pesquisar',
            tabBarIcon: ({ color, size }) => (
              <Ionicons
                name="search-outline"
                size={size}
                color={color}
              />
            ),
          }}
        />

        <Tabs.Screen
          name="pagina5"
          options={{
            title: 'Artigo',
            tabBarIcon: ({ color, size }) => (
              <Ionicons
                name="document-text-outline"
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
