import React from 'react';
import { Redirect, useHistory } from 'react-router';
import { Link } from 'react-router-dom';

import Container from '../../components/style/container.component';
import Content from '../../components/style/content.component';
import Button from '../../components/forms/button.component';
import Text from '../../components/style/text.component';
import TextInput from '../../components/forms/text.input';
import { validateEmail } from '../../utils/regex.util';
import { signin } from '../../services/auth.service';
import { login, useLogin } from '../../utils/auth.utils';


const SigninScreen = () => {
    const history = useHistory();
    const { isLogin } = useLogin();
    const [email, setEmail] = React.useState("");
    const [password, setPassword] = React.useState("");
    const [errorMsg, setErrorMsg] = React.useState("");
    const [loading, setLoading] = React.useState(false);

    const submit = async () => {
        if (!validateEmail(email)) {
            setErrorMsg("Credentials incorrect");
            return;
        }

        setLoading(true);
        const res = await signin(email, password);
        setLoading(false);

        if (res.statusCode === 200) {
            login(res.data.token);
            history.push("/allpeople");
        } else {
            setErrorMsg("Credentials incorrect");
        }
    }

    if (isLogin) return <Redirect to="/allpeople" />

    return <Container>
        <Content>
            <Text h1 style={{ marginBottom: 20 }}>
                Signin
            </Text>

            <TextInput
                placeholder="Email"
                onChange={text => setEmail(text)}
                style={{ marginBottom: 2 }}
            />
            <TextInput
                placeholder="Password"
                onChange={text => setPassword(text)}
                errorMsg={errorMsg}
                password
                style={{ marginBottom: 25 }}
            />

            <Button loading={loading} text="Connection" color="primary" onClick={submit} />

            <Link to="/signup" style={{ marginTop: 10 }}>
                <Button text="Signup" color="transparent" />
            </Link>
            <Link to="/">
                <Button text="Back to home" color="transparent" style={{ marginRight: 10 }} />
            </Link>
        </Content>
    </Container>
}

export default SigninScreen;
