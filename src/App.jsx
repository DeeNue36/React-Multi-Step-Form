import './App.css'
import { useStepProgression } from './store/stepProgression'
import { ProgressSidebar } from './components/ProgressSidebar'
import { PersonalInfo } from './components/PersonalInfo'
import { SelectPlan } from './components/SelectPlan'
import { SelectAddons } from './components/SelectAddons'
import { PurchaseSummary } from './components/PurchaseSummary'
import { ThankYou } from './components/ThankYou'

function App() {
  const { currentStep } = useStepProgression();

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
        {/* <!-- * Main Form Section --> */}
        <main className="form-main-section">
          {renderCurrentStep()}
        </main>
      </div>
    </>
  )
}

export default App
