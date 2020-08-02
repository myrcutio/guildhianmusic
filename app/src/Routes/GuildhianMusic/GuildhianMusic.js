import React from 'react';
import Typography from '@material-ui/core/Typography';

export const GuildhianMusic = () => (
    <div>
        <Typography variant="h6">GuildhianMusic</Typography>
        <div>Publisher for the music of James Scott Balentine</div>

        <Typography variant="h6">Ordering Information</Typography>
        <div>
            Catalog and Retail Price List: <a href="/catalog.pdf" target="_blank">PDF</a>
        </div>

        <Typography variant="h6">Retail Music Stores</Typography>
        <div>
            <ul>
                <li>Quantities of ten or more (score &amp; parts, mixed titles ok) with Purchase Order, billed
                    at wholesale rate, Net 30 days. For wholesale rate, for smaller quantities or other terms,
                    inquire at email address below.
                </li>
                <li>Special orders may be drop shipped to your customers on request.</li>
            </ul>
        </div>

        <Typography variant="h6">Schools, Libraries, Universities (Faculty &amp; Students)</Typography>
        <div>
            <ul>
                <li>All academic orders will receive a 10% discount and free shipping within the United States.
                    Discounts on international orders may be negotiated based on currency exchange rate.
                </li>
                <li>All music ordered in conjunction with a residency or clinic presentation by James Scott
                    Balentine will be supplied gratis for the event, and may be purchased at a 50% discount
                    following the residency, or returned to Guildhian Music within 30 days.
                </li>
            </ul>
        </div>

        <Typography variant="h6">Professional Performing Organizations and Musicians</Typography>
        <div>
            <ul className="bullets">
                <li>Scores for perusal and performance consideration in PDF format may be downloaded from this
                    site free of charge, with the proviso that you may not sell any of this music in any form,
                    physical or electronic.

                </li>
                <li>Performance materials - scores and/or parts - may be purchased at a 10% discount with free
                    shipping, or may be supplied via email in pdf format under certain conditions, upon request.
                    Inquire at the email address below for further information.

                </li>
                <li>Performances of the music of James Scott Balentine are licensed through ASCAP; we would
                    appreciate having notice of all public performances, and a copy of the program emailed to
                    the address below for reporting purposes to ASCAP.

                </li>
                <li>Mechanical license to record music published by Guildhian Music can be obtained by
                    contacting us at the email address below.


                </li>
                <li>Compact discs and individual downloads of the music of James Scott Balentine are available
                    through many online outlets and retail music stores, as well as through Guildhian Music
                    directly. Please inquire about price and availability at the email address below.

                </li>
                <li>Residencies, clinics, seminars and lecture presentations by James Scott Balentine are
                    available on a limited basis throughout the year. For information on fees, scheduling, and
                    sponsorship by Guildhian Music, contact James Scott Balentine at <a
                        href="mailto:guildhian@sbcglobal.net">guildhian@sbcglobal.net</a>
                </li>
            </ul>
        </div>

        <Typography variant="h6">You may also contact Guildhian Music via USPS at:</Typography>
        <div>23860 Iron Horse</div>
        <div>San Antonio, TX 78255</div>
    </div>
);