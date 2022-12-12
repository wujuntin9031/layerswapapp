import { FC, useCallback } from "react";
import { useFormWizardaUpdate } from "../../context/formWizardProvider";
import { TimerProvider } from "../../context/timerContext";
import useCreateSwap from "../../hooks/useCreateSwap";
import { SwapCreateStep } from "../../Models/Wizard";
import ActiveSwapLimit from "./Steps/ActiveSwapLimitStep";
import APIKeyStep from "./Steps/APIKeyStep";
import CodeStep from "./Steps/CodeStep";
import SwapConfirmationStep from "./Steps/ConfirmStep";
import EmailStep from "./Steps/EmailStep";
import ErrorStep from "./Steps/ErrorStep";
import MainStep from "./Steps/MainStep/index";
import OfframpAccountConnectStep from "./Steps/OfframpAccountConnectStep";
import TwoFactorStep from "./Steps/TwoFactorStep";
import Wizard from "./Wizard";
import WizardItem from "./WizardItem";

const CreateSwap: FC = () => {
    const { MainForm, Email, Code, OffRampOAuth, Confirm } = useCreateSwap()
    const { goToStep } = useFormWizardaUpdate()

    const GoBackToMainStep = useCallback(() => goToStep(SwapCreateStep.MainForm, "back"), [])
    const GoBackToConfirmStep = useCallback(() => goToStep(SwapCreateStep.Confirm, "back"), [])
    const GoBackToEmailStep = useCallback(() => goToStep(SwapCreateStep.Email, "back"), [])

    return (
        <TimerProvider>
            <Wizard>
                <WizardItem StepName={SwapCreateStep.MainForm} PositionPercent={MainForm.positionPercent} key={SwapCreateStep.MainForm}>
                    <MainStep OnSumbit={MainForm.onNext} />
                </WizardItem>
                <WizardItem StepName={SwapCreateStep.Email} GoBack={GoBackToMainStep} PositionPercent={Email.positionPercent} key={SwapCreateStep.Email}>
                    <EmailStep OnNext={Email.onNext} />
                </WizardItem>
                <WizardItem StepName={SwapCreateStep.Code} GoBack={GoBackToEmailStep} PositionPercent={Code.positionPercent} key={SwapCreateStep.Code}>
                    <CodeStep OnNext={Code.onNext} />
                </WizardItem>
                <WizardItem StepName={SwapCreateStep.Confirm} GoBack={GoBackToMainStep} PositionPercent={Confirm.positionPercent} key={SwapCreateStep.Confirm}>
                    <SwapConfirmationStep />
                </WizardItem>
                <WizardItem StepName={SwapCreateStep.ActiveSwapLimit} GoBack={GoBackToConfirmStep} PositionPercent={Confirm.positionPercent} key={SwapCreateStep.ActiveSwapLimit}>
                    <ActiveSwapLimit />
                </WizardItem>
                <WizardItem StepName={SwapCreateStep.Error} PositionPercent={100} key={SwapCreateStep.Error}>
                    <ErrorStep />
                </WizardItem>
            </Wizard>
        </TimerProvider>
    )
}

export default CreateSwap;