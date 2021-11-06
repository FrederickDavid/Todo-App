import React,{useState, useEffect} from "react"
import styled from "styled-components"
import { Input } from "antd"
import {AiFillDelete, AiOutlineDelete,
AiOutlineLoading3Quarters,} from "react-icons/ai";

const TodoApp = () => {

    
  // Input Function for useState
  const [text, setText] = useState(" ");

   // Dummy datas
   const [myData, setMyData] = useState([
   
  ]);

   // Setting the Map function with dummy datas
   const addItem = () => {
    const items = {
      task: text,
      number: myData.length + 1,
      id: myData.length + 1,
      time: "3Secs ago",
    };

    setMyData([...myData, items]);

    setText("");
  };

     // Delete Function
     const deleteItem = (id) => {
     const removeItem = myData.filter((el) => el.id !== id);
     setMyData(removeItem);
      };

       // Creating a function to use your browser local Storage
  
  useEffect(() => {
    const saveItems = JSON.parse(localStorage.getItem("store"));
    setMyData(saveItems);
  }, []);

  useEffect(() => {
    localStorage.setItem("store", JSON.stringify(myData));
  }, [myData]);

    return (
        <Container>
            <span>Todo App</span>
            <Wrapper>
                <Head>
                    <Inputs placeholder="Enter your Task"
                       value={text}
                       onChange={(e) => {
                       setText(e.target.value);
                        }}
                    />
                    <AddButton
                     onClick={() => {
                        console.log(text);
                        addItem();
                        }}
                    >Add</AddButton>
                </Head>
                <Bottom>
                   {myData.map((props)=>(
                        <Content key={props.id}>
                        <No>{props.number}</No>
                        <Text>{props.task}</Text>
                        <Date>{props.time}</Date>
                        <Delete><AiOutlineDelete
                        onClick={() => {
                            console.log("I can be deleted of ID: ", props.id);
                            deleteItem(props.id);
                            }}
                        /></Delete>
                    </Content>
                   ))}
                </Bottom>
            </Wrapper>
        </Container>
    )
}

export default TodoApp

const No = styled.div `
width: 5%;
height: 80%;
margin-left: 2px;
display: flex;
align-items: center;
justify-content: center;
font-weight: bold;
`
const Text = styled.div `
width: 73%;
height: 80%;
margin-left: 2px;
display: flex;
align-items: center;
justify-content: center;
`
const Date = styled.div `
width: 15%;
height: 80%;
margin-left: 2px;
font-size: 10px;
display: flex;
align-items: center;
justify-content: center;
`
const Delete = styled.div `
width: 5%;
height: 80%;
margin-left: 2px;
display: flex;
align-items: center;
justify-content: center;
cursor: pointer;
`

const Content = styled.div `
width: 100%;
height: 8%;
margin-top: 10px;
display: flex;
align-items: center;
`
const Bottom = styled.div `
width: 90%;
height: 80%;
margin-top: 12%;
overflow-y: scroll;
`

const AddButton = styled.button `
width: 10%;
height: 60%;
background-color: red;
border-radius: 5px;
font-weight: bold;
color: white;
cursor: pointer;
margin-left: 5px;
`

const Inputs = styled(Input) `
width: 70%;
height: 60%;
border-radius: 5px;
border: 1px solid black;
padding-left: 5px;
margin-left: 9%;
font-size: 15px;


::placeholder{
    opacity: 0.6;
    font-size: 15px;
};
:focus{
    outline: 2px solid rgb(76, 216, 250);
    border: none;
};
`

const Head = styled.div `
width: 90%;
height: 15%;
margin-top: 10px;
display: flex;
align-items: center;
position: fixed;
top: 0;
bottom: 0;
`

const Container = styled.div `
width: 100%;
height: 100vh;
background-color: gray;
display: flex;
align-items: center;
justify-content: center;
flex-direction: column;

span{
    font-size: 30px;
    font-weight: bold;
    margin-bottom: 10px;
}
`

const Wrapper = styled.div `
width: 50%;
height: 80%;
background: rgba( 255, 255, 255, 0.2 );
box-shadow: 0 8px 32px 0 rgba( 31, 38, 135, 0.37 );
backdrop-filter: blur( 8px );
-webkit-backdrop-filter: blur( 8px );
border-radius: 10px;
border: 1px solid rgba( 255, 255, 255, 0.18 );
display: flex;
justify-content: center;
flex-direction: column;
align-items: center;
`