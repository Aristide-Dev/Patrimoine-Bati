import React from 'react';
import { CheckCircle, Circle, Clock } from 'lucide-react';
import { cn } from '@/lib/utils';

const ProgressBar = ({ currentStep, totalSteps, stepTitles, stepValidation, onStepClick }) => {
  const steps = Array.from({ length: totalSteps }, (_, i) => i + 1);
  
  return (
    <div className="mb-8">
      <div className="relative flex items-center justify-between w-full">
        {/* Barre de progression en arrière-plan */}
        <div className="absolute h-1 bg-gray-200 left-0 right-0 top-1/2 transform -translate-y-1/2 z-0"></div>
        
        {/* Barre de progression remplie */}
        <div 
          className="absolute h-1 bg-blue-500 left-0 top-1/2 transform -translate-y-1/2 z-0 transition-all duration-300"
          style={{ width: `${((currentStep - 1) / (totalSteps - 1)) * 100}%` }}
        ></div>
        
        {/* Étapes */}
        {steps.map((step) => (
          <div 
            key={step}
            className="relative z-10 flex flex-col items-center group cursor-pointer"
            onClick={() => onStepClick && onStepClick(step)}
          >
            <div 
              className={cn(
                "flex items-center justify-center w-10 h-10 rounded-full transition-all duration-300",
                step < currentStep ? "bg-blue-500 text-white" : 
                step === currentStep ? "bg-blue-100 border-2 border-blue-500 text-blue-500" : 
                "bg-white border-2 border-gray-200 text-gray-400"
              )}
            >
              {step < currentStep && stepValidation[step] ? (
                <CheckCircle className="h-5 w-5" />
              ) : (
                step
              )}
            </div>
            
            <div className="absolute top-12 whitespace-nowrap text-xs font-medium transition-all duration-300">
              <span 
                className={cn(
                  "inline-flex items-center",
                  step === currentStep ? "text-blue-600 font-bold" : 
                  step < currentStep ? "text-gray-700" : "text-gray-400"
                )}
              >
                {step < currentStep && !stepValidation[step] && (
                  <Clock className="h-3 w-3 mr-1 text-amber-500" />
                )}
                {stepTitles && stepTitles[step-1]}
              </span>
            </div>
            
            {/* Tooltip d'état au survol */}
            <div className="absolute bottom-full mb-2 transform translate-y-1 opacity-0 invisible group-hover:visible group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-200">
              <div className="bg-gray-800 text-white text-xs rounded px-2 py-1 whitespace-nowrap">
                {step < currentStep ? 'Étape complétée' : 
                 step === currentStep ? 'Étape actuelle' : 
                 'Étape à venir'}
              </div>
              <div className="w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent border-t-gray-800 mx-auto"></div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProgressBar;