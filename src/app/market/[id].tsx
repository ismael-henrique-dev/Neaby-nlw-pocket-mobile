import { Button } from '@/components/button'
import { Loading } from '@/components/loading'
import { Coupon } from '@/components/market/coupon'
import { Cover } from '@/components/market/cover'
import { Datails, PropsDatails } from '@/components/market/datails'
import { api } from '@/services/api'
import { CameraView, useCameraPermissions } from 'expo-camera'
import { Redirect, useLocalSearchParams } from 'expo-router'
import { useEffect, useRef, useState } from 'react'
import { Alert, Modal, View } from 'react-native'

type DataProps = PropsDatails & {
  cover: string
}

export default function Market() {
  const [data, setData] = useState<DataProps>()
  const [coupon, setCoupon] = useState<string | null>(null)
  const [isLoading, setIsLoading] = useState(true)
  const [isVisibleCameraModal, setIsVisibleCameraModal] = useState(false)
  const [couponIsFetching, setCouponIsFetching] = useState(false)

  const [_, requestPermission] = useCameraPermissions()
  const qrLock = useRef(false)
  const params = useLocalSearchParams<{ id: string }>()

  async function fetchMarket() {
    try {
      const { data } = await api.get(`/markets/${params.id}`)
      setData(data)
      setIsLoading(false)
      console.log(data)
    } catch (error) {
      console.log(error)
      Alert.alert('Erro', 'Erro ao carregar os dados')
    }
  }

  async function handleOpenCamera() {
    try {
      const { granted } = await requestPermission()

      if (!granted) {
        return Alert.alert('Câmera', 'Você precisa habilitar o uso da câmera')
      }

      qrLock.current = false
      setIsVisibleCameraModal(true)
    } catch (error) {
      console.log(error)
      Alert.alert('Câmera', 'Não foi possível utilizar a câmera')
    }
  }

  async function getCoupon(id: string) {
    try {
      const { data } = await api.patch('/coupons/' + id)
      Alert.alert('Cupom', data.coupon)
      setCoupon(data.coupon)
      setCouponIsFetching(true)
    } catch (error) {
      console.log(error)
      Alert.alert('Erro', 'Não foi possível utilizar o cupom')
    } finally {
      setCouponIsFetching(false)
    }
  }

  function handleUseCoupon(marketId: string) {
    setIsVisibleCameraModal(false)

    Alert.alert(
      'Cupom',
      'Não é possível reutilizar um cupom já resgatado. Deseja realmente resgatar o cupom?',
      [
        { style: 'cancel', text: 'Não' },
        {
          text: 'Sim',
          onPress: () => getCoupon(marketId),
        },
      ]
    )
  }

  useEffect(() => {
    fetchMarket()
  }, [params.id, coupon])

  if (isLoading) {
    return <Loading />
  }

  if (!data) {
    return <Redirect href='/home' />
  }

  return (
    <View style={{ flex: 1 }}>
      <Cover uri={data.cover} />
      <Datails data={data} />
      {coupon && <Coupon code={coupon} />}

      <View style={{ padding: 32 }}>
        <Button onPress={handleOpenCamera}>
          <Button.Title>Ler QR Code</Button.Title>
        </Button>
      </View>

      <Modal style={{ flex: 1 }} visible={isVisibleCameraModal}>
        <CameraView
          style={{ flex: 1 }}
          facing='back'
          onBarcodeScanned={({ data }) => {
            if (data && !qrLock.current) {
              qrLock.current = true
              setTimeout(() => handleUseCoupon(data), 500)
            }
          }}
        />

        <View style={{ position: 'absolute', bottom: 32, left: 32, right: 32 }}>
          <Button
            onPress={() => setIsVisibleCameraModal(false)}
            isLoading={couponIsFetching}
          >
            <Button.Title>Voltar</Button.Title>
          </Button>
        </View>
      </Modal>
    </View>
  )
}
