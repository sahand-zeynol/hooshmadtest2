import React from 'react';
import { Redirect, useHistory } from 'react-router';
import { Link } from 'react-router-dom';

import Container from '../../components/style/container.component';
import Content from '../../components/style/content.component';
import Button from '../../components/forms/button.component';
import Text from '../../components/style/text.component';
import TextInput from '../../components/forms/text.input';
import { validateEmail } from '../../utils/regex.util';
import { signin, signup } from '../../services/auth.service';
import { login } from '../../utils/auth.utils';


const SignupScreen = () => {
    const history = useHistory();
    const [email, setEmail] = React.useState("");
    const [password, setPassword] = React.useState("");
    const [errorMsg, setErrorMsg] = React.useState("");
    const [passwordConfirmation, setPasswordConfirmation] = React.useState("");
    const [, setLoading] = React.useState(false);

    const submit = async () => {
        setErrorMsg("");
        if (!email || !password || !passwordConfirmation) {
            setErrorMsg("All fields are mandatory");
            return;
        }
        if (password !== passwordConfirmation) {
            setErrorMsg("Passwords are not the same");
            return;
        }
        if (!validateEmail(email)) {
            setErrorMsg("Email invalid");
            return;
        }

        setLoading(true);
        const res = await signup({
            email,
            password
        });
        if (res.statusCode === 200) {
            if (res.data.success) {
                const res = await signin(email, password);
                if (res.data.token) {
                    login(res.data.token);
                    history.push("/allpeople");
                }
            } else {
                setErrorMsg("Email already use");
            }
        }
        setLoading(false);
    }

    return (localStorage.getItem('token')
        ?
        <Redirect to="/allpeople" />
        :
        <Container>
            <Content>
                <Text h1 style={{ marginBottom: 20 }}>
                    Signup
                </Text>

                <TextInput
                    onChange={text => setEmail(text)}
                    placeholder="Email"
                    style={{ marginBottom: 2 }}
                />
                <TextInput
                    onChange={text => setPassword(text)}
                    placeholder={"Password"}
                    style={{ marginBottom: 2 }}
                    password
                />
                <TextInput
                    onChange={text => setPasswordConfirmation(text)}
                    placeholder={"Password confirmation"}
                    style={{ marginBottom: 25 }}
                    errorMsg={errorMsg}
                    password
                />

                <Button text="Signup" color="primary" onClick={submit} />
                <Link to="/signin" style={{ marginTop: 10 }}>
                    <Button text="Signin" color="transparent" />
                </Link>
                <Link to="/">
                    <Button text="Back to home" color="transparent" style={{ marginRight: 10 }} />
                </Link>
            </Content>
        </Container>
    );
}

export default SignupScreen;
