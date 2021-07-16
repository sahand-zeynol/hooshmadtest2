import React from 'react';
import { Redirect, useHistory } from 'react-router';

import Container from '../../components/style/container.component';
import Content from '../../components/style/content.component';
import Button from '../../components/forms/button.component';
import Text from '../../components/style/text.component';
import { logout, useLogin } from '../../utils/auth.utils';


const ConnectedScreen = () => {
    const history = useHistory();
    const { me, isLogin } = useLogin();

    const disconnect = () => {
        logout();
        history.push("/");
    }

    if (!isLogin) return <Redirect to="/" />

    return (
        <Container>
            <Content>
                <Text h1 style={{ marginBottom: 20 }}>
                    Connected
                </Text>
                <Text>
                    {me.email}
                </Text>
                <Button style={{ marginTop: 25 }} text="Disconnect" color="primary" onClick={disconnect} />
            </Content>
        </Container>
    );
}

export default ConnectedScreen;
