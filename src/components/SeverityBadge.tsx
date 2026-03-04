import React from 'react';
import { Severity } from '../data';
import { AlertTriangle, CheckCircle, Info, Lightbulb, AlertCircle } from 'lucide-react';

interface SeverityBadgeProps {
  severity: Severity;
}

export const SeverityBadge: React.FC<SeverityBadgeProps> = ({ severity }) => {
  const config = {
    'Critical Issue': {
      color: 'bg-red-100 text-red-800 border-red-200',
      icon: <AlertCircle className="w-4 h-4 mr-1.5" />,
    },
    'Major Issue': {
      color: 'bg-orange-100 text-orange-800 border-orange-200',
      icon: <AlertTriangle className="w-4 h-4 mr-1.5" />,
    },
    'Minor Issue': {
      color: 'bg-yellow-100 text-yellow-800 border-yellow-200',
      icon: <AlertTriangle className="w-4 h-4 mr-1.5" />,
    },
    'Positive': {
      color: 'bg-green-100 text-green-800 border-green-200',
      icon: <CheckCircle className="w-4 h-4 mr-1.5" />,
    },
    'Recommendation': {
      color: 'bg-blue-100 text-blue-800 border-blue-200',
      icon: <Lightbulb className="w-4 h-4 mr-1.5" />,
    },
    'Note': {
      color: 'bg-gray-100 text-gray-800 border-gray-200',
      icon: <Info className="w-4 h-4 mr-1.5" />,
    },
  };

  const { color, icon } = config[severity];

  return (
    <span className={`inline-flex items-center px-2.5 py-1 rounded-[2px] text-xs font-semibold border ${color}`}>
      {icon}
      {severity}
    </span>
  );
};
