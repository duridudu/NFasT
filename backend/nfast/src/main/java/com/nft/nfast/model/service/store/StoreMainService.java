package com.nft.nfast.model.service.store;

import com.nft.nfast.model.dto.business.*;
import org.json.simple.parser.ParseException;

import java.math.BigDecimal;
import java.net.URISyntaxException;
import java.util.List;

public interface StoreMainService {

    void saveNfast(NfastMintDto mintDto);
    List<IncomeFindDto> findAllIncomes(Long storeSequence);
    BigDecimal findMintIncome(Long storeSequence);
    BigDecimal findResellIncome(Long storeSequence);
    List<NfastMintedDto> findMintedNfast(Long storeSequence);
    void saveStore(StoreRegistDto storeInfo) throws URISyntaxException, ParseException;
}
