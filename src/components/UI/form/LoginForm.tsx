import React, { useState } from "react"
import { useAppDispatch, useAppSelector } from "../../../utils/hooks"
import { login } from "../../../reducers/auth/UserLogin"
import { authSlicer } from "../../../reducers/auth"
import { Button, Form, Input } from "antd"

interface LoginFormProps {}

const LoginForm: React.FC<LoginFormProps> = () => {
    const dispatch = useAppDispatch()
    const { error, isLoading } = useAppSelector((state) => state.auth)
    const [username, setUsername] = useState<string>("")
    const [password, setPassword] = useState<string>("")

    const submit = () => {
        dispatch(login(username, password))
        dispatch(authSlicer.actions.setIsModalLoginOpen(false))
    }

    return (
        <Form
            onFinish={submit}
            name="basic"
            labelCol={{ span: 8 }}
            wrapperCol={{ span: 16 }}
            className="form"
            initialValues={{ remember: true }}
            autoComplete="off"
        >
            {error && <h1 style={{ color: "red" }}>Error:{error}</h1>}
            <Form.Item
                label="Логин"
                name="username"
                rules={[
                    {
                        required: true,
                        message: "Пожалуйста, впишите ваш логин!",
                    },
                ]}
            >
                <Input
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                />
            </Form.Item>
            <Form.Item
                label="Пароль"
                name="password"
                rules={[
                    {
                        required: true,
                        message: "Пожалуйста, впишите ваш пароль!",
                    },
                ]}
            >
                <Input.Password
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />
            </Form.Item>
            <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
                <Button
                    type="primary"
                    htmlType="submit"
                    loading={isLoading}
                    id="modal-btn"
                >
                    Войти
                </Button>
            </Form.Item>
        </Form>
    )
}

export default LoginForm
