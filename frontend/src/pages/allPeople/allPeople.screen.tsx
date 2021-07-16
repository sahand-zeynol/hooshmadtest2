import React from 'react';
import { Redirect, useHistory } from 'react-router';

import Container from '../../components/style/container.component';
import Content from '../../components/style/content.component';
import Header from '../../components/style/header.component';
import Button from '../../components/forms/button.component';
import Text from '../../components/style/text.component';
import { logout, useLogin } from '../../utils/auth.utils';


const AllPeopleScreen = () => {
    const history = useHistory();
    const { me, isLogin } = useLogin();

    const disconnect = () => {
        logout();
        history.push("/");
    }

    const addUser = () => {
        history.push("/addpeople");
    }

    if (!isLogin) return <Redirect to="/" />
    console.log(me)
    return (
        <>
        <Header>
            <Text h1 style={{ marginBottom: 20 }}>
                All people
            </Text>
            <Button style={{ marginTop: 25 }} text="Log out" color="primary" onClick={disconnect} />
         </Header>
        <Container>
           
            <Content>
                <Text h1 style={{ marginBottom: 20 }}>
                    All people
                </Text>
                <Text>
                    {me.email}
                </Text>
                <Button style={{ marginTop: 25 }} text="Add user" color="primary" onClick={addUser} />
            </Content>
        </Container>
        </>
    );
}

export default AllPeopleScreen;
