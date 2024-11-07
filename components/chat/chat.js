import React, { useState } from 'react';
import { Text, View, StyleSheet, Image, FlatList } from 'react-native';

const DATA = [
  {
    id: '1',
    img:  require('../../assets/ca_nau_lau.png'),
    title: 'Ca nấu lẩu, nấu mì mini...',
    shopName: 'Devang'
  },
  {
    id: '2',
    img:  require('../../assets/ga_bo_toi.png'),
    title: '1KG KHÔ GÀ BƠ TỎI...',
    shopName: 'LTD Food'
  },
  {
    id: '3',
    img:  require('../../assets/xa_can_cau.png'),
    title: 'Xe cần cẩu đa năng',
    shopName: 'Thế giới đồ chơi'
  },
  {
    id: '4',
    img:  require('../../assets/do_choi_dang_mo_hinh.png'),
    title: 'Đồ chơi dạng mô hình',
    shopName: 'Thế giới đồ chơi'
  },
  {
    id: '5',
    img:  require('../../assets/lanh_dao_gian_don.png'),
    title: 'Lãnh đạo giản đơn',
    shopName: 'Minh Long Book'
  },
  {
    id: '6',
    img:  require('../../assets/hieu_long_con_tre.png'),
    title: 'Hiếu lòng con trẻ',
    shopName: 'Minh Long Book'

  },
  {
    id: '6',
    img:  require('../../assets/trump.png'),
    title: 'Donal Trump thiên tài lãnh đạo',
    shopName: 'Minh Long Book'

  },
];

const Item = ({item}) => {
  const [isHovered, setIsHovered] = useState(false);
  return(
  <View 
      onPressIn={() => setIsHovered(true)} // Khi nhấn vào
      onPressOut={() => setIsHovered(false)} // Khi nhả ra
      style={[styles.item, isHovered && styles.hoveredItem]} 
  >
    <Image source={item.img} style={styles.imgSP}/>
    <View style={styles.detailSP}>
      <Text style={styles.nameSP}>{item.title}</Text>
      <View style={styles.shopSP}>
        <Text style={styles.shopText}>Shop</Text>
        <Text style={styles.shopName}>{item.shopName}</Text>
      </View>
    </View> 
    <View style={styles.btnChat}>
      <Text style={styles.textBtnChat}>Chat</Text>
    </View>
  </View>
  );
};

export default function App() {
  
  const renderItem = ({item}) => {
    
    return (
      <Item item={item}/>
    );
  };

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Bạn có thắc mắc với sản phẩm vừa xem đừng ngại chát với shop!</Text>
      <View style={styles.list}>
      
        <FlatList
          data={DATA}
          renderItem={renderItem}
          keyExtractor={item => item.id}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#ecf0f1',
  },
  header: {
    height: '10%',
    width: '80%',
    fontSize: 12,
    fontWeight: 400,
    alignContent: 'center',
    marginLeft: 40
  },
  list:{
    height: '90%',
  },
  item: {
    backgroundColor: '#ecf0f1',
    height: 100,
    flexDirection: 'row',
    alignItems: 'center',
    borderTopWidth: 1,
    borderTopColor: '#C4C4C4', 
    borderBottomWidth: 1,
    borderBottomColor: '#C4C4C4', 
    marginBottom: 10,
    justifyContent: 'space-between'
  },
  imgSP: {
    width: 74,
    height: 74,

  },
  detailSP:{
    height: 74,
    justifyContent: 'space-between',
    marginRight: 10
  },
  nameSP:{
    fontSize: 15,
    fontWeight: 400,
  },
  shopSP:{
    flexDirection: 'row',
    marginBottom: 30
    
  },
  shopText: {
    color: '#7D5B5B'
  },
  shopName:{
    color: '#FF0E0E',
    marginLeft: 10
  },
  btnChat:{
    width: 88,
    height: 38,
    backgroundColor: '#F31111',
    alignItems: 'center',
    justifyContent: 'center'
  },
  textBtnChat:{
    color: '#fff',
    fontSize: 18,
    fontWeight: 700
  }
});
