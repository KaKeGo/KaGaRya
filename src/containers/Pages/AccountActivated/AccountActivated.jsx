import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import { useParams } from 'react-router-dom'

import './AccountActivated.css'

import { ActivateAccount } from '../../../slice/Accounts/ActiveAccount/activeAccountSlice'


const AccountActivated = () => {
    const dispatch = useDispatch()
    const { uidb64, token } = useParams()
    const [activationStatus, setActivationStatus] = useState('')

    useEffect(() => {
        const activate = async () => {
            try {
                await dispatch(ActivateAccount({ uidb64, token }))
                setActivationStatus('Aktywacja konta powiodła się')
            } catch (err) {
                setActivationStatus('Aktywacja konta powiodła się')
            }
        }

        activate()
    }, [dispatch, uidb64, token])

    return (
        <div>
            {activationStatus}
        </div>
    )
}

export default AccountActivated