import React, { useContext } from 'react';
import { LayoutContext } from './context/layoutcontext';

const AppFooter = () => {
    const { layoutConfig } = useContext(LayoutContext);

    return (
        <div className="layout-footer">
            <span className="font-medium ml-2">Final Project PBF by Nesa Itfirul Lail & Novianawati</span>
        </div>
    );
};

export default AppFooter;
