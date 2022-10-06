import React from 'react';
import styles from './WhatsApp.module.scss';


export default function WhatsApp() {
    return (
        <div className={styles['whatsApp']}> 
            <a className={styles['whatsApp__ancora']} href='https://wa.me/+5519981745504' target="_blank" rel="noreferrer" > <i className="fa fa-whatsapp fa-fw fa-2x" aria-hidden="true"></i> WhatssApp</a>
        </div>
    );
}