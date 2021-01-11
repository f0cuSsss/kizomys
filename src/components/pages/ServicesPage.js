import React from 'react'

import '../../styles/pages/ServicesPage.css'

const servicesItems = [
    { service: 'Спуск лодки', price: '50 грн.' },
    { service: 'Аренда лодки', price: 'от 150 грн./сутки' },
    { service: 'Аренда мотора', price: 'от 250 грн./сутки' }
];

const ServicesPage = () => {
    return (
        <div>
            <div className="e-title">Наши услуги</div>
            <div className="services-table">
                <table>
                    <tbody>
                        <tr>
                            <th>Услуга</th>
                            <th>Цена</th>
                        </tr>
                        {servicesItems.map((item, index) => {
                            return (
                                <tr key={index}>
                                    <td>{item.service}</td>
                                    <td>{item.price}</td>
                                </tr>
                            );
                        })}
                    </tbody>
                </table>
            </div>
        </div>
    );
}

export default ServicesPage;