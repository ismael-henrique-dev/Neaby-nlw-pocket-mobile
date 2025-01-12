import { Categories, CategoriesProps } from '@/components/categories'
import { PlaceProps } from '@/components/place'
import { Places } from '@/components/places'
import { api } from '@/services/api'
import { fontFamily, colors } from '@/styles/theme'
import { useEffect, useState } from 'react'
import { Alert, Text, View } from 'react-native'
import MapView, { Marker, Callout } from 'react-native-maps'

import locationIcon from '@/assets/location.png'
import pinIcon from '@/assets/pin.png'
import { router } from 'expo-router'

type MarketsProps = PlaceProps & {
  latitude: number
  longitude: number
}

const currentLocation = {
  latitude: -23.561187293883442,
  longitude: -46.656451388116494,
}

export default function Home() {
  const [categories, setCategories] = useState<CategoriesProps>([])
  const [category, setCagory] = useState('')
  const [markets, setMarkets] = useState<MarketsProps[]>([])

  async function fetchCategories() {
    try {
      const { data } = await api.get('/categories')
      setCategories(data)
      setCagory(data[0].id)
    } catch (error) {
      console.log(error)
      Alert.alert('Categorias', 'Não foi possível carregar as categorias.')
    }
  }

  // test

  async function fetchMarkets() {
    try {
      if (!category) return

      const { data } = await api.get('/markets/category/' + category)
      setMarkets(data)
    } catch (error) {
      console.log(error)
      Alert.alert('Categorias', 'Não foi possível carregar as .')
    }
  }

  useEffect(() => {
    fetchCategories()
  }, [])

  useEffect(() => {
    fetchMarkets()
  }, [category])

  return (
    <View style={{ flex: 1, backgroundColor: '#cecece' }}>
      <Categories data={categories} onSelect={setCagory} selected={category} />

      <MapView
        style={{ flex: 1 }}
        initialRegion={{
          latitude: currentLocation.latitude,
          longitude: currentLocation.longitude,
          latitudeDelta: 0.01,
          longitudeDelta: 0.01,
        }}
      >
        <Marker
          identifier='current'
          coordinate={{
            latitude: currentLocation.latitude,
            longitude: currentLocation.longitude,
          }}
          image={locationIcon}
        />
      </MapView>

      {/* {markets.map((item) => (
        <Marker
          key={item.id}
          identifier={item.id}
          coordinate={{
            latitude: item.latitude,
            longitude: item.longitude,
          }}
          image={pinIcon}
        >
          <Callout onPress={() => router.navigate(`/market/${item.id}`)}>
            <View>
              <Text
                style={{
                  fontSize: 14,
                  fontFamily: fontFamily.medium,
                  color: colors.gray[600],
                }}
              >
                {item.name}
              </Text>
              <Text
                style={{
                  fontSize: 12,
                  fontFamily: fontFamily.regular,
                  color: colors.gray[600],
                }}
              >
                {item.address}
              </Text>
            </View>
          </Callout>
        </Marker>
      ))} */}

      <Places data={markets} />
    </View>
  )
}
