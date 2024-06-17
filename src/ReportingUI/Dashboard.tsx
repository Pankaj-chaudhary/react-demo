import React from 'react';
import ReportCard, { Report } from './ReportCard';
import './Dashboard.css';
import { FaChartPie, FaUsers, FaRegHandshake, FaLock, FaBusinessTime, FaHandsHelping, FaDollarSign, FaShieldAlt } from 'react-icons/fa';


const Dashboard: React.FC = () => {
    const reports: Report[] = [
        { title: 'Report 1', description: 'The only limit to our realization of tomorrow is our doubts of today. Let the future tell the truth, and work will be done.', new: true, icon: <FaChartPie /> },
        { title: 'Report 2', description: 'Do not wait to strike till the iron is hot; but make it hot by striking. Great things are not done by impulse, but by a series of small things brought together.', lastVisited: '17/10/223', icon: <FaUsers /> },
        { title: 'Report 3', description: 'Success is not the key to happiness. Happiness is the key to success. If you love what you are doing, you will be successful. The future belongs to those who believe in the beauty of their dreams.', lastVisited: '17/10/223', icon: <FaRegHandshake /> },
        { title: 'Report 4', description: 'Keep your face always toward the sunshine—and shadows will fall behind you. The best way to predict the future is to invent it. Life is 10% what happens to us and 90% how we react to it.', lastVisited: '17/10/223', icon: <FaLock /> },
        { title: 'Report 5', description: 'Your time is limited, don’t waste it living someone else’s life. Don’t be trapped by dogma – which is living with the results of other people’s thinking.', lastVisited: '17/10/223', icon: <FaBusinessTime /> },
        { title: 'Report 6', description: 'Do not go where the path may lead, go instead where there is no path and leave a trail. The best revenge is massive success. It is not the strongest of the species that survive, nor the most intelligent, but the one most responsive to change.', lastVisited: '17/10/223', icon: <FaHandsHelping /> },
        { title: 'Report 7', description: 'The only way to do great work is to love what you do. If you haven’t found it yet, keep looking. Don’t settle. As with all matters of the heart, you’ll know when you find it.', lastVisited: '17/10/223', icon: <FaDollarSign /> },
        { title: 'Report 8', description: 'The future belongs to those who prepare for it today. You must be the change you wish to see in the world. Life is what happens when you’re busy making other plans.', lastVisited: '17/10/223', icon: <FaShieldAlt /> }
    ];

  return (
    <div className="dashboard">
      <h1>Reporting</h1>
      <div className="report-cards">
        {reports.map((report, index) => (
          <ReportCard key={index} report={report} />
        ))}
      </div>
    </div>
  );
};

export default Dashboard;
