import { ThongKeYTe } from '../icons/thong_ke_y_te'
import { DichVuYTe } from '../icons/dich_vu_y_te'
import { QuanLyBenh } from '../icons/quan_ly_benh'
import { Thuoc } from '../icons/thuoc'
import { VatTuYTe } from '../icons/vat_tu_y_te'
import { MoHinhBenhTat } from '../icons/mo_hinh_benh_tat'
import { NghienCuu } from '../icons/nghien_cuu'

export const OPTION_YEAR = () => {
   const year = new Date().getFullYear()
   let options = []
   for (let i = year - 20; i < year + 3; i++) {
      options.push({ value: i, label: i })
   }
   return options
}
export const OPTION_MONTH = () => {
   let options = []
   for (let i = 1; i < 13; i++) {
      options.push({ value: i, label: i })
   }
   return options
}
export const OPTION_QUARTER = () => {
   let options = []
   for (let i = 1; i < 5; i++) {
      options.push({ value: i, label: i })
   }
   return options
}

export const MENU = [
   {
      title: 'Trang chủ',
      key: 'dashboard',
      children: [],
   },
   {
      title: 'Bài viết',
      key: 'post',
      children: [],
   },
   {
      title: 'Danh mục bài viết',
      key: 'post-categories',
      children: [],
   },
]

export const MENU_ICON: {
   [key: string]: any
} = {
   dashboard: (
      <span>
         <ThongKeYTe />
      </span>
   ),
   post: (
      <span>
         <DichVuYTe />
      </span>
   ),
   'post-categories': (
      <span>
         <QuanLyBenh />
      </span>
   ),
}

export const chartType = {
   COLUMN: '1',
   LINE: '2',
   COMBO: '3',
   PIE: '4',
   BAR: '5',
   SCATTER: '6',
   STACKED_COLUMN: '7',
   STACKED_BAR: '8',
   PYRAMID: '9',
}

export const chartHeadType = {
   LINE: 'line',
   BAR: 'bars',
}
