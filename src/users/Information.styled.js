import styled from "styled-components";

export const Headline = styled.h2`
  margin: 15px 0 10px 0;
  color: #2E4053
`
export const Inner = styled.div`
margin-top: 10px;
grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
gap: 10px;
display: grid;
`
export const Avatar = styled.img`
width: 70%;
height: 90%;
object-fit: cover;
border-radius: 10px;
`
export const UserHeader = styled.div`
height: 390px;
// background: #a7b3c7;
flex-direction: column;
display: flex;
align-items: center;
justify-content: center;
border-radius: 10px;
`
export const Infos = styled.h3`
display: flex;
flex-direction: column;
gap: .6rem;
`

export const Description = styled.div`
background: rgb(230, 244, 255);
padding: 15px ;
border-radius: 10px;
height: 360px;
gap: 2rem
`
export const List = styled.ul`
display: flex;
flex-direction: column;
background: rgb(230, 244, 255);
gap: 1rem;
border-bottom: 1px solid gray;
margin-top: 20px;
`
export const ListItem = styled.li`
  font-size: 15px;
`