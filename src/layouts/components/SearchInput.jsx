import React, { useEffect, useState } from 'react'
import { Button, Modal, Select, Tooltip, Typography } from 'antd'
import { useSelector } from 'react-redux'
import { Box, Link } from '@mui/material'
import SearchIcon from '@mui/icons-material/Search'

const SearchInput = (props) => {
   const [data, setData] = useState([])
   const [value, setValue] = useState()
   const menu = useSelector((state) => state.menu)

   const searchMenu = (searchTxt, listMenu) => {
      if (searchTxt) {
         let listData = []
         listMenu.map((value) => {
            if (value?.title.toLowerCase().includes(searchTxt.toLowerCase()) && value?.url && value?.url !== '#') {
               listData.push({
                  value: value.url,
                  text: value?.title,
               })
            } else if (value?.children) {
               let listChildData = searchMenu(searchTxt, value?.children)
               if (listChildData) {
                  listData = [...listData, ...listChildData]
               }
            }
         })
         return listData
      } else {
         return []
      }
   }

   const handleSearch = (newValue) => {
      const data = searchMenu(newValue, menu)
      setData(data)
   }
   const handleChange = (newValue) => {
      setValue(newValue)
   }

   return (
      <>
         <Select
            showSearch
            value={value}
            size={'large'}
            placeholder={props.placeholder}
            style={props.style}
            defaultActiveFirstOption={false}
            suffixIcon={<SearchIcon style={{ color: 'grey' }} />}
            filterOption={false}
            onSearch={handleSearch}
            onChange={handleChange}
            dropdownRender={(menu) => (
               <Box>
                  <Typography>RESOURCES</Typography>
                  {menu}
               </Box>
            )}
            notFoundContent={null}
            options={(data || []).map((d) => ({
               value: d.value,
               label: (
                  <Typography
                     style={{
                        display: 'inline',
                        fontSize: 14,
                        fontWeight: 400,
                        width: '100%',
                     }}
                  >
                     {d.text}
                  </Typography>
               ),
            }))}
            onSelect={(value) => {
               window.location.href = value
            }}
         />
      </>
   )
}
export default SearchInput
