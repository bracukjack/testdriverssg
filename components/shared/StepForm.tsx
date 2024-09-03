// components/StepForm.tsx
import React, {useState} from 'react';
import {View, Button, StyleSheet} from 'react-native';

interface StepFormProps {
  steps: Array<React.ReactNode>;
  onFinish: () => void;
}

const StepForm: React.FC<StepFormProps> = ({steps, onFinish}) => {
  const [currentStep, setCurrentStep] = useState(0);

  const nextStep = () => {
    if (currentStep < steps.length - 1) {
      setCurrentStep(currentStep + 1);
    } else {
      onFinish();
    }
  };

  const prevStep = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1);
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.stepContainer}>{steps[currentStep]}</View>
      <View style={styles.buttonContainer}>
        {currentStep > 0 && <Button title="Previous" onPress={prevStep} />}
        <Button
          title={currentStep < steps.length - 1 ? 'Next' : 'Finish'}
          onPress={nextStep}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  stepContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '80%',
    margin: 20,
  },
});

export default StepForm;
