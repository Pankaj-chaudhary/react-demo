import React from 'react';
import './ReportCard.css';

export interface Report {
  title: string;
  description: string;
  new?: boolean;
  lastVisited?: string;
  icon: JSX.Element;
}

const ReportCard: React.FC<{ report: Report }> = ({ report }) => {
  return (
    <div className="report-card">
      <div className="report-icon">
        {report.icon}
      </div>
      <div className="report-details">
        <h3>
          {report.title} {report.new && <span className="new">NEW</span>}
        </h3>
        <p>{report.description}</p>
        {report.lastVisited && <p className="last-visited">Last visited {report.lastVisited}</p>}
      </div>
    </div>
  );
};

export default ReportCard;
