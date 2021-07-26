import React from 'react'

import { Badge } from '../../Styles/BadgeStyle';

const RevenueBadge = () => {
    return (
        <Badge>
            <i class="fas fa-money-bill-wave"></i> 
            <div>
                <h4>
                    Revenue Badge
                </h4>
                <span>
                    R$ 1.500.000,00
                </span>
            </div> 
        </Badge>
    )
}

export default RevenueBadge