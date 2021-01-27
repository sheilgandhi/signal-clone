import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { ListItem, Avatar } from 'react-native-elements'

const CustomListItem = ({ id, chatName, enterChat }) => {
    return (
        <ListItem>
            <Avatar rounded source={{ uri: "https://pbs.twimg.com/profile_images/1303885462654783493/gsmGNMHa_400x400.jpg" }}/>

            <ListItem.Content>
                <ListItem.Title style={{ fontWeight: "800" }}>Youtube</ListItem.Title>
                <ListItem.Subtitle numberOfLines={1} ellipsizeMode="tail">
                    Youtube                
                </ListItem.Subtitle>
            </ListItem.Content>
        </ListItem>
    )
}

export default CustomListItem

const styles = StyleSheet.create({})
