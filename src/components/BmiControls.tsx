import React from "react";
import { IonRow, IonCol, IonButton, IonIcon } from "@ionic/react";

import { calculatorOutline, refreshOutline } from "ionicons/icons";

const BmiControls: React.FC<{
    onCalculate: () => void,
    onReset: () => void
}> = ({ onCalculate, onReset }) => {
  return (
    <IonRow>
      <IonCol className="ion-text-left">
        <IonButton onClick={onCalculate}>
          <IonIcon slot="start" icon={calculatorOutline} />
          Calculate
        </IonButton>
      </IonCol>
      <IonCol className="ion-text-right">
        <IonButton onClick={onReset}>
          <IonIcon slot="start" icon={refreshOutline} />
          Reset
        </IonButton>
      </IonCol>
    </IonRow>
  );
};

export default BmiControls;
