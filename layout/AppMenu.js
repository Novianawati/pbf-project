import React, { useContext } from 'react';
import AppMenuitem from './AppMenuitem';
import { LayoutContext } from './context/layoutcontext';
import { MenuProvider } from './context/menucontext';

const AppMenu = () => {
    const { layoutConfig } = useContext(LayoutContext);

    const model = [
        {
            label: 'FITUR',
            items: [
                { label: 'Home', icon: 'pi pi-fw pi-home', to: '/' },
                { label: 'Data Handphone', icon: 'pi pi-fw pi-list', to: '/uikit/listphone' },
                { label: 'Data Pelanggan', icon: 'pi pi-fw pi-id-card', to: '/uikit/listpelanggan' },
                { label: 'Data Pembelian', icon: 'pi pi-fw pi-tablet', to: '/uikit/listpembelian' },
                { label: 'Data Barang', icon: 'pi pi-fw pi-clone', to: '/uikit/listbarang' }
            ]
        }
    ];

    return (
        <MenuProvider>
            <ul className="layout-menu">
                {model.map((item, i) => {
                    return !item.seperator ? <AppMenuitem item={item} root={true} index={i} key={item.label} /> : <li className="menu-separator"></li>;
                })}
            </ul>
        </MenuProvider>
    );
};

export default AppMenu;
