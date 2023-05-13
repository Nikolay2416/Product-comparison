import AppleIPhone12 from "../assets/Apple-iPhone-12.png";
import XiaomiMi11 from "../assets/Xiaomi-Mi-11-Lite-1.png";
import SamsungGalaxyA72 from "../assets/Samsung-Galaxy-A72.png";

import theCross from "../assets/the cross.svg";
import checkMark from "../assets/check mark.svg";

export interface Product {
  id: number;
  title: string;
  image: string;
  specifications: Specification;
}

interface Specification {
  manufacturer: string;
  yearOfRelease: string;
  screenDiagonal: string;
  countryOfOrigin: string;
  memoryCapacity: string;
  screenRefreshRate: string;
  nfc: string;
  esimSupport: string;
  supportWirelessCharging: string;
  cost: string;
}

const products = [
  {
    id: 1,
    title: 'Apple iPhone 12',
    image: AppleIPhone12,
    specifications: {
      manufacturer: 'Apple',
      yearOfRelease: '2020',
      screenDiagonal: '6,1',
      countryOfOrigin: 'Китай',
      memoryCapacity: '128 Гб',
      screenRefreshRate: '60 Гц',
      nfc: theCross,
      esimSupport: checkMark,
      supportWirelessCharging: checkMark,
      cost: '81 990  ₽'
    }
  },
  {
    id: 2,
    title:'Xiaomi Mi 11 Lite',
    image: XiaomiMi11,
    specifications: {
      manufacturer: 'Xiaomi',
      yearOfRelease: '2021',
      screenDiagonal: '6,55',
      countryOfOrigin: 'Китай',
      memoryCapacity: '128 Гб',
      screenRefreshRate: '90 Гц',
      nfc: checkMark,
      esimSupport: checkMark,
      supportWirelessCharging: theCross,
      cost: '27 490 ₽'
    }
  },
  {
    id: 3,
    title:'Samsung Galaxy A72',
    image: SamsungGalaxyA72,
    specifications: {
      manufacturer: 'Samsung',
      yearOfRelease: '2021',
      screenDiagonal: '6,7',
      countryOfOrigin: 'Вьетнам',
      memoryCapacity: '128 Гб',
      screenRefreshRate: '90 Гц',
      nfc: checkMark,
      esimSupport: theCross,
      supportWirelessCharging: checkMark,
      cost: '32 890 ₽'
    }
  },
  {
    id: 4,
    title:'Samsung Galaxy S21',
    image: SamsungGalaxyA72,
    specifications: {
      manufacturer: 'Samsung',
      yearOfRelease: '2021',
      screenDiagonal: '6,7',
      countryOfOrigin: 'Вьетнам',
      memoryCapacity: '128 Гб',
      screenRefreshRate: '90 Гц',
      nfc: checkMark,
      esimSupport: theCross,
      supportWirelessCharging: checkMark,
      cost: '32 890 ₽'
    }
  },
  {
    id: 5,
    title:'Apple iPhone Xr',
    image: AppleIPhone12,
    specifications: {
      manufacturer: 'Samsung',
      yearOfRelease: '2021',
      screenDiagonal: '6,7',
      countryOfOrigin: 'Вьетнам',
      memoryCapacity: '128 Гб',
      screenRefreshRate: '90 Гц',
      nfc: checkMark,
      esimSupport: theCross,
      supportWirelessCharging: checkMark,
      cost: '32 890 ₽'
    }
  },
  {
    id: 6,
    title:'Realme 8 Pro',
    image: XiaomiMi11,
    specifications: {
      manufacturer: 'Samsung',
      yearOfRelease: '2021',
      screenDiagonal: '6,7',
      countryOfOrigin: 'Вьетнам',
      memoryCapacity: '128 Гб',
      screenRefreshRate: '90 Гц',
      nfc: checkMark,
      esimSupport: theCross,
      supportWirelessCharging: checkMark,
      cost: '32 890 ₽'
    }
  },
  {
    id: 7,
    title:'Samsung Galaxy A72',
    image: SamsungGalaxyA72,
    specifications: {
      manufacturer: 'Samsung',
      yearOfRelease: '2021',
      screenDiagonal: '6,7',
      countryOfOrigin: 'Вьетнам',
      memoryCapacity: '128 Гб',
      screenRefreshRate: '90 Гц',
      nfc: checkMark,
      esimSupport: theCross,
      supportWirelessCharging: checkMark,
      cost: '32 890 ₽'
    }
  },
  {
    id: 8,
    title:'Samsung Galaxy A72',
    image: SamsungGalaxyA72,
    specifications: {
      manufacturer: 'Samsung',
      yearOfRelease: '2021',
      screenDiagonal: '6,7',
      countryOfOrigin: 'Вьетнам',
      memoryCapacity: '128 Гб',
      screenRefreshRate: '90 Гц',
      nfc: checkMark,
      esimSupport: theCross,
      supportWirelessCharging: checkMark,
      cost: '32 890 ₽'
    }
  },
]

export default products;