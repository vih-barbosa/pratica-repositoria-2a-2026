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

          /* CORES DO TEMA STRANGER THINGS */

          tabBarActiveTintColor: '#E50914',
          tabBarInactiveTintColor: '#806D72',

          tabBarStyle: {
            backgroundColor: '#080306',

            borderTopColor: '#4B1720',

            height: 65,

            paddingBottom: 8,

            paddingTop: 5,
          },

          tabBarLabelStyle: {
            fontSize: 11,

            fontWeight: '700',
          },
        }}
      >

        {/* PÁGINA 1 */}

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

        {/* PÁGINA 2 */}

        <Tabs.Screen
          name="pagina2"
          options={{
            title: 'Hawkins',

            tabBarIcon: ({ color, size }) => (
              <Ionicons
                name="flash-outline"
                size={size}
                color={color}
              />
            ),
          }}
        />

        {/* PÁGINA 3 */}

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

        {/* ESCONDE O INDEX */}

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
