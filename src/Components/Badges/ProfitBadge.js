import React from 'react'

import { Badge } from '../../Styles/BadgeStyle';

const ProfitBadge = () => {
    return (
        <Badge>
            <i class="fas fa-chart-pie"></i> 
            <div>
                <h4>
                    Profit Badge
                </h4>
                <span>
                    R$ 1.500.000,00
                </span>
            </div> 
        </Badge>
    )
}

export default ProfitBadge