import React, { useEffect, useRef, useState } from 'react'
import style from "./formTypeCode.module.css"
import OTPInput from 'react-otp-input';
import SizedBox from '../comon/SizedBox';
import Button from '../comon/Button';

type Props = {
    otp: string;
    handleTypeOTP: any;
}
function FormTypeCode({
    otp,
    handleTypeOTP,
}: Props) {

    const [count, setCount] = useState(60);
    let _counter = useRef<NodeJS.Timeout | null>(null);

    useEffect(() => {
        _counter.current = setTimeout(() => {
            let c = count - 1 > 0 ? count - 1 : 0;
            setCount(c)
        }, 1000)

        if (count <= 0) {
            clearTimeout(_counter.current)
        }

        return () => {
            if (_counter.current) {
                clearTimeout(_counter.current)
            }
        }
    }, [count])

    const handleResend = () => {
        if (count > 0) {
            return;
        }
        setCount(60);
    }
    return (
        <>
            <div className={style.containerOtpInput}>
                <OTPInput
                    value={otp}
                    onChange={handleTypeOTP}
                    numInputs={6}
                    renderSeparator={<SizedBox width={10} />}
                    renderInput={(props) => <input {...props} className={style.inputOtp} />}
                />

            </div>
            <SizedBox height={8} />
            <div className={style.button}>
                <Button onClick={handleResend} isDisable={count > 0} >
                    {count > 0 ? "Gửi lại sau " + count + "s" : "Gửi lại"}
                </Button>
            </div>
        </>
    )
}

export default FormTypeCode