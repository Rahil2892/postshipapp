import React from 'react';
import CustomizationSection from './CustomizationSection/CustomizationSection';
import OnboardingSupport from './OnboardingSupport/OnboardingSupport';
import IntegrationSection from './IntegrationSection/IntegrationSection';
import CustomHtmlSection from './CustomHtmlSection/CustomHtmlSection';
import Message from '../common/Message'


const Dashboard: React.FC = () => {
  return (
    <main className="mt-8 max-md:max-w-full p-4" id='partner'>
      <Message msg="Discover the Heart of Our Functionality" />
      <div className="flex gap-5 max-md:flex-col">
        <CustomizationSection
          title="Elevate Your Brand Aesthetics with Custom Tracking Page Styles"
          description="Immerse your customers in a branded experience by personalizing the colors on your tracking page."
        />
        <div className="flex flex-col ml-5 w-2/5 max-md:ml-0 max-md:w-full">
          <div className="flex flex-col max-md:mt-4 max-md:max-w-full">
            <OnboardingSupport />
            <IntegrationSection />
          </div>
        </div>
        <CustomHtmlSection />
      </div>
    </main>
  );
};

export default Dashboard;