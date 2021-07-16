import React from 'react';
import { Link, Redirect } from 'react-router-dom';
import styled from 'styled-components';

import Container from '../../components/style/container.component';
import Content from '../../components/style/content.component';
import Button from '../../components/forms/button.component';
import Text from '../../components/style/text.component';
import { useLogin } from '../../utils/auth.utils';

const Footer = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    width: 100%;
    margin-top: 30px;
`

const HomeScreen = () => {
    const { isLogin } = useLogin();

    return (isLogin
        ?
        <Redirect to="/allpeople" />
        :
        <Container>
            <Content >
                <img width="80" alt={"Logo"} src={"assets/imgs/logo.png"} style={{ marginBottom: 20 }} />
                <Text h1>
                    Wellcome to test Project
                </Text>
                <Footer>
                    <Link to="/signin" style={{ marginRight: 10 }}>
                        <Button text="Signin" color="primary" />
                    </Link>
                    <Link to="/signup">
                        <Button text="Signup" color="primary" />
                    </Link>
                </Footer>
            </Content>
        </Container>
    );
}

export default HomeScreen;
