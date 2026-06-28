import React from 'react';
import './Price.css';
import { PRICE_WORKS } from '../../data/portfolioWorks.js';
import barcode from '../../assets/barcode.svg';

const Price = () => {
    return (
        <section id="price" className="section price">
            <div className="container price__container">
                <h1 className="price__title">Стоимость</h1>
                <div className="price__body">
                    <div className="price__content">
                        {PRICE_WORKS.map((item) => (
                            <div className="item" key={item.id}>
                                <p className="item_desc">{item.priceDesc}</p>
                                <div className="item__price-wrapper">
                                    <p className="item_price">{item.price}</p>
                                    {item.note && <p className="item_note">{item.note}</p>}
                                </div>
                            </div>
                        ))}
                    </div>
                    <div className="price__line"></div>
                    <div className="price__hourly-rate">
                        <p className="item_desc">Почасовая ставка</p>
                        <p className="item_price">от 1.000</p>
                    </div>
                    <div className="price__barcode">
                        <p className="price__barcode-title">
                            Готов рассмотреть предложения о работе в спортивной индустрии — в составе команды, студии или в качестве штатного графического дизайнера.
                        </p>
                        <img className="barcode" src={barcode} alt="" />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Price;