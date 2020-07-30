import React from 'react';
import { Header, Title } from 'native-base';
import { color } from '../../utility';

const header = ({ title }) => {
    return (
        <Header style={{ backgroundColor: color.GREY }}>
            <Title style={{ color: color.BLACK, alignSelf: 'center' }}>{title}</Title>
        </Header>
    );
};

export default header;
