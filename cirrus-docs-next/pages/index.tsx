import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import { withLayout } from '@moxy/next-layout';
import Axios from 'axios';

import { DefaultLayout } from '../layouts/default';
const Landing: React.FC<any> = () => {

    return (
        <div>
            <p>Test</p>
        </div>
    );
};

export default withLayout(<DefaultLayout />)(Landing);