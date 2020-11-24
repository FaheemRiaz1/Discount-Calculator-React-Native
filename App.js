
import React, { useState } from 'react';
import { Text, TouchableOpacity,View,ScrollView, StyleSheet,Button,TextInput} from 'react-native';


// You can import from local files


export default function App() {
  
   const [getState,setState] = useState('') ;
   const [getText,setText]=useState('')
   const [getList,setList]=useState([]);
   const [getNum,setNum]=useState(0)

   const onPressAdd=(i)=>{
     if(getText!=""){
       setNum(getNum+1)
        i=i+1
        setList([
          ...getList,
          {key: Math.random().toString(),data: getText, no:getNum}
          ])
        setText('')
        }
   }
   const deleteitem=(itemkey)=>{
    //  var list=getList.filter(item=>item.key!=itemkey);
    //  setList(list)
     setList(list => getList.filter(item=>item.key!=itemkey));
   }

  return (
    <View style={styles.container}>
      <TouchableOpacity ><Text style={styles.title}>To Do App</Text></TouchableOpacity>
      <View style={{borderWidth:2,padding:20,borderRadius:12}}>
      <View style={styles.outview}>  
          <TextInput
              placeholder="Enter Item"
              style={styles.textinput}
              onChangeText={text => setText(text)}
              value={getText}
            />
            <TouchableOpacity  onPress={onPressAdd}>
                <Text style={styles.texstyles}>Add</Text>           
            </TouchableOpacity>
    
      </View>
             
        <ScrollView style={styles.scrollview}>
           {getList.map((item) => 
           <TouchableOpacity key={item.key}>
           <View style={styles.ScrollViewItem} >
              <Text style={styles.scrollviewtext}>{item.no}: {item.data}</Text>
              <TouchableOpacity  onPress={()=>deleteitem(item.key)}>
                <View style={styles.smallview}> 
                     <Text style={styles.smalltext}>X</Text>
                </View>
               </TouchableOpacity>
            </View>
               </TouchableOpacity>
                )}
        </ScrollView>
        </View>
    </View>
  );
}

const styles = StyleSheet.create({
  textinput:{
    borderColor:'blue',
    width:'100%',
    fontSize:16,
    padding:10,
    borderBottomWidth:2,
  },
 outview:{
    justifyContent:"space-between",
    flexDirection:"row",
    width:"90%",
    alignItems:"center",
    paddingLeft:40,
    
  },
  title:{
    fontSize:44,
    color:'`#008b8b',
    fontWeight:"bold",
    backgroundColor:"darkgray",
    borderRadius:15,
    padding:10,
    paddingLeft:40,
    paddingBottom:20,
    paddingRight:30, 
    justifyContent:"center",
    alignItems:"center",
  },
  texstyles:{
    backgroundColor:"green",
    borderRadius:15,
    padding:10,
    justifyContent:"center",
    alignItems:"center",
    color:"white",
    fontWeight:"bold",
    paddingLeft:30,
    paddingRight:30, 
  },
  smallview:{
    backgroundColor:"red", 
    borderRadius:50, 
    padding:5,
    width:30,
   justifyContent:"center",
   alignItems:"center"
  },
  smalltext:{
    fontSize:26,
    fontWeight:"bold"
  },
  container: {
    flex: 1,
    backgroundColor: '#ecf0f1',
    paddingTop:5,
    borderColor:"black",
    borderWidth:2,
    borderRadius:12,
  },
  ScrollViewItem:{
    justifyContent:"space-between",
    flexDirection:"row",
    backgroundColor:'#add8e6',
    width:'80%',
    alignSelf:'center',
    padding:10,
    margin:5,
  },
  scrollview:{
    width:'100%;'
  },
  scrollviewtext:{
    fontSize:20,
    borderRadius:10,  
  },
  
});
