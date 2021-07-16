import React from 'react';
import { Redirect, useHistory } from 'react-router';
import { Link } from 'react-router-dom';

import Container from '../../components/style/container.component';
import Content from '../../components/style/content.component';
import Header from '../../components/style/header.component';
import Button from '../../components/forms/button.component';
import Text from '../../components/style/text.component';
import TextInput from '../../components/forms/text.input';
import { validateEmail } from '../../utils/regex.util';
import { logout, useLogin } from '../../utils/auth.utils';


const AddPeopleScreen = () => {
    const history = useHistory();
    const { me, isLogin } = useLogin();
    const [email, setEmail] = React.useState("");
    const [firstName, setFirstName] = React.useState("");
    const [lastName, setLastName] = React.useState("");
    const [age, setAge] = React.useState("");
    const [country, setCountry] = React.useState("");
    const [phone, setPhone] = React.useState("");
    const [errorMsg, setErrorMsg] = React.useState("");
    const [modal, setModal] = React.useState(false)
    const [, setLoading] = React.useState(false);

    const disconnect = () => {
        logout();
        history.push("/");
    }

    const submit = () => {
        setErrorMsg("");
        if (!email) {
            setErrorMsg("Email is mandatory");
            return;
        }
        if (!validateEmail(email)) {
            setErrorMsg("Email invalid");
            return;
        }

        setLoading(true);
        console.log(country)
        setModal(true)
        // const res = await signup({
        //     email,
        //     password
        // });
        // if (res.statusCode === 200) {
        //     if (res.data.success) {
        //         const res = await signin(email, password);
        //         if (res.data.token) {
        //             login(res.data.token);
        //             history.push("/allpeople");
        //         }
        //     } else {
        //         setErrorMsg("Email already use");
        //     }
        // }
        setLoading(false);
    }
    const send = () => {
        setModal(false)
    }
    const closeModal = () => {
        setModal(false)
    }

    if (!isLogin) return <Redirect to="/" />
    return (
        <>
        <Header>
            <Text h1 style={{ marginBottom: 20 }}>
                Add people
            </Text>
            <Button style={{ marginTop: 25 }} text="Log out" color="primary" onClick={disconnect} />
         </Header>
        <Container>
           
            <Content>
                <TextInput
                    onChange={text => setFirstName(text)}
                    placeholder="First Name"
                    style={{ marginBottom: 2 }}
                />
                <TextInput
                    onChange={text => setLastName(text)}
                    placeholder="Last Name"
                    style={{ marginBottom: 2 }}
                />
                <TextInput
                    onChange={text => setAge(text)}
                    placeholder="Age"
                    style={{ marginBottom: 2 }}
                />
                <TextInput
                    onChange={text => setEmail(text)}
                    placeholder="Email"
                    style={{ marginBottom: 2 }}
                />
                <div style={{ marginBottom: '2px', width: '100%' }}>
                    <select 
                        name="Country" id="Country" onChange={(e)=>setCountry(e.target.value)}
                        style={{ border: 'none', borderRadius: '20px', padding: '0px 20px', fontSize: '18px', height: '35px', width: '100%' }}
                    >
                        <option value="">Select Country</option>
                        <option value="Australia">Australia</option>
                        <option value="Canada">Canada</option>
                        <option value="United Kingdom">United Kingdom</option>
                    </select>
                </div>
                <TextInput
                    onChange={text => setPhone(text)}
                    placeholder="Phone"
                    style={{ marginBottom: 2 }}
                />
                {errorMsg? (
                    <Text h3 style={{ marginBottom: 20 , color: 'red'}}>
                        {errorMsg}
                    </Text>
                ): null}
                <Button style={{ marginTop: 25 }} text="submit" color="primary" onClick={submit} />
            </Content>
        </Container>
        {modal? (
            <div style={{position: 'absolute', background: '#ffffff6b', width: '100%', height: '100vh', top: '0px', display: 'flex'}} onClick={closeModal}>
                <div 
                    style={{margin: 'auto', padding: '20px', background: '#c7c7c7', width: '30%'}}
                    onClick={e => {
                        e.stopPropagation();
                      }}
                >
                    <p>Are you sure?</p>
                    <p>First Name: {firstName}</p>
                    <p>Last Name: {lastName}</p>
                    <p>Age: {age}</p>
                    <p>Email: {email}</p>
                    <p>Country: {country}</p>
                    <p>Phone: {phone}</p>
                    <Button style={{ marginTop: 25 }} text="Yes" color="primary" onClick={send} />
                    <Button style={{ marginTop: 25 }} text="No" color="primary" onClick={closeModal} />
                </div>
            </div>
        ): null}
        </>
    );
}

export default AddPeopleScreen;
