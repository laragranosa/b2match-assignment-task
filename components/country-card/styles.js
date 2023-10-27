import styled from 'styled-components/native';

export const CardHeaderView = styled.View`
    background-color: white;
    padding: 16px;
    shadow-color: 'black';
    shadow-opacity: 0.2;
    shadow-radius: 3px;
    elevation: 4;
    width: 100%;
`;

export const CardHeaderImage = styled.Text`
    font-size: 100px;
    align-self: center;
`;

export const CardHeaderTitle = styled.Text`
    font-size: 18px;
    font-weight: bold;
    text-align: center;
`;
export const CardInfoView = styled.View`
    margin: 30px 30px 0px;
    justify-content: left;
    background-color: white;
    display: flex;
`;