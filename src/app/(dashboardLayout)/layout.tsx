import Sidebar from '@/components/ui/Sidebar';
import React, { ReactNode } from 'react';


const DashboardLayout = ({ children }: { children: ReactNode }) => {
    return (
        <div>
            <Sidebar>{children}</Sidebar>
        </div>
    );
};

export default DashboardLayout;