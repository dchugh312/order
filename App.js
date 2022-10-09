import React from 'react';
import{ StyleSheet,Text,View,FlatList, Button, Image, Alert}from 'react-native';

const arr = [
{
	id:"1",
  OrderID:"Order1",
	orderDate: "24-07-2022",
	orderTime:"20:04",
  productname1: "Apple",
  img1:require("./assets/images/img.jpg"),
  productname2: "Orange",
  img2:require("./assets/images/img2.jpg"),
 productname3: "Pineapple",
 img3:require("./assets/images/img3.jpg"),
  orderRating: 3,
  productNo:3,
  orderAmount: 1499
},

{id:"2",
	OrderID: "Order 2",
   orderDate: "25-08-22",
   orderTime:"15:04",
   productname1: "Apple",
   img1:require("./assets/images/img4.jpg"),
   productname2: "Bhindi",
  img2: require("./assets/images/img5.jpg"),
   productname: "Pineapple",
   img3: require("./assets/images/img6.jpg"),
   orderRating: 3,
   productNo:3,
   orderAmount: 199
},

{  id:"2",
	OrderID: "Order 3",
	orderDate: "30-09-2022",
	productname1: "Apple",
	orderTime:"17:20",
	img1: require("./assets/images/img7.jpg"),
	productname2: "Kerala",
	img2: require("./assets/images/img8.jpg"),
	 productname3: "Pineapple",
	img3: require("./assets/images/img9.jpg"),
	 orderRating: 3,
	 productNo:3,
	orderAmount: 499
  }


];

const Item = ({OrderID,img1,img2,img3,orderDate,orderTime,orderRating,productNo,orderAmount}) => {
  return( 
    <View style={styles.item}>
      <Text style={{fontWeight:'bold',fontSize:18}}>Order ID: {OrderID}</Text>
	  <View style={styles.or}>
		<Text style={{fontSize:12}}>{orderDate} |</Text>
	  <Text style={{fontSize:12}}> {orderTime}</Text>
	  </View>
	  <View style={styles.images}>
	  <Image source={img1} style={{width:50,height:50,backgroundColor:'red'}}/>
	  <Image source={img2} style={{width:50,height:50,backgroundColor:'pink'}}/>
	  <Image source={img3} style={{width:50,height:50,backgroundColor:'pink'}}/>
	  </View>
	  <View style={styles.row}>
      <View style={{marginTop:12}}>
	  <Text style={{color:'grey'}}>Order Rate</Text>
	  <Text style={{fontSize:12,fontWeight:'bold'}}>{orderRating} stars</Text>
	  </View>

	  <View style={{marginTop:12}}>
	  <Text style={{color:'grey'}}>Products</Text>
	  <Text style={{fontSize:12,fontWeight:'bold'}}>{productNo} products</Text>
	  </View>

	  <View style={{marginTop:12}}>
	  <Text style={{color:'grey'}}>Amount</Text>
	  <Text style={{fontSize:12,fontWeight:'bold'}}> ₹ {orderAmount}</Text>
	  </View>
       
     </View>
	
      
      
    </View>
  );
};

export default function App() {

  ShowCurrentDate=()=>{
 
    var date = new Date().getDate();
    var month = new Date().getMonth() + 1;
    var year = new Date().getFullYear();

    Alert.alert(date + '-' + month + '-' + year);

   }
	

  const renderItem = ({item})=>( 
    <Item OrderID={item.OrderID}
	orderDate={item.orderDate}
	img1={item.img1}
	img2={item.img2}
	img3={item.img3}
	orderTime={item.orderTime}
	orderRating={item.orderRating}
	productNo={item.productNo}
	orderAmount={item.orderAmount}
  
	
    />
   
  );

  


return (

<View style={styles.container}>
<Text style={styles.appContainer}>History</Text>




  <View style={styles.buttonContainer}>
      <View style={[{ padding:3, width: "30%", margin: 7, backgroundColor: "red" }]}>
          <Button
           onPress={this.ShowCurrentDate}
            title="All"
           color="#FF3D00"
          />
        </View> 
        <View style={[{ padding:3, width: "30%", margin: 7, backgroundColor: "red" }]}>
          <Button
           
            title="Last Week"
           color="#FF3D00"
          />
        </View> 
        <View style={[{ padding:3, width: "30%", margin: 7, backgroundColor: "red" }]}>
          <Button
           
            title="Last Month"
           color="#FF3D00"
          />
        </View> 
      </View>
	<FlatList
	data={arr}
	renderItem={renderItem}
	keyExtractor={item => item.id}
	/>
</View>
);
}

const styles = StyleSheet.create({
container: {
	marginTop:30,
	
  flex: 1,
  flexDirection:'column',
  padding:15,
},

appContainer:{

  color:'black',
  fontSize:25,
  fontWeight:'bold',
  padding:20


},

row:{
	flexDirection:'row',
	justifyContent:'space-between',
},

images:{
	flexDirection:'row',
    marginTop:5,
	justifyContent:'space-evenly'
	
},

or:{
flexDirection:'row',

},
item: {
	backgroundColor: 'white',
	padding: 20,
	marginVertical: 8,
	marginHorizontal: 16,
	borderWidth:0.74,
	

},
buttonContainer:{

  flexDirection:'row',
  
  justifyContent:'space-between',
},


});
