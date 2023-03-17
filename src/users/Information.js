import { Fragment, useEffect, useState } from 'react';
import axios from 'axios';
import Friends from '../components/Friends';
import queryString from 'query-string';
import { useLocation } from 'react-router-dom';
import { View } from '../components/main.styled';
import { Avatar, Description, Headline, Infos, List, ListItem, UserHeader, Inner } from './Information.styled';

export default function Information (){

const [user, setUser] = useState({})
const [error, setError] = useState(false)

const location = useLocation()
const {id} = queryString.parse(location.search)

  useEffect(() => {
    async function getUsers() {
      try {
        const response = await axios.get(`http://sweeftdigital-intern.eu-central-1.elasticbeanstalk.com/user/${id}`);
        setUser(response.data);
      } catch (error) {
        setError(true)
      }
    }
    getUsers();
  }, [id]);

  const { name, lastName, email, ip, jobArea, jobType, address, imageUrl } = user;

  return(
    <View>
      {
        error ? <span>An error occurred</span> :
        <Fragment>
          <Inner>
        <UserHeader>
          <Avatar src={imageUrl + '/' + id} className="user-img" alt={name} />
          <Infos>{name} {lastName}</Infos>
        </UserHeader>
        <Description>
          <List>
            <ListItem>
              <strong>Email</strong>: {email} 
            </ListItem>
            <ListItem>
              <strong>Ip Address</strong>: {ip}
            </ListItem>
            <ListItem>
              <strong>Job area</strong>: {jobArea}
            </ListItem>
            <ListItem>
              <strong>Job Type</strong>: {jobType}
            </ListItem>
          </List>

          <List>
            <ListItem>
              <strong>City</strong>: {address?.city} 
            </ListItem>
            <ListItem>
              <strong>Country</strong>: {address?.country}
            </ListItem>
            <ListItem>
              <strong>State</strong>: {address?.state}
            </ListItem>
            <ListItem>
              <strong>Street Address</strong>: {address?.streetAddress}
            </ListItem>
            <ListItem>
              <strong>Zip code</strong>: {address?.zipCode}
            </ListItem>
          </List>
        </Description>
        </Inner>
        <Headline>Friends:</Headline>
        <Friends />
      </Fragment>
      }
    </View>
  )
}