import React from "react";
import { IonSegment, IonSegmentButton, IonLabel } from "@ionic/react";

const InputControl: React.FC<{
    val: 'mkg' | 'ftlbs',
    onChange: (val: 'mkg' | 'ftlbs') => void
}> = ({ val, onChange }) => {
    const onInputChange = (event: CustomEvent) => {
        onChange(event.detail.value);
    };
    return (
        <IonSegment value={val} onIonChange={onInputChange}>
            <IonSegmentButton value="mkg">
                <IonLabel>m/kg</IonLabel>
            </IonSegmentButton>
            <IonSegmentButton value="ftlbs">
                <IonLabel>ft/lbs</IonLabel>
            </IonSegmentButton>
        </IonSegment>
    );
};

export default InputControl;
