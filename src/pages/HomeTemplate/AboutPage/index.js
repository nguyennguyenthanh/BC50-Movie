import React from 'react'
import Nhanvien from './nhanvien';
import Sanpham from './sanpham';
import Withcard from './withcard';

const WrapperCard = Withcard(Sanpham)

export default function AboutPage() {
  return (
    <WrapperCard />
  )
}

