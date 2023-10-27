import styled from 'styled-components/native';
import { StyleSheet } from 'react-native';

export const ListItemView = StyleSheet.create({
  button: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "left",
    alignItems: "center",
    backgroundColor: "white",
    borderWidth: 2,
    borderColor: "grey",
    borderRadius: 10,
    margin: 2,
  }});

export const ListItemImage = styled.Text`
    font-size: 20px;
    margin: 20px 10px;
`;

export const ListItemTitle = styled.Text`
    font-size: 20px;
    margin: 20px 5px;
`;