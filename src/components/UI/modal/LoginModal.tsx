import { Modal } from "antd"
import React from "react"
import LoginForm from "../form/LoginForm"
import { useAppDispatch, useAppSelector } from "../../../utils/hooks"
import { authSlicer } from "../../../reducers/auth"

interface LoginModalProps {}

const LoginModal: React.FC<LoginModalProps> = () => {
    const dispatch = useAppDispatch()
    const { isModalLoginOpen } = useAppSelector((state) => state.auth)

    const handleClose = () => {
        dispatch(authSlicer.actions.setIsModalLoginOpen(false))
    }

    return (
        <Modal
            open={isModalLoginOpen}
            onOk={handleClose}
            onCancel={handleClose}
            footer={null}
            className="modal-form"
        >
            <LoginForm />
        </Modal>
    )
}

export default LoginModal
