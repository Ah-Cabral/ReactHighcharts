import React from 'react'

import { Badge } from '../../Styles/BadgeStyle';

const CostBadge = () => {
    return (
        <Badge>
            <i class="fas fa-chart-pie"></i> 
            <div>
                <h4>
                    Cost Badge
                </h4>
                <span>
                    R$ 3.000.000,00
                </span>
            </div>
           
        </Badge>
    )
}

export default CostBadge