import React, { useState } from 'react'
import { Text, View } from 'react-native'
import { styles } from './style'
import { ProgressSteps, ProgressStep } from 'react-native-progress-steps';
import { Step1, Step4, Step3, Step2 } from './components';

const AddStudent = () => {
    const [error, setError] = useState(false)
    const [next, setNext] = useState("")
    const buttonTextStyle = {
        color: '#4bb543'
    };
    const validate = (key) => {
        switch (key) {
            case 'step1':
                setNext(key)
                break;

            default:
                break;
        }
    }
    return (
        <View style={{ flex: 1, margin: 20 }}>
            <View style={{ flex: 1 }}>
                <ProgressSteps>
                    <ProgressStep label="1st Step" onNext={() => validate('step1')} errors={error} nextBtnTextStyle={buttonTextStyle} previousBtnTextStyle={buttonTextStyle}>
                        <View style={{ alignItems: 'center' }}>
                            <Step1 next={next} isError={setError} />
                        </View>
                    </ProgressStep>
                    <ProgressStep label="2nd Step" nextBtnTextStyle={buttonTextStyle} previousBtnTextStyle={buttonTextStyle}>
                        <View style={{ alignItems: 'center' }}>
                            <Step2 />
                        </View>
                    </ProgressStep>
                    <ProgressStep label="3rd Step" nextBtnTextStyle={buttonTextStyle} previousBtnTextStyle={buttonTextStyle}>
                        <View style={{ alignItems: 'center' }}>
                            <Step3 />
                        </View>
                    </ProgressStep>
                    <ProgressStep label="4th Step" nextBtnTextStyle={buttonTextStyle} previousBtnTextStyle={buttonTextStyle}>
                        <View style={{ alignItems: 'center' }}>
                            <Step4 />
                        </View>
                    </ProgressStep>
                </ProgressSteps>
            </View>
        </View>
    )
}

export default AddStudent

