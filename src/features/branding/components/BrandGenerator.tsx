"use client";

import { useState } from 'react';
import { BrandForm } from './BrandForm';
import { BrandOutput } from './BrandOutput';
import { generateBrandAction } from '../actions';

export function BrandGenerator() {
  const [description, setDescription] = useState('');
  const [role, setRole] = useState('');
  const [aiOutput, setAiOutput] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleGenerate = async () => {
    if (!description || !role) {
      alert("Vui lòng nhập đủ thông tin!");
      return;
    }

    setIsLoading(true);
    setAiOutput('');

    try {
      // GỌI SERVER ACTION THAY VÌ API ROUTE
      const result = await generateBrandAction({
        projectDescription: description,
        targetRole: role,
      });

      if (result.error) {
        alert(result.error);
      } else if (result.data) {
        setAiOutput(result.data);
      }
    } catch (error) {
      console.error("Lỗi:", error);
      setAiOutput("Có lỗi xảy ra khi gọi AI Server Action.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
      <BrandForm 
        description={description}
        setDescription={setDescription}
        role={role}
        setRole={setRole}
        onSubmit={handleGenerate}
        isLoading={isLoading}
      />
      <BrandOutput 
        output={aiOutput}
        isLoading={isLoading}
      />
    </div>
  );
}
