import React, { useState } from 'react'
import { Tab, TabList, TabPanel, TabPanels, Tabs } from "@chakra-ui/react";
import LeftLine from "../Images/left.png";
import RightLine from "../Images/right.png";
import '../Styles/Main.css'
import data from "../db/db";


const ProductQ = () => {
    const [imgSrc,setImgSrc] = useState('')

    function toggleModal(b,id){
      const e = document.getElementById('modal')
      const w = document.getElementById('m_window')
    
      if(b){
        e.style.transform = "scale(1)"
        w.style.transform = "scaleY(1) translate(-50%,-50%)"
        const getProduct = data.filter((data) => data.id === id)
        setImgSrc(getProduct[0].img)
      }else{
        e.style.transform = "scale(0)"
  
      }
  
    }
    function ProductSortRender({ brand }) {
        const sort = data.filter((data) => data.brand === brand);
        return (
          <>
            {sort?.map((v) => {
              return (
                <button className="product" key={v.id} onClick={()=>toggleModal(true,v.id)}>
                  <img id="modal_img" src={v.img} alt="" />
                  <div className="product-title">
                    <h2>{v.title}</h2>
                  </div>
                </button>
              );
            })}
          </>
        );
      }
  return (
    <div className='full-bg-catalog'>
      <div className="katalog">
          <div className="left-line"></div>
          <img src={LeftLine} alt="" />
          <h2>Каталог</h2>
          <img src={RightLine} alt="" />
          <div className="left-line"></div>
        </div>
        <div className="container">
          <Tabs variant="enclosed" width={"100%"} colorScheme="white">
            <TabList
              display={"flex"}
              alignItems={"center"}
              justifyContent={"space-between"}
              className="tab-list"
            >
              <Tab width={"100%"} color={"#BC955D"}>
                Обои из вспененного винила
              </Tab>
              <Tab width={"100%"} color={"#BC955D"}>
                Обои горячего тиснения
              </Tab>
              <Tab width={"100%"} color={"#BC955D"}>
                Обои под покраску
              </Tab>
            </TabList>
            <TabPanels>
              <TabPanel>
                <div className="product-bag">
                  <ProductSortRender brand="vinil" />
                </div>
              </TabPanel>
              <TabPanel>
                <div className="product-bag">
                  <ProductSortRender brand="tisney" />
                </div>
              </TabPanel>
              <TabPanel>
                <div className="product-bag">
                  <ProductSortRender brand="poqraska" />
                </div>
              </TabPanel>
            </TabPanels>
          </Tabs>
        </div>
    </div>
  )
}

export default ProductQ
