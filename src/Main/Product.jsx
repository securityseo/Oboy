import { Tab, TabList, TabPanel, TabPanels, Tabs } from "@chakra-ui/react";
import LeftLine from "../Images/left.png";
import RightLine from "../Images/right.png";
import News from './News'


const Product = () => {



  return (
    <div>
      <div className="wrapper">
        <div className="katalog">
          <img src={LeftLine} alt="" />
          <h2>Каталог</h2>
          <img src={RightLine} alt="" />
        </div>
        <div className="container">
          <Tabs variant="enclosed" width={'100%'} colorScheme='white'>
            <TabList display={'flex'}  alignItems={'center'} justifyContent={'space-between'} >
              <Tab width={'100%'} color={'#BC955D'}>Обои из вспененного винила</Tab>
              <Tab width={'100%'} color={'#BC955D'} >Обои горячего тиснения</Tab>
              <Tab width={'100%'}  color={'#BC955D'}>Обои под покраску</Tab>
            </TabList>
            <TabPanels>
              <TabPanel>
<div className="product-bag">
<div className="product">
<div className="product-title">
    <h2>Арт. «Марокканские» 1031</h2>
</div>
</div>
<div className="product">
<div className="product-title">
    <h2>Арт. «Марокканские» 1031</h2>
</div>
</div>
<div className="product">
<div className="product-title">
    <h2>Арт. «Марокканские» 1031</h2>
</div>
</div>
</div>

              </TabPanel>
              <TabPanel>
               

<div className="product-bag">
<div className="product">
<div className="product-title">
    <h2>Арт. «Марокканские» 1031</h2>
</div>
</div>
</div>

              </TabPanel>
              <TabPanel>

<div className="product-bag">
<div className="product">
<div className="product-title">
    <h2>Арт. «Марокканские» 1031</h2>
</div>
</div>
<div className="product">
<div className="product-title">
    <h2>Арт. «Марокканские» 1031</h2>
</div>
</div>

</div>

              </TabPanel>
            </TabPanels>
          </Tabs>
        </div>
        <div className="katalog">
          <img src={LeftLine} alt="" />
          <h2>Новости</h2>
          <img src={RightLine} alt="" />
        </div>
        <div className="container">
          <News/>
        </div>
        <div className="katalog">
          <img src={LeftLine} alt="" />
          <h2>Обратная связь</h2>
          <img src={RightLine} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Product;

