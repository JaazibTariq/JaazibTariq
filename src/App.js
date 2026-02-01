import React, { useState, useCallback } from 'react';
import './App.css';
import './styles/CRTEffect.css';
import StartScreen from './components/StartScreen';
import LevelSelect from './components/LevelSelect';
import ExperienceScreen from './components/screens/ExperienceScreen';
import AboutScreen from './components/screens/AboutScreen';
import ProjectsScreen from './components/screens/ProjectsScreen';
import ContactScreen from './components/screens/ContactScreen';

// Game states
const SCREENS = {
  START: 'start',
  MENU: 'menu',
  EXPERIENCE: 'experience',
  ABOUT: 'about',
  PROJECTS: 'projects',
  CONTACT: 'contact',
};

function App() {
  const [currentScreen, setCurrentScreen] = useState(SCREENS.START);
  
  const handleStart = useCallback(() => {
    setCurrentScreen(SCREENS.MENU);
  }, []);
  
  const handleSelect = useCallback((levelId) => {
    setCurrentScreen(levelId);
  }, []);
  
  const handleBack = useCallback(() => {
    setCurrentScreen(SCREENS.MENU);
  }, []);
  
  const renderScreen = () => {
    switch (currentScreen) {
      case SCREENS.START:
        return <StartScreen onStart={handleStart} />;
      case SCREENS.MENU:
        return <LevelSelect onSelect={handleSelect} />;
      case SCREENS.EXPERIENCE:
        return <ExperienceScreen onBack={handleBack} />;
      case SCREENS.ABOUT:
        return <AboutScreen onBack={handleBack} />;
      case SCREENS.PROJECTS:
        return <ProjectsScreen onBack={handleBack} />;
      case SCREENS.CONTACT:
        return <ContactScreen onBack={handleBack} />;
      default:
        return <StartScreen onStart={handleStart} />;
    }
  };
  
  return (
    <div className="crt-monitor">
      <div className="crt-body">
        {/* Top bezel with LED and buttons */}
        <div className="crt-top-bezel">
          <div className="crt-top-left">
            <div className="monitor-led" />
            <span className="monitor-label">CRT-2026</span>
          </div>
          <div className="crt-top-right">
            <div className="monitor-button" />
            <div className="monitor-button" />
            <div className="monitor-button" />
          </div>
        </div>
        
        {/* Main screen area */}
        <div className="crt-bezel">
          <div className="crt-housing">
            <div className="crt-screen crt-flicker">
              {/* CRT Effects Layers */}
              <div className="static-overlay" />
              <div className="vhs-tracking" />
              <div className="crt-glow" />
              <div className="crt-vignette" />
              <div className="crt-glare" />
              
              {/* Actual content */}
              <div className="crt-content">
                {renderScreen()}
              </div>
            </div>
          </div>
        </div>
        
        {/* Bottom bezel with brand */}
        <div className="crt-bottom-bezel">
          <div className="crt-brand">JAAZIB</div>
        </div>
      </div>
      
      {/* Monitor stand */}
      <div className="crt-stand" />
    </div>
  );
}

export default App;
