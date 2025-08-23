// src/app/(pages)/case-analysis/page.tsx

import CaseAnalysisList from '@/components/CaseAnalysisList';
import { Suspense } from 'react';

export default function CaseAnalysisPage() {
  return (
    <div className="container mx-auto p-4 py-6">
      <h1 className="text-3xl font-bold mb-6">Case Analyses</h1>
      <Suspense fallback={<p>Loading...</p>}>
        <CaseAnalysisList />
      </Suspense>
    </div>
  );
}