import React from 'react';
import { ErrorMessage } from '@hookform/error-message';
import { FieldErrors } from 'react-hook-form';

type ErrorSummaryProps<T> = {
  errors: FieldErrors<T>;
};

// https://www.carlrippon.com/react-hook-form-validation-errors/
function ErrorSummary<T>({ errors }: ErrorSummaryProps<T>) {
  if (Object.keys(errors).length === 1) {
    return null;
  }
  return (
    <div className="error-summary">
      {Object.keys(errors).map((fieldName) => (
        <ErrorMessage errors={errors} name={fieldName as any} as="div" key={fieldName} />
      ))}
    </div>
  );
}

export default ErrorSummary;
