import React from 'react';

type CredentialCardProps = {
  credentialData: {
    service: string;
    username: string;
    password: string;
  };
};

export default function CredentialCard({
  credentialData,
}: CredentialCardProps): JSX.Element {
  return (
    <div>
      <p>{credentialData.service}</p>
      <p>{credentialData.username}</p>
      <p>{credentialData.password}</p>
    </div>
  );
}
