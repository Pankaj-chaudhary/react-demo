import React, { ReactNode, useState } from 'react';
interface TabsProps {
  children: JSX.Element[];
}
const Tabs: React.FC<TabsProps> = ({ children }): JSX.Element => {
  const [activeTab, setActiveTab] = useState(0);
  const handleTabClick = (index: number) => {
    setActiveTab(index);
  };
  return (
    <div>
      <div>
        {React.Children.map(children, (child, index) => (
          <button
            key={index}
            onClick={() => handleTabClick(index)}
            style={{ fontWeight: activeTab === index ? 'bold' : 'normal' }}
          >
            {child.props.label}
          </button>
        ))}
      </div>
      <div>
        {React.Children.map(children, (child, index) => (
          <div style={{ display: activeTab === index ? 'block' : 'none' }}>
            {child}
          </div>
        ))}
      </div>
    </div>
  );
};
export default Tabs;