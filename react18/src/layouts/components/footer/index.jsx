import React, { memo } from 'react';

import {
    AppFooterWrapper,
} from './style';

export default memo(function HYAppFooter() {
    return (
        <AppFooterWrapper>
            <div className="wrap-v2 content">
                footer
            </div>
        </AppFooterWrapper>
    )
})
