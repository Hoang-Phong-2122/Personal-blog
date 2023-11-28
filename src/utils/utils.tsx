export const getMenuKeyByUrl = (array: any, routerUrl: any): any => {
   for (let i = 0; i < array.length; i++) {
      let parentMenu = array[i]
      if (parentMenu?.url == routerUrl) {
         return parentMenu.key
      } else if (parentMenu.children.length > 0) {
         let key = getMenuKeyByUrl(parentMenu.children, routerUrl)
         if (key) {
            return key
         }
      }
   }
   return null
}

export const getListMenuKeyByUrl = (array: any, routerUrl: any): any => {
   for (let i = 0; i < array.length; i++) {
      let parentMenu = array[i]
      if (parentMenu?.url == routerUrl) {
         return [{ ...parentMenu }]
      } else if (parentMenu.children.length > 0) {
         let arrayTitle = getListMenuKeyByUrl(parentMenu.children, routerUrl)
         if (arrayTitle) {
            return [{ ...parentMenu }, ...arrayTitle]
         }
      }
   }
   return null
}

export const resortArray = (arr: any, oldIndex: any, newIndex: any) => {
   let newArr = [...arr]
   const elm = arr[oldIndex]
   newArr.splice(oldIndex, 1)
   newArr.splice(newIndex, 0, elm)
   return newArr
}

export const removeAccents = (str: string) => {
   if (!str) return ''
   const AccentsMap = [
      'aàảãáạăằẳẵắặâầẩẫấậ',
      'AÀẢÃÁẠĂẰẲẴẮẶÂẦẨẪẤẬ',
      'dđ',
      'DĐ',
      'eèẻẽéẹêềểễếệ',
      'EÈẺẼÉẸÊỀỂỄẾỆ',
      'iìỉĩíị',
      'IÌỈĨÍỊ',
      'oòỏõóọôồổỗốộơờởỡớợ',
      'OÒỎÕÓỌÔỒỔỖỐỘƠỜỞỠỚỢ',
      'uùủũúụưừửữứự',
      'UÙỦŨÚỤƯỪỬỮỨỰ',
      'yỳỷỹýỵ',
      'YỲỶỸÝỴ',
   ]
   for (let i = 0; i < AccentsMap.length; i++) {
      let re = new RegExp('[' + AccentsMap[i].substr(1) + ']', 'g')
      let char = AccentsMap[i][0]
      str = str.replace(re, char)
   }
   return str
}

export const formatNumber = (number: any) => {
   let value = parseInt(number)
   return number ? value.toLocaleString('it-IT', { currency: 'VND' }) : 0
}

export const getTextWidth = (text: any, font = '14px -apple-system') => {
   const canvas = document.createElement('canvas')
   const context = canvas.getContext('2d')
   // @ts-ignore
   context.font = font
   const metrics = context?.measureText(text)
   // @ts-ignore
   return Math.round(metrics.width + 80)
}

export const getTableWidth = (tableHeadArrays: any) => {
   let cloneArrays = JSON.parse(JSON.stringify(tableHeadArrays))
   console.log('cloneArrays', cloneArrays)
   const tableWidth = cloneArrays
      .map((column: any) => column.width)
      .reduce((a: any, b: any) => {
         return a + b
      })
   return tableWidth || 0
}
