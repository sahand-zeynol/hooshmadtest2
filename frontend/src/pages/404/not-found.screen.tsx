import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

import Button from '../../components/forms/button.component';
import Text from '../../components/style/text.component';
import colors from '../../themes/colors.theme';

const Container = styled.div`
    background-color: ${colors.dark};
    width: 100%;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
`

const NotFoundScreen = () => {

    return (
        <Container>
            <div>
                <Text h1 style={{ marginBottom: 20 }}>
                    404 Not found
                </Text>
                <Link to="/" style={{ marginTop: 10 }}>
                    <Button text="Back to home" color="primary" />
                </Link>
            </div>
        </Container>
    );
}

export default NotFoundScreen;