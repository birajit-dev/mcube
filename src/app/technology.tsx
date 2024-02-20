// pages/about.tsx

import React from 'react';
import { Card, CardBody, Typography } from "@material-tailwind/react";

const AboutPage: React.FC = () => {
  return (
    <div>
      <Card>
        <CardBody>
          <Typography variant="h1">About Page</Typography>
          <Typography variant="body1">This is the About page content.</Typography>
        </CardBody>
      </Card>
    </div>
  );
}

export default AboutPage;
