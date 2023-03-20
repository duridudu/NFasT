package com.nft.nfast.model.dto.business;

import com.fasterxml.jackson.annotation.JsonAutoDetect;
import lombok.*;

import java.math.BigDecimal;

@Setter
@Getter
@ToString
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class NfastTradeDoneDto {
    private long nfastSequence;
    private BigDecimal nfastHopePrice;
}
