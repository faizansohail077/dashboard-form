import React, { useState, useEffect } from 'react'
import { Text, TouchableOpacity, View, Platform } from 'react-native'
import { Input } from '../../../../components'
import { styles } from './style'
import DateTimePicker from '@react-native-community/datetimepicker';

const Step1 = ({ isError, next }) => {
    const [name, setName] = useState('')
    const [nameError, setNameError] = useState(false)

    const [age, setAge] = useState(Date.now())
    const [ageError, setAgeError] = useState(false)

    const [mobile, setMobile] = useState('')
    const [mobileError, setMobileError] = useState(false)

    const [parentNumber, setParentNumber] = useState("")
    const [parentNumberError, setParentNumberError] = useState(false)

    const [cnic, setCnic] = useState('')
    const [cnicError, setCnicError] = useState(false)

    const [parmentAddress, setParmenentAddress] = useState('')
    const [parmentAddressError, setParmenentAddressError] = useState(false)

    const [temporaryAddress, setTemporaryAddress] = useState("")
    const [temporaryAddressError, setTemporaryAddressError] = useState(false)

    const [show, setShow] = useState(false);
    const months = ['01', '02', '03', '04', '05', '06', '07', '08', '09', '10', '11', '12']
    const [mode, setMode] = useState('date');
    useEffect(() => {
        if (next == 'step1') {
            isError(true)
            validate()
        }
    }, [next])
    const validate = () => {
        let notanumber = /^([^0-9]*)$/
        const whiteSpaceReg = /^\s+$/
        let cnicReg = /^[0-9]{5}-[0-9]{7}-[0-9]$/

        if (name == '' || whiteSpaceReg.test(name)) {
            isError(true)
            setNameError(true)
            setTimeout(() => {
                setNameError(false)
            }, 3000);
        }
        if (mobile == '' || whiteSpaceReg.test(mobile) || notanumber.test(mobile) || mobile.length < 11) {
            isError(true)
            setMobileError(true)
            setTimeout(() => {
                setMobileError(false)
            }, 3000);
        }
        if (parentNumber == '' || whiteSpaceReg.test(parentNumber) || notanumber.test(parentNumber) || parentNumber.length < 11) {
            setParentNumberError(true)
            isError(true)
            setTimeout(() => {
                setParentNumberError(false)
            }, 3000);
        }
        if (cnic == '' || whiteSpaceReg.test(cnic) || cnicReg.test(cnic)) {
            isError(true)
            setCnicError(true)
            setTimeout(() => {
                setCnicError(false)
            }, 3000);
        }
        if (cnic == '' || whiteSpaceReg.test(cnic) || cnicReg.test(cnic)) {
            isError(true)
            setCnicError(true)
            setTimeout(() => {
                setCnicError(false)
            }, 3000);
        }
        if (parmentAddress == '' || whiteSpaceReg.test(parmentAddress)) {
            isError(true)
            setParmenentAddressError(true)
            setTimeout(() => {
                setParmenentAddressError(false)
            }, 3000);
        }
        if (temporaryAddress == '' || whiteSpaceReg.test(temporaryAddress)) {
            isError(true)
            setTemporaryAddressError(true)
            setTimeout(() => {
                setTemporaryAddressError(false)
            }, 3000);
        }
        // isError(false)
    }

    const onChange = (event, selectedDate) => {
        let myDate = new Date(selectedDate)
        let date_date = myDate.getDate()
        let date_year = myDate.getFullYear()
        let date_month = myDate.getMonth()
        let fullDate = `${date_year}-${months[date_month]}-${date_date}`
        const currentDate = selectedDate || age;
        setShow(Platform.OS === 'ios');
        setAge(fullDate);
    };

    const showDatepicker = () => {
        setShow(true);
    };



    return (
        <View style={{ width: '100%' }}>
            <Text style={styles.step1__container}>Personal Data</Text>
            <Input value={name} error={nameError} onChange={setName} title="Name" placeholder="Enter Name" />
            {show ? (
                <DateTimePicker
                    testID="datePicker"
                    value={new Date(age)}
                    mode={mode}
                    is24Hour={true}
                    display="default"
                    onChange={onChange}
                />
            ) : null}
            <TouchableOpacity onPress={showDatepicker} activeOpacity={0.9}>
                <Input editable={false} value={age} onChange={setAge} error={ageError} title="Age" placeholder="Enter Age" />
            </TouchableOpacity>
            <Input value={mobile} onChange={setMobile} error={mobileError} title="Mobile" placeholder="Enter Mobile" />
            <Input value={parentNumber} onChange={setParentNumber} error={parentNumberError} title="Parent number" placeholder="Enter Patent number" />
            <Input value={cnic} onChange={setCnic} error={cnicError} title="CNIC" placeholder="Enter CNIC-number" />
            <Input value={parmentAddress} onChange={setParmenentAddress} error={parmentAddressError} title="Permanent address" placeholder="Enter permanent address" />
            <Input value={temporaryAddress} onChange={setTemporaryAddress} error={temporaryAddressError} title="Temporary address" placeholder="Enter Temporary address" />
        </View>
    )
}

export default Step1

