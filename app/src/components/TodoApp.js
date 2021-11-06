import React, {useState, useEffect} from "react"
import styled from "styled-components"
import {Input} from "antd"
import {AiFillDelete} from "react-icons/ai"
import moment from "moment"

const TodoApp = () => {

 

   

        const [todoList, setTodoList] = useState([
            // {id: 1, todo: "Writing code feels cool", time: Date.now()},
            // {id: 2, todo: "I love the recent hackathon", time: Date.now()},
            // {id: 3, todo: "CodeLab will be introducing Graphql", time: Date.now()},
        ])

        const [newTodo, setNewTodo] = useState(" ")

        const addItem = ()=> {
            const data = {
                id : todoList.length + 1,
                todo: newTodo,
                time: Date.now()
            }
            setTodoList([...todoList, data])
            setNewTodo(" ")
        }

        const deleteItem = (id)=> {
            const deletedItem = todoList.filter( (e)=> e.id !== id)
            setTodoList(deletedItem)
        }

        useEffect(()=>{
            const SaveItem = JSON.parse(localStorage.getItem("store"))
            setTodoList(SaveItem)
        },[])
    
        useEffect(()=>{
            localStorage.setItem("store", JSON.stringify(todoList))
        },[todoList])

       
    return (
        <Container>
            <span>Todo App</span>
            <Wrapper>
                <Card>
                <Head>
                    <Inputs placeholder="Enter what to do"
                    
                    value={newTodo}
                    onChange={ (e)=> {
                        setNewTodo(e.target.value)
                       
                    }}/>

                    <AddButton onClick={
                        ()=>{
                            addItem()
                        }
                    }>Add</AddButton>
                </Head>
                <Bottom>
                   {todoList.map( (props)=> (
                        <Content key={props.id}>
                        <Number>{props.id}</Number>
                        <Text>{props.todo}</Text>
                        <Time>{moment(props.time).fromNow()}</Time>
                        <DeleteIcon 
                        ><AiFillDelete 
                        onClick={ ()=> {
                            deleteItem(props.id)
                        }}/>
                        </DeleteIcon>
                    </Content>
                   ))}
                </Bottom>
                </Card>
            </Wrapper>
        </Container>
        )
}

export default TodoApp

const Container = styled.div `
width: 100%;
height: 635px;
display: flex;
background-color: black;
justify-content: center;
align-items: center;
flex-direction: column;
background-image: url("/image/11.jpg");
background-position: center;
background-repeat: no-repeat;



span{
    font-size: 40px;
    font-weight: bold;
    font-family: Poppins;
    margin-top: 10px;
    color: white;
    /* margin-bottom: 10px; */
}
`

const Wrapper = styled.div `
width: 100%;
height: 100%;
display: flex;
align-items: center;
justify-content: center;
`

const Card = styled.div `
width: 40%;
height: 90%;
background-color: rgba(255, 255, 255, 0.2);
border-radius: 5px;
display: flex;
flex-direction: column;
align-items: center;
backdrop-filter: blur( 6px );
border: rgba(255, 255, 255, 0.2);
box-shadow: 1px 1px 3px;
`

const Head = styled.div `
width: 90%;
height: 12%;
margin-top: 10px;
display: flex;
align-items: center;
justify-content: center;
/* top: 110px;
bottom: 0; */
`

const Inputs = styled(Input) `
width: 70%;
height: 65%;
outline: none;
border-radius: 4px;
border: 1px solid black;
padding-left: 5px;
font-size: 15px;
border: none;

::placeholder{
    opacity: 1px;
    font-size: 15px;
    color: lightgray;
}
:focus{
    border: none;
    outline: 2px solid cyan;
}
`
const AddButton = styled.button `
width: 15%;
height: 65%;
margin-left: 5px;
background-color: red;
border-radius: 4px;
color: white;
font-weight: bold;
font-size: 15px;
cursor: pointer;
`

const Bottom = styled.div `
width: 90%;
height: 80%;
margin-top: 10px;
overflow-y: scroll;
`

const Content = styled.div `
width: 100%;
height: 10%;
display: flex;
align-items: center;
flex-wrap: wrap;
justify-content: space-around;
/* background-color: cornflowerblue; */
backdrop-filter: blur(100px);
color: black;
font-weight:600;
border-radius: 4px;
margin-top: 5px;
`
const Number = styled.div `
width: 5%;
height: 80%;
display: flex;
justify-content: center;
align-items: center;
font-weight: bold;
`
const Text = styled.div `
width: 65%;
height: 80%;
display: flex;
align-items: center;
/* background-color: yellow; */
/* overflow-x: scroll; */
`

const Time = styled.div `
width: 20%;
height: 80%;
display: flex;
align-items: center;
justify-content: center;
font-size: 10px;
font-weight: 600;
`

const DeleteIcon = styled.div `
color: red;
display: flex;
align-items: center;
justify-content: center;
margin-right: 5px;
cursor: pointer;
transition: all 350ms;
transform: scale(1);
:hover{
    transform: scale(1.2);
}
`
