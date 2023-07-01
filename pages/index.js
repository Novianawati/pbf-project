import React, { useContext, useEffect, useRef, useState } from 'react';
import { LayoutContext } from '../layout/context/layoutcontext';

const Dashboard = () => {
    const [products, setProducts] = useState(null);
    const menu1 = useRef(null);
    const menu2 = useRef(null);
    const [lineOptions, setLineOptions] = useState(null);
    const { layoutConfig } = useContext(LayoutContext);

    const applyLightTheme = () => {
        const lineOptions = {
            plugins: {
                legend: {
                    labels: {
                        color: '#495057'
                    }
                }
            },
            scales: {
                x: {
                    ticks: {
                        color: '#495057'
                    },
                    grid: {
                        color: '#ebedef'
                    }
                },
                y: {
                    ticks: {
                        color: '#495057'
                    },
                    grid: {
                        color: '#ebedef'
                    }
                }
            }
        };

        setLineOptions(lineOptions);
    };

    useEffect(() => {
        if (layoutConfig.colorScheme === 'light') {
            applyLightTheme();
        } else {
            applyDarkTheme();
        }
    }, [layoutConfig.colorScheme]);


    return (
        <div className="grid">
            <div className="col-15 xl:col-11">
                <div className="card">
                    <div className="flex justify-content-between align-items-center mb-5">
                        <h5>TECHNOCELL</h5>
                    </div>
                    <ul className="list-none p-0 m-0">
                        <li className="flex flex-column md:flex-row md:align-items-center md:justify-content-between mb-4">
                            <div>
                                <div className="mt-1 text-600">
Toko Teknocell adalah toko terbaik untuk pembelian ponsel dan aksesori. Dengan desain modern dan staf yang terlatih, kami menawarkan koleksi ponsel terbaru dari berbagai merek terkemuka. Nikmati pengalaman berbelanja yang ramah dan efisien dengan layanan pelanggan yang superior. Kami juga menyediakan layanan perbaikan dan aksesori asli. Kunjungi Toko Teknocell untuk memenuhi kebutuhan teknologi Anda dengan mudah dan aman.</div>
                            </div>
                        </li>
                        <li className="flex flex-column md:flex-row md:align-items-center md:justify-content-between mb-4">
                            <div>
                                <span className="text-900 font-medium mr-2 mb-1 md:mb-0">Nama Anggota Kelompok : </span>
                                <div className="mt-1 text-600">1. Nesa Itirul Lail (2041720004)</div>
                                <div className="mt-1 text-600">2. Novianawati      (2041720173)</div>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Dashboard;
