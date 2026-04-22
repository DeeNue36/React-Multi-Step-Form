import './App.css';
import { useStepProgression } from './store/stepProgression';
import { ProgressSidebar } from './components/ProgressSidebar';
import { PersonalInfo } from './components/PersonalInfo';
import { SelectPlan } from './components/SelectPlan';
import { SelectAddons } from './components/SelectAddons';
import { PurchaseSummary } from './components/PurchaseSummary';
import { ThankYou } from './components/ThankYou';
import { useDisplayPurchaseSummary } from './store/displayPurchaseSummary';
import { ConfirmationModal } from './components/ConfirmationModal';

function App() {
  const { currentStep } = useStepProgression();
  const { showModal } = useDisplayPurchaseSummary();

  const renderCurrentStep = () => {
    const steps = {
      1: <PersonalInfo />,
      2: <SelectPlan />,
      3: <SelectAddons />,
      4: <PurchaseSummary />,
      5: <ThankYou />
    }
    return steps[currentStep] || steps[1];
  };


  return (
    <>
      <div className="form-container">
        <ProgressSidebar />
        {/* Main Form Section */}
        <main className="form-main-section">
          {renderCurrentStep()}
        </main>
      </div>

      {/* Confirmation Modal Overlay */}
      {showModal && <ConfirmationModal />}
    </>
  )
}

export default App
